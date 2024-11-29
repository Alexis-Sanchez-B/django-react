Django-React App
Este proyecto combina Django como backend y React como frontend para crear una aplicación web moderna y funcional. El objetivo principal es gestionar tareas, implementando funcionalidades como creación, actualización y eliminación de tareas mediante un sistema API REST.

📋 Características
Backend: Django (Django REST Framework).
Frontend: React.js con Axios para la comunicación con la API.
Gestión de Tareas: CRUD completo (Crear, Leer, Actualizar y Eliminar).
Integración API REST: Conexión eficiente entre backend y frontend.
Estructura Modular: Código organizado y escalable para facilitar su mantenimiento.

🚀 Instalación y Configuración
1. Clonar el repositorio
git clone https://github.com/Alexis-Sanchez-B/django-react.git
cd django-react

2. Configuración del Backend (Django)
Crear y activar un entorno virtual
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate

Instalar las dependencias
pip install -r requirements.txt
Realizar las migraciones

python manage.py migrate
Ejecutar el servidor

python manage.py runserver
El backend estará disponible en: http://localhost:8000.

3. Configuración del Frontend (React)
Instalar dependencias
cd cliente
npm install
Ejecutar el servidor de desarrollo
npm run dev
El frontend estará disponible en: http://localhost:5173.

📂 Estructura del Proyecto
django-react/
│
├── cliente/                # Código del frontend (React.js)
│   ├── src/
│   │   ├── api/            # Configuración de Axios y servicios API
│   │   ├── components/     # Componentes React
│   │   ├── pages/          # Páginas principales
│   │   └── styles/         # Estilos CSS
│   └── package.json        # Dependencias de React
│
├── backend/                # Código del backend (Django)
│   ├── tareas/             # Aplicación principal de tareas
│   ├── settings.py         # Configuración de Django
│   ├── urls.py             # Enrutamiento del backend
│   └── manage.py           # Comando de gestión de Django
│
└── README.md               # Documentación del proyecto

⚙️ Funcionalidades Implementadas
CRUD de Tareas:
Crear, leer, actualizar y eliminar tareas desde el frontend interactuando con la API REST del backend.
Gestión de Estado:
Axios para el manejo eficiente de solicitudes HTTP y gestión de respuestas.
Interfaz Reactiva:
React.js para proporcionar una experiencia de usuario fluida y rápida.

🛠 Tecnologías Utilizadas
Frontend:
React.js
Axios
Vite

Backend:
Django
Django REST Framework
Base de Datos:
SQLite (por defecto; puede cambiarse a PostgreSQL, MySQL, etc.)

📝 Notas Importantes
Asegúrate de que el backend y el frontend estén ejecutándose en sus respectivos puertos.
Configura CORS_ALLOWED_ORIGINS en el archivo settings.py para permitir solicitudes desde el frontend.

🧑‍💻 Autor
Alexis Andres Sanchez Bucarey
Desarrollador BackEnd / Full Stack Jr.