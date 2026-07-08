Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$checks = [ordered]@{}

$checks["IIS Web Server"] = [bool](Get-WindowsOptionalFeature -Online -FeatureName IIS-WebServer -ErrorAction SilentlyContinue | Where-Object { $_.State -eq "Enabled" })
$checks["IIS Management Console"] = [bool](Get-WindowsOptionalFeature -Online -FeatureName IIS-ManagementConsole -ErrorAction SilentlyContinue | Where-Object { $_.State -eq "Enabled" })
$checks["IIS URL Rewrite module"] = [bool](Get-WebGlobalModule -Name RewriteModule -ErrorAction SilentlyContinue)
$checks["IIS Application Request Routing"] = [bool](Get-WebGlobalModule -Name ApplicationRequestRouting -ErrorAction SilentlyContinue)
$checks["IIS WebSocket Protocol"] = [bool](Get-WindowsOptionalFeature -Online -FeatureName IIS-WebSockets -ErrorAction SilentlyContinue | Where-Object { $_.State -eq "Enabled" })
$checks["Node.js"] = [bool](Get-Command node -ErrorAction SilentlyContinue)
$checks["npm"] = [bool](Get-Command npm -ErrorAction SilentlyContinue)

foreach ($item in $checks.GetEnumerator()) {
  $status = if ($item.Value) { "OK" } else { "MISSING" }
  Write-Host ("{0}: {1}" -f $item.Key, $status)
}

if ($checks.Values -contains $false) {
  exit 1
}
