# challenge-toolbox-fullstack

Para iniciar el proyecto, se debe ejecutar el siguiente comando:

```bash
docker-compose up -d
``` 

Para acceder a la aplicación, se debe acceder a la siguiente url:

http://localhost:3050



## Descripción

El proyecto se compone de 3 contenedores de docker, donde nginx es el encargado de manejar las peticiones http y renderizar el contenido de la aplicación

### Backend

El backend se compone de un servidor de nodejs, el cual se encarga de manejar las peticiones http y comunicarse con la API externa de ToolBox

Para probar la aplicacion en NodeJS disponemos de los siguientes endpoints:

- http://localhost:3050/api/files/data: Devuelve la información de todos los archivos

- http://localhost:3050/api/files/data?fileName={}: Devuelve la información de un archivo en concreto

- /api/files/list: Devuelve la lista de archivos

### Frontend

El frontend se compone de una aplicación de React, la cual se encarga de mostrar la información de los archivos

Tenemos 2 rutas:
    - /: Muestra la lista de archivos
    - /?fileName={}: Muestra la información de un archivo en concreto

### Nginx

El contenedor de nginx se encarga de manejar las peticiones http y renderizar el contenido de la aplicación

## Estructura del proyecto

El proyecto se compone de 3 carpetas:

- backend: Contiene el código del servidor de nodejs
- frontend: Contiene el código de la aplicación de React
- nginx: Contiene el archivo de configuración de nginx

## Despliegue

Para desplegar el proyecto, se debe ejecutar el siguiente comando:

```bash
docker-compose up -d
```

## A mejorar

- Añadir tests unitarios y e2e
- Añadir un sistema de logs
- Añadir un sistema de cache
- Añadir un sistema de autenticación
- Añadir un sistema de monitorización
- Añadir un sistema de CI/CD
- Implementar un sistema de versionado de la API
- Añadir un sistema de configuración
- Añadir un sistema de internacionalización
- Añadir un sistema de seguridad
- Añadir un sistema de documentación
- Cambiar el codigo JS a TS
- Por temas de velocida de desarrollo, seria mejor implementar Jest en lugar de Mocha

## Autor

- **Perez Alan** - [Linkedin](https://linkedin.com/in/perez-alan)
