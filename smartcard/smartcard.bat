@echo off
mkdir %APPDATA%\smartcard
taskkill /IM frontagent.exe
ECHO =================================================
ECHO ..................Installing.....................
timeout /t 5 /nobreak > nul
del /f frontagent.exe
del /f localhost.crt
del /f localhost.key
C:\windows\explorer.exe https://smartcard.saksiam.co.th/Program.zip
timeout /t 5 /nobreak > nul
"%SYSTEMDRIVE%\Program Files\7-Zip\7z.exe" X D:\%username%\Downloads\Program.zip
xcopy "D:\%username%\Downloads\localhost.crt" "%APPDATA%\smartcard\"
xcopy "D:\%username%\Downloads\localhost.key" "%APPDATA%\smartcard\"
xcopy "D:\%username%\Downloads\frontagent.exe" "%APPDATA%\smartcard\"
del /f D:\%username%\Downloads\Program.zip
del /f D:\%username%\Downloads\localhost.crt
del /f D:\%username%\Downloads\localhost.key
del /f D:\%username%\Downloads\frontagent.exe
set SCRIPT="%TEMP%\%RANDOM%-%RANDOM%-%RANDOM%-%RANDOM%.vbs"
echo Set oWS = WScript.CreateObject("WScript.Shell") >> %SCRIPT%
echo sLinkFile = "%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\smartcard.lnk" >> %SCRIPT%
echo Set oLink = oWS.CreateShortcut(sLinkFile) >> %SCRIPT%
echo oLink.TargetPath = "%APPDATA%\smartcard\frontagent.exe" >> %SCRIPT%
echo oLink.WorkingDirectory ="%APPDATA%\smartcard" >> %SCRIPT%
echo oLink.Save >> %SCRIPT%
cscript /nologo %SCRIPT%
ECHO =================================================
ECHO ....................Starting.....................
timeout /t 5 /nobreak > nul
start %APPDATA%\smartcard\frontagent.exe
ECHO .....................success.....................
EXIT