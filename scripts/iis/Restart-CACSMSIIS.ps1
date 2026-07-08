param(
  [string]$SiteName = "CACSMS Autonomous",
  [string]$AppPoolName = "CACSMSAutonomousAppPool"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Import-Module WebAdministration

if (Test-Path "IIS:\AppPools\$AppPoolName") {
  Restart-WebAppPool -Name $AppPoolName
}

if (Test-Path "IIS:\Sites\$SiteName") {
  Stop-Website -Name $SiteName
  Start-Website -Name $SiteName
}

Write-Host "Restarted CACSMS IIS resources."
