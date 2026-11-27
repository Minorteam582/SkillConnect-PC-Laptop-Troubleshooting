const problems = [
  {id:1, title:"Slow PC or Laptop", device:"Both", category:"Performance",
   summary:"System takes a long time to start, open apps or respond.",
   steps:[
    "Restart your computer and close all unused programs.",
    "Open Task Manager (Ctrl + Shift + Esc) and close apps using high CPU or memory.",
    "Uninstall programs you no longer use from Settings > Apps.",
    "Free up disk space. Keep at least 15% of your drive empty.",
    "Run a virus scan with Windows Security, then install pending Windows updates."
   ]},
  {id:2, title:"Laptop Overheating", device:"Laptop", category:"Hardware",
   summary:"Laptop gets very hot, or the fan runs loudly all the time.",
   steps:[
    "Place the laptop on a hard, flat surface. Do not use it on a bed or sofa.",
    "Close heavy programs and browser tabs you are not using.",
    "Clean the air vents gently with a soft brush or compressed air.",
    "Use a cooling pad if the laptop still runs hot.",
    "If it keeps overheating, book a technician to clean the fan and replace the thermal paste."
   ]},
  {id:3, title:"No Display", device:"Both", category:"Display",
   summary:"Screen stays black although the computer is on.",
   steps:[
    "Check that the monitor is on and the power cable is fixed properly.",
    "Check the display cable (HDMI or VGA) at both ends. Reconnect it firmly.",
    "Try a different cable or a different monitor if you have one.",
    "On a laptop, hold the power button for 15 seconds, then start again.",
    "If the fan runs but the screen stays black, book a technician to check the RAM and display."
   ]},
  {id:4, title:"Boot Failure (Computer Will Not Start)", device:"Both", category:"Startup",
   summary:"Computer turns on but Windows does not load.",
   steps:[
    "Remove all USB drives, external disks and other devices, then restart.",
    "Press the power button for 10 seconds to shut down fully, then start again.",
    "If Windows shows a recovery screen, choose Startup Repair.",
    "Try Safe Mode from the recovery options (Troubleshoot > Advanced options > Startup Settings).",
    "If nothing works, book a technician. Do not reinstall Windows without backing up your data."
   ]},
  {id:5, title:"Wi-Fi Not Working", device:"Both", category:"Network",
   summary:"Computer is not connecting to Wi-Fi or the internet is very slow.",
   steps:[
    "Check that Wi-Fi is turned on and Airplane mode is off.",
    "Restart your router. Switch it off, wait 30 seconds, then switch it on.",
    "Forget the Wi-Fi network from settings and connect again with the password.",
    "Run the Network Troubleshooter from Settings > System > Troubleshoot.",
    "Update the Wi-Fi driver from Device Manager. If it still fails, contact a technician."
   ]},
  {id:6, title:"Battery Draining Fast", device:"Laptop", category:"Battery",
   summary:"Laptop battery finishes much sooner than before.",
   steps:[
    "Lower the screen brightness and turn on Battery Saver mode.",
    "Close background apps from Task Manager.",
    "Check Settings > System > Battery to see which apps use the most power.",
    "Turn off Bluetooth and Wi-Fi when you do not need them.",
    "If the battery is old, it may need replacement. Book a technician to check its health."
   ]},
  {id:7, title:"Blue Screen Error", device:"Both", category:"System",
   summary:"Computer suddenly shows a blue screen and restarts.",
   steps:[
    "Note the error code shown on the blue screen, for example a stop code.",
    "Remove any new hardware or USB device you added recently.",
    "Update Windows and your device drivers.",
    "Run a memory check by searching Windows Memory Diagnostic in the Start menu.",
    "If the error repeats again and again, book a technician to check RAM and storage."
   ]},
  {id:8, title:"Keyboard Not Working", device:"Both", category:"Hardware",
   summary:"Some or all keys do not type.",
   steps:[
    "Restart the computer. Many keyboard issues are fixed by a simple restart.",
    "For a USB keyboard, try another USB port or another keyboard.",
    "Turn the keyboard upside down and gently tap it to remove dust or crumbs.",
    "Open Device Manager, right-click the keyboard and choose Uninstall device, then restart.",
    "If keys are still dead on a laptop, book a technician. The keyboard may need replacing."
   ]},
  {id:9, title:"Laptop Not Charging", device:"Laptop", category:"Battery",
   summary:"Charger is connected but the battery percentage does not increase.",
   steps:[
    "Check the wall socket with another device and try a different socket.",
    "Check the charger cable for cuts or bends, and clean the charging port gently.",
    "Remove the charger, press the power button for 15 seconds, then plug it in again.",
    "Make sure you use the original charger with the correct wattage.",
    "If it still does not charge, book a technician to test the charger and the battery."
   ]},
  {id:10, title:"Loud Fan Noise", device:"Both", category:"Hardware",
   summary:"Fan makes a loud or rattling sound while the computer runs.",
   steps:[
    "Check Task Manager for programs using high CPU, because they make the fan spin faster.",
    "Move the computer to a place with good air flow, away from walls.",
    "Clean dust from the vents with a soft brush or compressed air.",
    "Shut down the computer fully before cleaning any part.",
    "If the grinding noise continues, the fan may be damaged. Book a technician."
   ]}
];