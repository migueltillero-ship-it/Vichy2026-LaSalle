import vtracer
import os

def vectorizar_logotipos():
    # Diccionario con los archivos de entrada (imágenes) y los nombres de salida (vectores)
    archivos = {
        "Gemini_Generated_Image_49fmig49fmig49fm.jpg": "La_Salle_Vector.svg",
        "logo_af_sc.jpg": "AFSC_Vector.svg",
        "logocavilam2024.png": "CAVILAM_Vector.svg"
    }

    print("Iniciando el proceso de vectorización para el viaje de inmersión 2026...\n")

    for entrada, salida in archivos.items():
        if not os.path.exists(entrada):
            print(f"⚠️ Error: No se encontró el archivo '{entrada}'. Verifique que esté en la misma carpeta.")
            continue
            
        print(f"Procesando: {entrada} -> {salida}...")
        
        try:
            # Configuración de vtracer optimizada para logotipos institucionales
            vtracer.convert_image_to_svg_py(
                entrada,
                salida,
                colormode='color',        # Mantiene los colores institucionales originales
                hierarchical='stacked',   # Apila las capas para un SVG más ordenado
                mode='spline',            # Utiliza curvas suaves, ideal para tipografías y escudos
                filter_speckle=4,         # Elimina pequeños ruidos o artefactos en la imagen
                color_precision=6,        # Precisión en la agrupación de colores
                layer_difference=16,      # Tolerancia para diferenciar capas de color
                corner_threshold=60,      # Detección de ángulos agudos
                length_threshold=4.0,     # Umbral de longitud de trazos
                max_iterations=10,        # Iteraciones de suavizado
                splice_threshold=45,
                path_precision=8          # Alta precisión en el trazado (recomendado para logos)
            )
            print(f"✅ Éxito: '{salida}' generado correctamente.\n")
        except Exception as e:
            print(f"❌ Ocurrió un error al procesar {entrada}: {e}\n")

    print("Proceso finalizado. Los archivos SVG ya pueden ser insertados en los documentos.")

if __name__ == "__main__":
    vectorizar_logotipos()