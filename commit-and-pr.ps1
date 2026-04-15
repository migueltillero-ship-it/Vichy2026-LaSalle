# ==========================================================
# VICHY 2026 - Commit & Push Script
# Ejecuta este script haciendo clic derecho -> "Ejecutar con PowerShell"
# o desde terminal: .\commit-and-pr.ps1
# ==========================================================

Set-Location "C:\Users\ALIANZA FRANCESA\Vichy2026-LaSalle"

Write-Host ""
Write-Host "====================================================" -ForegroundColor Cyan
Write-Host "  VICHY 2026 - Commit de mejora exponencial" -ForegroundColor Cyan
Write-Host "====================================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "[1/5] Revisando estado actual..." -ForegroundColor Yellow
git status

Write-Host ""
Write-Host "[2/5] Agregando archivos modificados..." -ForegroundColor Yellow
git add index.html public/index.html commit-and-pr.ps1

Write-Host ""
Write-Host "[3/5] Creando commit..." -ForegroundColor Yellow
$commitMessage = @"
Mejora exponencial: experiencia cinematografica ultra-lujo Vichy 2026

- Intro en dos fases: video 3s + revelacion con contenido 3D
- Titulo intro reducido para caber en viewport
- Dismiss por click/ESC/Enter/Space
- Auto-dismiss reducido a 8s
- Boton con pulso dorado animado
- Hint "Click Enter ESC para continuar"
- Sistema de diseno completo (Playfair/Cormorant/Inter)
- Paleta tricolor francesa + dorado champana
- Cursor spotlight ambiental
- Barra de progreso de scroll tricolor
- 30 particulas flotantes en intro
- Navegacion flotante con blur
- Hero con stats animadas, bandera 3D
- Seccion Alianza (La Salle + AF + CAVILAM)
- Strip convenio con 4 contadores
- CAVILAM sede (split feature)
- AF San Cristobal sede (split reverso)
- Timeline 5 fases con dots pulsantes
- Grid 8 destinos clickeables
- Mosaico cultural asimetrico
- Grid bienestar con 6 cards SVG
- Testimonios con avatares
- FAQ acordeon animado
- Formulario registro 11 campos
- Footer institucional
- Boton musica flotante con ecualizador
- Musica inicia solo post-intro con fade-in
- Tilt 3D en cards
- Contadores con easing cubico
- Parallax hero
- Reduced motion support
"@

git commit -m $commitMessage

Write-Host ""
Write-Host "[4/5] Empujando al repositorio remoto..." -ForegroundColor Yellow
git push origin master

Write-Host ""
Write-Host "[5/5] Estado final:" -ForegroundColor Yellow
git log --oneline -5
Write-Host ""

Write-Host "====================================================" -ForegroundColor Green
Write-Host "  LISTO - Ahora puedes crear el PR en GitHub" -ForegroundColor Green
Write-Host "  URL: https://github.com/migueltillero-ship-it/Vichy2026-LaSalle/compare" -ForegroundColor Green
Write-Host "====================================================" -ForegroundColor Green
Write-Host ""
Write-Host "Opcional: crear PR desde linea de comandos (requiere gh CLI instalado):" -ForegroundColor DarkGray
Write-Host '  gh pr create --title "Vichy 2026: experiencia cinematografica ultra-lujo" --body "Mejora exponencial del landing"' -ForegroundColor DarkGray
Write-Host ""

Read-Host "Presiona Enter para cerrar"
