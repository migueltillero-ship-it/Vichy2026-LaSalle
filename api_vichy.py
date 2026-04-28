from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import os
from datetime import datetime

app = FastAPI(title="Motor Misión Vichy 2026")

# Permitir que la página web se comunique con este motor (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

ARCHIVO_EXCEL = "Base_Datos_Vichy2026.xlsx"

@app.post("/submit")
async def recibir_expediente(
    Nombre_Estudiante: str = Form(...),
    Nombre_Tutor: str = Form(...),
    WhatsApp: str = Form(...),
    email: str = Form(...)
):
    # 1. Atrapar los datos y ponerles fecha exacta
    nuevo_registro = {
        "Fecha de Registro": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "Estudiante": Nombre_Estudiante,
        "Tutor/Padre": Nombre_Tutor,
        "WhatsApp": WhatsApp,
        "Correo": email,
        "Estatus Logístico": "Expediente Recibido"
    }

    # 2. Guardar inteligentemente en Excel
    if os.path.exists(ARCHIVO_EXCEL):
        df = pd.read_excel(ARCHIVO_EXCEL)
        df = pd.concat([df, pd.DataFrame([nuevo_registro])], ignore_index=True)
    else:
        df = pd.DataFrame([nuevo_registro])

    df.to_excel(ARCHIVO_EXCEL, index=False)

    print(f"✅ ¡NUEVO INGRESO! {Nombre_Estudiante} guardado en Excel.")

    # 3. Confirmar a la página web que todo salió perfecto
    return {"success": True, "message": "Guardado localmente"}