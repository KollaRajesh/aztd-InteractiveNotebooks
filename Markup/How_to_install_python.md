
Pre-Requisites: [How to install Chocolatey Package Manager](/How_to_install_Chocolatey_Package_Manager.md) 
###  Install Python3 package using choco package manager

```powershell
    choco install python -y
    choco install python3 -y -force
```
####  Run Python3 Executable

```powershell
$Python3ExecutableLocation="C:\ProgramData\chocolatey\lib\python311\tools\python-3.11.4-amd64.exe"

if (Test-Path $Python3ExecutableLocation){
Start-Process -FilePath $Python3ExecutableLocation -WindowStyle Maximized}
```
#### Verify python installed version 

```powershell
  PS> py --version
  Python 3.11.4

PS> py -0
 -V:3.11 *        Python 3.11 (64-bit)
 -V:3.11-32       Python 3.11 (32-bit)

PS> py -0p
 -V:3.11 *        C:\Users\<userId>\AppData\Local\Programs\Python\Python311\python.exe
 -V:3.11-32       C:\Users\<userId>\AppData\Local\Programs\Python\Python311-32\python.exe
```

<!-- 
<!-- [Tutorial](https://docs.python.org/3.11/tutorial/index.html) -->
<!--[Documentation](https://docs.python.org/3.11/index.html) -->
choco install nano -y
-->

