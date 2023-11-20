Windows Package Manager (winget) is a command-line tool that enables users to discoer, install, upgrade, remove and configure application on windows 10 and higher version 

We can install winget utility using below powershell script in windows 

```powershell    
$progressPreference = 'silentlyContinue'

Write-Information "Downloading WinGet and its dependencies..."

Invoke-WebRequest -Uri https://aka.ms/getwinget -OutFile Microsoft.DesktopAppInstaller_8wekyb3d8bbwe.msixbundle

Invoke-WebRequest -Uri https://aka.ms/Microsoft.VCLibs.x64.14.00.Desktop.appx -OutFile Microsoft.VCLibs.x64.14.00.Desktop.appx

Invoke-WebRequest -Uri https://github.com/microsoft/microsoft-ui-xaml/releases/download/v2.7.3/Microsoft.UI.Xaml.2.7.x64.appx -OutFile Microsoft.UI.Xaml.2.7.x64.appx

Add-AppxPackage Microsoft.VCLibs.x64.14.00.Desktop.appx

Add-AppxPackage Microsoft.UI.Xaml.2.7.x64.appx

Add-AppxPackage Microsoft.DesktopAppInstaller_8wekyb3d8bbwe.msixbundle
```
