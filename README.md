# Domain name generator.

Creando un generador de dominios a partir de unos arrays dados.

### Pre-requisitos 📋

1. Ordenador o dispositivo movil.
2. Programa donde copiar el repositorio. (Gitpod, VisualStudioCode, Pycharm ....)
3. Navegador web donde visualizar el resultado del codigo.


## Construido con 🛠️

* [HTML5] - No se modifica por loq ue muestra el boilerplate
* [CSS3] - No se modifica por loq ue muestra el boilerplate
* [Javascript](https://www.javascript.com/) - Usado para generar interactividad (los nombres de dominios en este caso).


## Estructura y explicación del codigo ⚙️

* Creando un JS que usa 3 Arrays dados para generar un nombre de dominio. Con el codigo se recorren todos los arrays mostrando todas las combinaciones posibles.
* Para ello se utiliza una funcion que he llamado 'domainname', la cual hace un nested loop de los arrays y los recorre individualmente cada elemento interno, se utiliza un for..of (Por indice con un for..in iria recorriendo cada array e imprimiendo el indice, 0000, 0100, 0110, 0111 ... 1011... 1113) . Ese recorrido lo imprime por consola consecutivamente con un console.log()

* Nota! -> Se añade un array extra a los dados por el ejercicio con las extensiones mas populares de dominios para poder crear mas resultados.


## Autor ✒️

* **Jose Luis Gil** - *Ejercicio completo* - [JoseLike](https://github.com/JoseLike)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/JoseLike/excuse-generator/contributors) quíenes han participado en este proyecto. 