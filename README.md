# EntregaCypressMonkey
Non-graded Assignment 

Nombre: Ivan Dario Peñaloza Rojas
Curso: Pruebas Automatizadas de Software

## Forma de ejecutar el codigo
1. El codigo se encuentra en el archivo monkey_testing.spec.js
2. Se hace uso de las funciones Math.floor, Math.ceil, Math.random para obtener datos alaeatorios
3. La pagina (es decir la aplicacion losestudiantes) presenta errores los cuales conducen a errores que NO son del test. Estos se encuentran en la carpeta: Imagenes Errores de la Aplicacion
4. Se {force:true} para evitar errores en el proceso de seleccion del HTML element
5. se hace uso de la funcion Cypress.dom.isElement() para saber si el elemento seleccionado esta realmente en la pagina.
6. Se eligen eventos aleatorios entre ['a','button','input']
7. Se genera ingresan valores aleatorios para todo 'input' en la pagina losestudiantes
