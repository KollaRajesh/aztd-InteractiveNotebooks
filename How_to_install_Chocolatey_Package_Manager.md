### Install Chocolatey 

#### Option:1 Install Chocolatey from Command Prompt
```cmd
    @powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString(_https://chocolatey.org/install.ps1_))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin
```

#### Option:2 Install Chocolatey from Powershell
```pwsh
    Set-ExecutionPolicy Bypass -Scope Process -Force;

    [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072;

    iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

####  Enable global confirmation feature 
```pwsh
choco feature enable -n allowGlobalConfirmation
```
