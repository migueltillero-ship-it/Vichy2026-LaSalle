import csv, os
from datetime import datetime

def registrar(msg_raw):
    if '[WEB-VICHY]' in msg_raw:
        fecha = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        file_exists = os.path.isfile('prospectos_vichy_2026.csv')
        with open('prospectos_vichy_2026.csv', 'a', newline='', encoding='utf-8') as f:
            writer = csv.writer(f)
            if not file_exists: writer.writerow(['Fecha', 'Mensaje', 'Estatus'])
            writer.writerow([fecha, msg_raw, 'Nuevo'])
        print('✅ Registrado en Excel (CSV)')

if __name__ == '__main__':
    print('--- CRM AFSC VICHY ACTIVO ---')
    registrar(input('Pegue el mensaje de WhatsApp aquí: '))
