# FrontEnd challenge API

Interfaz para API desarrollada con React.js, la cual consume la API publica disponible en el siguiente repositorio: 

https://github.com/santdoyle/Back/


## Configuraciones

Antes de iniciar la aplicación es necesario **configurar la variable de entorno REACT_APP_API_URL** para definir la url a dónde se realizarán las peticiones. 

```
REACT_APP_API_URL=http://localhost:5050
```

## Ejecución

Para **ejecutar la aplicación** es necesario correr el siguiente comando: 

```
npm run start
```

## Inicio de sesión
Para **iniciar sesión** se requieren los siguientes datos:
```
email: santdoyle@gmail.com
password: YCWmXoSiU
```

## Estructura

La aplicación está dividida en tres pantallas principales: 

-Login: mediante la cual debemos definir los datos para autorizar el acceso del sistema. 
-Posts: Pantalla en la que se listan artículos, con su título y descripción. 
-Imágenes: Listado de imágenes paginado, mostrando 10 como límite por página.

## Desarrollo

El desarrollo de la aplicación se realizó mediante componentes funcionales y hooks. 
No utiliza bases de datos, en su lugar utiliza datos definidos en el archivo de configuración del servidor.

