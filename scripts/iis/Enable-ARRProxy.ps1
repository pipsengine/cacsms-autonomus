Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$principal = New-Object Security.Principal.WindowsPrincipal([Security.Principal.WindowsIdentity]::GetCurrent())
if (-not $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
  throw "Run this script from an elevated PowerShell session."
}

Import-Module WebAdministration

Set-WebConfigurationProperty `
  -PSPath "MACHINE/WEBROOT/APPHOST" `
  -Filter "system.webServer/proxy" `
  -Name "enabled" `
  -Value "True"

Set-WebConfigurationProperty `
  -PSPath "MACHINE/WEBROOT/APPHOST" `
  -Filter "system.webServer/proxy" `
  -Name "preserveHostHeader" `
  -Value "True"

Write-Host "ARR reverse proxy is enabled."
