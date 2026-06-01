@echo off
REM One-command setup for the portfolio (Windows).
REM Installs dependencies and starts the dev server.
REM
REM Usage:
REM   setup.bat            install + start dev server
REM   setup.bat --build    install + production build, then start

setlocal
cd /d "%~dp0"

echo ==^> Checking prerequisites...
where node >nul 2>nul
if errorlevel 1 (
  echo [X] Node.js is not installed. Install Node 18.18+ from https://nodejs.org and re-run.
  exit /b 1
)
where npm >nul 2>nul
if errorlevel 1 (
  echo [X] npm is not installed ^(it normally ships with Node.js^).
  exit /b 1
)
for /f "delims=" %%v in ('node -v') do echo [OK] Node.js %%v detected.

echo ==^> Installing dependencies (this can take a minute)...
if exist package-lock.json (
  call npm ci || call npm install
) else (
  call npm install
)
if errorlevel 1 (
  echo [X] Dependency installation failed.
  exit /b 1
)
echo [OK] Dependencies installed.

if not exist "public\images\projects" (
  echo ==^> Generating placeholder images...
  call node scripts\gen-placeholders.mjs
)

if "%~1"=="--build" (
  echo ==^> Creating production build...
  call npm run build || exit /b 1
  echo ==^> Starting production server at http://localhost:3000 ...
  call npm run start
  goto :eof
)

echo [OK] Setup complete!
echo ==^> Starting the dev server at http://localhost:3000 (press Ctrl+C to stop)...
call npm run dev

endlocal
