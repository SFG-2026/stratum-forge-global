@echo off
title StratumForge Global - Dev Server
color 0B

echo ===================================================
echo       STRATUMFORGE GLOBAL - DEV SERVER
echo ===================================================
echo.

cd /d "%~dp0"

:: Check if node_modules exists
if not exist "node_modules\" (
    echo [INFO] node_modules not found. Installing dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] Failed to install dependencies.
        pause
        exit /b %errorlevel%
    )
)

echo [INFO] Starting StratumForge Global on http://localhost:5174/ ...
echo [INFO] Opening browser in 3 seconds...
echo.

:: Launch browser in background after 3 seconds
start "" timeout /t 3 /nobreak >nul & start http://localhost:5174/

:: Start Vite dev server
call npm run dev -- --host --port 5174

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Dev server stopped unexpectedly.
    pause
)
