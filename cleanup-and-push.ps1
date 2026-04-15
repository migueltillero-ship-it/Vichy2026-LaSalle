# ==========================================================
# VICHY 2026 - Limpieza de node_modules + Push limpio
# ==========================================================
# Este script:
# 1. Quita node_modules del tracking de git (sin borrar los archivos locales)
# 2. Reescribe la historia para eliminar node_modules de TODOS los commits
# 3. Hace push forzado al repo limpio
# ==========================================================

Set-Location "C:\Users\ALIANZA FRANCESA\Vichy2026-LaSalle"

Write-Host ""
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "  VICHY 2026 - Limpieza del repositorio" -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "[1/6] Creando rama orphan (historia limpia)..." -ForegroundColor Yellow
git checkout --orphan temp-clean-branch

Write-Host ""
Write-Host "[2/6] Desindexando todos los archivos..." -ForegroundColor Yellow
git rm -rf --cached . 2>$null | Out-Null

Write-Host ""
Write-Host "[3/6] Añadiendo solo archivos importantes (sin node_modules)..." -ForegroundColor Yellow
# Añadir .gitignore primero para que aplique desde el principio
git add .gitignore

# Añadir archivos principales del proyecto
git add index.html
git add public/index.html 2>$null
git add commit-and-pr.ps1 2>$null
git add cleanup-and-push.ps1 2>$null

# Añadir carpetas del proyecto (si existen)
if (Test-Path "assets") { git add assets/ }
if (Test-Path ".claude") { git add .claude/ }
if (Test-Path "Video_Creativo_Generado_Al_Instante.mp4") { git add "Video_Creativo_Generado_Al_Instante.mp4" 2>$null }

# Añadir cualquier archivo de configuración en raíz (sin node_modules)
Get-ChildItem -File | Where-Object {
    $_.Name -notmatch "^(package-lock\.json|yarn\.lock)$" -and
    $_.Name -notlike ".env*" -and
    $_.Extension -notin @(".xlsx", ".pdf")
} | ForEach-Object {
    git add $_.Name 2>$null
}

Write-Host ""
Write-Host "[4/6] Creando commit limpio..." -ForegroundColor Yellow
git commit -m "Vichy 2026: experiencia cinematografica ultra-lujo (historia limpia)"

Write-Host ""
Write-Host "[5/6] Reemplazando rama main..." -ForegroundColor Yellow
git branch -D main 2>$null
git branch -m main

Write-Host ""
Write-Host "[6/6] Push forzado al remoto..." -ForegroundColor Yellow
Write-Host "ADVERTENCIA: Esto reescribira la historia del repo en GitHub." -ForegroundColor Red
Write-Host ""
$confirm = Read-Host "Escribir SI para continuar con el push forzado"

if ($confirm -eq "SI") {
    git push origin main --force
    Write-Host ""
    Write-Host "============================================================" -ForegroundColor Green
    Write-Host "  LISTO! Repositorio limpio subido a GitHub" -ForegroundColor Green
    Write-Host "============================================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Siguiente:" -ForegroundColor Cyan
    Write-Host "  1. Espera 1-2 minutos para que GitHub Pages redeploye" -ForegroundColor White
    Write-Host "  2. Ve a: https://migueltillero-ship-it.github.io/Vichy2026-LaSalle/" -ForegroundColor White
    Write-Host "  3. Presiona Ctrl+Shift+R (recarga con cache limpio)" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "Push cancelado. El repo local esta listo pero no se subio." -ForegroundColor Yellow
    Write-Host "Cuando estes listo, ejecuta: git push origin main --force" -ForegroundColor Yellow
    Write-Host ""
}

Read-Host "Presiona Enter para cerrar"
