# IIS Deployment

CACSMS Autonomous is prepared to run behind Microsoft IIS on Windows Server.

Recommended production mode:

```text
Browser
IIS Site on port 2526
URL Rewrite + ARR
Node/Next server on 127.0.0.1:2527
CACSMS Autonomous
```

Legacy `iisnode` mode is also supported through `apps/web/web.config`, but the reverse-proxy mode is preferred for modern Node/Next deployments.

## Files

- `web.config`: root IIS reverse-proxy configuration for URL Rewrite and ARR.
- `apps/web/web.config`: optional `iisnode` configuration if the IIS site points directly at `apps/web`.
- `apps/web/server.js`: Node/Next server entrypoint.
- `.env.iis.example`: IIS production environment template.
- `scripts/iis/Install-IISFeatures.ps1`: enables Windows IIS features.
- `scripts/iis/Enable-ARRProxy.ps1`: enables ARR proxy behavior.
- `scripts/iis/Configure-IISSite.ps1`: creates or updates the IIS site and app pool.
- `scripts/iis/Test-IISPrerequisites.ps1`: checks IIS, URL Rewrite, ARR, Node, and npm.
- `scripts/iis/Restart-CACSMSIIS.ps1`: restarts the site and app pool.

## Required Server Components

Install:

- IIS Web Server
- IIS Management Console
- Static Content
- Default Document
- HTTP Errors
- HTTP Redirect
- Request Filtering
- Windows Authentication, if domain auth is needed
- Dynamic and Static Compression
- WebSocket Protocol
- IIS URL Rewrite
- IIS Application Request Routing
- Node.js LTS

## Setup

Run PowerShell as Administrator:

```powershell
.\scripts\iis\Install-IISFeatures.ps1
```

Install URL Rewrite and ARR if they are not already present:

```text
https://www.iis.net/downloads/microsoft/url-rewrite
https://www.iis.net/downloads/microsoft/application-request-routing
```

Enable ARR proxy:

```powershell
.\scripts\iis\Enable-ARRProxy.ps1
```

Create or update the IIS site:

```powershell
.\scripts\iis\Configure-IISSite.ps1 `
  -SiteName "CACSMS Autonomous" `
  -AppPoolName "CACSMSAutonomousAppPool" `
  -PhysicalPath "C:\inetpub\wwwroot\cacsms-autonomous" `
  -Port 2526
```

## Runtime

Use the root `web.config` when IIS is reverse proxying from public IIS port `2526` to the internal app on `127.0.0.1:2527`.

Start the app process with:

```powershell
npm run start:iis
```

In production, run the Node process under a Windows service manager such as NSSM, WinSW, PM2 for Windows, or a controlled enterprise service wrapper. IIS should remain the public entry point.

## Check

```powershell
npm run iis:check
```

The check should report `OK` for IIS, URL Rewrite, ARR, WebSocket Protocol, Node.js, and npm.

## Notes

- Keep `NODE_ENV=production`.
- Keep the internal Node listener on `127.0.0.1`, not a public interface.
- Terminate TLS at IIS using the Windows certificate store.
- Use the IIS app pool identity for file permissions.
- Keep request limits aligned with creative uploads and media workloads.
