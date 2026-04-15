Clear-Host
Write-Host "====================================================" -ForegroundColor Cyan
Write-Host "   ALLIANCE FRANÇAISE - CONTROL DE VIAJE 2026       " -ForegroundColor White -BackgroundColor Blue
Write-Host "====================================================`n" -ForegroundColor Cyan

# Sincronización con Gmail
Write-Host "[1/2] Sincronizando registros desde la Web..." -ForegroundColor Yellow
python generar_crm.py

# Generación de Reporte PDF
if (Test-Path "Base_Datos_Vichy2026.xlsx") {
    Write-Host "[2/2] Generando reporte ejecutivo actualizado..." -ForegroundColor Yellow
    python reporte_pdf.py
    
    Write-Host "`n✅ SISTEMA ACTUALIZADO" -ForegroundColor Green
    Write-Host "----------------------------------------------------"
    Write-Host "Reporte listo: Reporte_Vichy_2026_DianaZebadua.pdf"
    Write-Host "----------------------------------------------------"
} else {
    Write-Host "`n❌ ERROR: No se encontró la base de datos." -ForegroundColor Red
}