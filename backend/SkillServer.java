import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class SkillServer {

    static String esc(String s) {
        return s.replace("\\", "\\\\").replace("\"", "\\\"").replace("\n", " ");
    }

    static void send(HttpExchange ex, int code, String type, byte[] body) throws IOException {
        ex.getResponseHeaders().set("Content-Type", type);
        ex.sendResponseHeaders(code, body.length);
        try (OutputStream os = ex.getResponseBody()) {
            os.write(body);
        }
    }

    static void json(HttpExchange ex, String body) throws IOException {
        send(ex, 200, "application/json; charset=utf-8", body.getBytes(StandardCharsets.UTF_8));
    }

    static String issueJson(ResultSet rs) throws SQLException {
        return "{\"id\":" + rs.getInt("id")
            + ",\"title\":\"" + esc(rs.getString("title")) + "\""
            + ",\"device\":\"" + esc(rs.getString("device")) + "\""
            + ",\"category\":\"" + esc(rs.getString("category")) + "\""
            + ",\"summary\":\"" + esc(rs.getString("summary")) + "\"";
    }

    public static void main(String[] args) throws Exception {
        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);

        // All problems
        server.createContext("/api/problems", ex -> {
            try (Connection con = DBConnection.getConnection();
                 Statement st = con.createStatement();
                 ResultSet rs = st.executeQuery("SELECT id,title,device,category,summary FROM issues ORDER BY id")) {
                StringBuilder sb = new StringBuilder("[");
                boolean first = true;
                while (rs.next()) {
                    if (!first) sb.append(",");
                    first = false;
                    sb.append(issueJson(rs)).append("}");
                }
                sb.append("]");
                json(ex, sb.toString());
            } catch (Exception e) {
                e.printStackTrace();
                send(ex, 500, "text/plain", "Server error".getBytes());
            }
        });

        // One problem with its steps
        server.createContext("/api/fix", ex -> {
            try (Connection con = DBConnection.getConnection()) {
                String q = ex.getRequestURI().getQuery();
                int id = Integer.parseInt(q.substring(q.indexOf("id=") + 3).split("&")[0]);
                PreparedStatement p = con.prepareStatement("SELECT id,title,device,category,summary FROM issues WHERE id=?");
                p.setInt(1, id);
                ResultSet rs = p.executeQuery();
                if (!rs.next()) {
                    send(ex, 404, "text/plain", "Not found".getBytes());
                    return;
                }
                StringBuilder sb = new StringBuilder(issueJson(rs));
                sb.append(",\"steps\":[");
                PreparedStatement p2 = con.prepareStatement("SELECT instruction FROM solutions WHERE issue_id=? ORDER BY step_no");
                p2.setInt(1, id);
                ResultSet rs2 = p2.executeQuery();
                boolean first = true;
                while (rs2.next()) {
                    if (!first) sb.append(",");
                    first = false;
                    sb.append("\"").append(esc(rs2.getString("instruction"))).append("\"");
                }
                sb.append("]}");
                json(ex, sb.toString());
            } catch (Exception e) {
                e.printStackTrace();
                send(ex, 400, "text/plain", "Bad request".getBytes());
            }
        });

        // Website files from the frontend folder
        server.createContext("/", ex -> {
            String path = ex.getRequestURI().getPath();
            if (path.equals("/")) path = "/index.html";
            Path root = Paths.get("../frontend").normalize();
            Path file = Paths.get("../frontend" + path).normalize();
            if (!file.startsWith(root) || !Files.isRegularFile(file)) {
                send(ex, 404, "text/plain", "Page not found".getBytes());
                return;
            }
            String name = file.getFileName().toString();
            String type = name.endsWith(".html") ? "text/html; charset=utf-8"
                : name.endsWith(".css") ? "text/css; charset=utf-8"
                : name.endsWith(".js") ? "application/javascript; charset=utf-8"
                : "application/octet-stream";
            send(ex, 200, type, Files.readAllBytes(file));
        });

        server.start();
        System.out.println("Server started: http://localhost:8080");
    }
}