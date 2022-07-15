@echo off
mkdir %APPDATA%\smartcard
cd %APPDATA%\smartcard
taskkill /IM frontagent.exe
ECHO =================================================
ECHO ..................Installing.....................
timeout /t 5 /nobreak > nul
del /f frontagent.exe
del /f localhost.crt
del /f localhost.key
curl http://www.file.maews.com/pro.rar -o smartcard.rar
set SCRIPT="%TEMP%\%RANDOM%-%RANDOM%-%RANDOM%-%RANDOM%.vbs"
echo Set oWS = WScript.CreateObject("WScript.Shell") >> %SCRIPT%
echo sLinkFile = "%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\smartcard.lnk" >> %SCRIPT%
echo Set oLink = oWS.CreateShortcut(sLinkFile) >> %SCRIPT%
echo oLink.TargetPath = "%APPDATA%\smartcard\frontagent.exe" >> %SCRIPT%
echo oLink.WorkingDirectory ="%APPDATA%\smartcard" >> %SCRIPT%
echo oLink.Save >> %SCRIPT%
cscript /nologo %SCRIPT%
set path=%SYSTEMDRIVE%\Program Files\WinRAR
unrar e smartcard.rar
del /f smartcard.rar
ECHO =================================================
ECHO ....................Starting.....................
start %APPDATA%\smartcard\frontagent.exe
ECHO .....................success.....................
EXIT