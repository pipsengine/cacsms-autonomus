param(
  [string]$SiteName = "CACSMS Autonomous",
  [string]$AppPoolName = "CACSMSAutonomousAppPool",
  [string]$PhysicalPath = "C:\inetpub\wwwroot\cacsms-autonomous",
  [int]$Port = 2526,
  [string]$HostHeader = ""
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$principal = New-Object Security.Principal.WindowsPrincipal([Security.Principal.WindowsIdentity]::GetCurrent())
if (-not $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
  throw "Run this script from an elevated PowerShell session."
}

Import-Module WebAdministration

if (-not (Test-Path -LiteralPath $PhysicalPath)) {
  New-Item -ItemType Directory -Path $PhysicalPath | Out-Null
}

if (-not (Test-Path "IIS:\AppPools\$AppPoolName")) {
  New-WebAppPool -Name $AppPoolName | Out-Null
}

Set-ItemProperty "IIS:\AppPools\$AppPoolName" -Name managedRuntimeVersion -Value ""
Set-ItemProperty "IIS:\AppPools\$AppPoolName" -Name processModel.identityType -Value "ApplicationPoolIdentity"
Set-ItemProperty "IIS:\AppPools\$AppPoolName" -Name startMode -Value "AlwaysRunning"
Set-ItemProperty "IIS:\AppPools\$AppPoolName" -Name recycling.periodicRestart.time -Value "00:00:00"

if (-not (Test-Path "IIS:\Sites\$SiteName")) {
  $bindingInformation = if ([string]::IsNullOrWhiteSpace($HostHeader)) { "*:${Port}:" } else { "*:${Port}:${HostHeader}" }
  New-Website -Name $SiteName -PhysicalPath $PhysicalPath -ApplicationPool $AppPoolName -BindingInformation $bindingInformation | Out-Null
} else {
  Set-ItemProperty "IIS:\Sites\$SiteName" -Name physicalPath -Value $PhysicalPath
  Set-ItemProperty "IIS:\Sites\$SiteName" -Name applicationPool -Value $AppPoolName
}

icacls $PhysicalPath /grant "IIS AppPool\${AppPoolName}:(OI)(CI)(RX)" | Out-Null

Write-Host "Configured IIS site '$SiteName' at '$PhysicalPath' on port $Port."
