Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$principal = New-Object Security.Principal.WindowsPrincipal([Security.Principal.WindowsIdentity]::GetCurrent())
if (-not $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
  throw "Run this script from an elevated PowerShell session."
}

$features = @(
  "IIS-WebServerRole",
  "IIS-WebServer",
  "IIS-CommonHttpFeatures",
  "IIS-DefaultDocument",
  "IIS-DirectoryBrowsing",
  "IIS-HttpErrors",
  "IIS-StaticContent",
  "IIS-HttpRedirect",
  "IIS-ApplicationDevelopment",
  "IIS-NetFxExtensibility45",
  "IIS-ISAPIExtensions",
  "IIS-ISAPIFilter",
  "IIS-ASPNET45",
  "IIS-HealthAndDiagnostics",
  "IIS-HttpLogging",
  "IIS-LoggingLibraries",
  "IIS-RequestMonitor",
  "IIS-HttpTracing",
  "IIS-Security",
  "IIS-RequestFiltering",
  "IIS-BasicAuthentication",
  "IIS-WindowsAuthentication",
  "IIS-URLAuthorization",
  "IIS-IPSecurity",
  "IIS-Performance",
  "IIS-HttpCompressionStatic",
  "IIS-HttpCompressionDynamic",
  "IIS-WebSockets",
  "IIS-ManagementConsole",
  "IIS-ManagementService"
)

foreach ($feature in $features) {
  Enable-WindowsOptionalFeature -Online -FeatureName $feature -All -NoRestart | Out-Null
  Write-Host "Enabled $feature"
}

Write-Host "IIS Windows features enabled. Install IIS URL Rewrite and ARR separately if they are not already installed."
Write-Host "URL Rewrite: https://www.iis.net/downloads/microsoft/url-rewrite"
Write-Host "ARR: https://www.iis.net/downloads/microsoft/application-request-routing"
