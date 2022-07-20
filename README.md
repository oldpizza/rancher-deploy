
oooooo
 
ติดตั้งผ่านไฟล์ install.bat0

...............................................................


การ config ต่างๆ ในไฟล์ install.bat

mkdir = สร้าง folder ตาม path
cd = ย้ายไปยัง path ที่เราสร้าง
curl = ตำแหน่งไฟล์ที่จะไป download มา -o = เปลี่ยนชื่อไฟล์ที่ download มา
set path ของ winrar เพื่อใช้ในการแตกไฟล์
schtasks ตั้ง task เพื่อติดตั้งตามเวลาที่กำหนด

...............................................................


การ config ต่างๆ ในไฟล์ task.vbs

แก้ path ในการ run ไฟล์ = WshShell.Run chr(34) & "...path..." & Chr(34), 0


..............................................................


การ config ต่่างๆ ในไฟล์ smartcard.bat

mkdir = สร้าง folder ตาม path
cd = ย้ายไปยัง path ที่เราสร้าง
curl = ตำแหน่งไฟล์ที่จะไป download มา -o = เปลี่ยนชื่อไฟล์ที่ download มา
set path ของ winrar เพื่อใช้ในการแตกไฟล์

.........................___..................................


การสร้าง shortcut เพื่อนำไปใช้ใน startup 

echo Set oWS = WScript.CreateObject("WScript.Shell") >> %SCRIPT%
echo sLinkFile = "%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\smartcard.lnk" >> %SCRIPT%
echo Set oLink = oWS.CreateShortcut(sLinkFile) >> %SCRIPT%
echo oLink.TargetPath = "%APPDATA%\smartcard\frontagent.exe" >> %SCRIPT%
echo oLink.WorkingDirectory ="%APPDATA%\smartcard" >> %SCRIPT%
echo oLink.Save >> %SCRIPT%
cscript /nologo %SCRIPT%\

.........................___..................................

