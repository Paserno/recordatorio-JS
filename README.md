# Reforzar JS
Uso de find y filter


- En este caso usamos el `.find`, ya que necesitamos traer 1 valor de un **objeto literal**, para esto usamos una funcion callback, que nos permite traer el dato asociado al Id que le entreguemos.
`````
const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
``````
- En este otro caso, utilizamos el `filter`, para traer a todos los elementos que contengan el mismo "owner".
``````
const getHeroeByOwner = (owner)=> heroes.filter((heroe) => heroe.owner === owner);
``````

#

> __Elemento Posterior 👀:__ __[Primeros pasos de React 👣](https://github.com/Paserno/first-react-couterapp)__
