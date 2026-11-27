import java.sql.Connection;
import java.sql.DriverManager;

public class DBConnection {
    static final String URL = "jdbc:mysql://localhost:3306/skillconnect";
    static final String USER = "skilluser";
    static final String PASSWORD = "Skill@123";

    public static Connection getConnection() throws Exception {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }

    public static void main(String[] args) throws Exception {
        Connection con = getConnection();
        System.out.println("Connected to MySQL!");
        con.close();
    }
}