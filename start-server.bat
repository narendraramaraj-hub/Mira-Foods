@echo off
rem Double-click to preview the Mira Foods website at http://localhost:8000
start "" http://localhost:8000/
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0serve.ps1" -Port 8000
