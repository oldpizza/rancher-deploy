@echo off
mkdir %APPDATA%\smartcard
del /f smartcard.bat
ECHO =================================================
ECHO ..................Downloading....................
C:\windows\explorer.exe https://smartcard.saksiam.co.th/smartcard.zip
timeout /t 5 /nobreak > nul
"%SYSTEMDRIVE%\Program Files\7-Zip\7z.exe" X D:\%username%\Downloads\smartcard.zip
xcopy "D:\%username%\Downloads\smartcard.bat" "%APPDATA%\smartcard\"
xcopy "D:\%username%\Downloads\task.vbs" "%APPDATA%\smartcard\"
del /f smartcard.zip
del /f smartcard.bat
del /f task.vbs
set path=C:\Windows\System32
timeout /t 5 /nobreak > nul
ECHO =================================================
ECHO ..................Installing.....................
schtasks /create /tn "smartcard" /sc DAILY /mo 2 /tr "cmd.exe /c cd /d \"%APPDATA%\smartcard\"  & \"%APPDATA%\smartcard\task.vbs\""
schtasks /run /tn "smartcard"
timeout /t 5 /nobreak > nul