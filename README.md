# (a) Estructura general del proyecto 
El proyecto principalmente consulta la API de https://www.themoviedb.org/, la finalidad de crear el proyecto fue ahorrarnos la cración del backend y utilizando los mismos recursos de está plataforma. Utilizando el estilo de arquitectura REST se logra consultar la API, así como aplicar CRUD al proyecto. El usuario podrá iniciar sesión y crear una cuenta redirigiendo al usuario a la página de https://www.themoviedb.org/. Una vez que el usuario se cree su cuenta ahí, puede iniciar sesión en el proyecto y podrá obtener datos de la API del sitio web. De esta forma, ya iniciando sesión podrá agregar películas calificarlas, borrarlas y en cada película podrá consultar el reparto de los actores, director entre otros. 
La principal carpeta es src, en esta carpeta nos encontramos otras carpetas las cuales nos encontramos las siguientes utils: aquí añadimos alertas del frontend, así como distintas interacciones, la interface así como la API en donde usamos los métodos get, post, put y delete. También nos encontramos con un archivo CREATEAPI en donde creamos la api y obtenemos la API KEY del archivo API. También tenemos otra carpeta llamada styles, aquí añadimos los estilos del proyecto general. Usando CSS Y SCSS principalmente SCSS. La carpeta de hooks la cual desarrollamos estos para dividir los componentes en funciones más pequeñas para la recolección de datos. En este caso para el localStorage y el uso de la API misma. También está la carpeta de pages, la cual nos lleva a distintas secciones de la aplicación web. En la carpeta context está el diseño del tema, en este caso los colores claros  oscuros para la selección del tema.


# movie-app-main Buscador películas 
Para usar este proyecto se deben instalar las herramientas node.js y react.js 
Creamos un buscador de películas en el cual te podrás logear usando la API de https://www.themoviedb.org/ en donde podrás calificar, guardar, eliminar y ver los estrenos 
de las películas más famosas. 
# Paso 1 
Descargar el proyecto y guardarlo en una carpeta 
# paso 2 
Instalar las dependencias de node.js con npm install 
# paso 3 
Correr el proyecto con npm start 

