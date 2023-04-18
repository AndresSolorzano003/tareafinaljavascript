const suma = (a,b) =>{
    /**
     * 
     * a y b son los parámetros de entrada.
     * La función debe devolver la suma de los parámetros de entrada
     * Debes generar el código para que la función haga lo solicitado.
     */
      sumatoria=a+b;
    return  "La suma de: " + a +" + "+ b +" es igual a "+ sumatoria; 

    
    
    
}
console.log("ejercicio #1 suma")
console.log(suma(8,3))




const sonIguales = (x, y)=>{
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Debes generar el código para que la función haga lo solicitado.
    igualdad=false;
    if(x==y){
      igualdad=true
    }else{
      igualdad=false;
    }

    return  "El resultado entre "+x +" y "+y+ " es: "+ igualdad;
}
console.log("") 
console.log("ejercicio #2 son iguales")
console.log(sonIguales(5,5))
console.log(sonIguales(3,5))


function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:

    longitud=false;
      if(str1.length === str2.length){
        longitud=true;
      }else{
        longitud=false
      }

      return "El resultado entre "+str1 +" y "+str2+ " es: "+ longitud;
  }
  console.log("") 
  console.log("ejercicio #3 longitud")

  console.log(tienenMismaLongitud("hola","peor"))
  
  console.log(tienenMismaLongitud("desayuno","almuerzo  "))

  console.log("") 
  console.log("ejercicio #4 Es positivo")
  function esPositivo(numero) {
    /**
     * la función recibe como parámetro de entrada un número entero.
     * Devuelve como resultado una cadena de texto que indica si el 
     * número es positivo o negativo. 
     * Si el número es positivo, devolver ---> "Es positivo"
     * Si el número es negativo, devolver ---> "Es negativo"
     * Si el número es 0, devuelve false
     * Tu código:
     */
  
    verificacion =" ";

    if(numero>0)
      verificacion ="Es positivo"
      else{
        verificacion="Es negativo"

      }

      if(numero==0){
        verificacion ="Es neutro";
      }

      return  "El numero "+ numero + "  es " + verificacion;
  }

  console.log(esPositivo(4));
  console.log(esPositivo(-3));
  console.log(esPositivo(0));

  console.log(" ")
  console.log("ejercicio #5 Colores")
  const colors = (color)=>{
    //La función recibe un color. Devolver el string correspondiente:
    //En caso que el color recibido sea "blue", devuelve --> "This is blue"
    //En caso que el color recibido sea "red", devuelve --> "This is red"
    //En caso que el color recibido sea "green", devuelve --> "This is green"
    //En caso que el color recibido sea "orange", devuelve --> "This is orange"
    //Caso default: devuelve --> "Color not found"
    //Usar el statement Switch.
    
   switch(color){
    case "blue":
    return "this is blue";
    case "red":
     return "this is red";
    case "green":
    return "this is green";
    case "orange":
    return "this is orange";
    default:
      return "Color not found"
   }


  }
  console.log(colors("red"))
  console.log(colors("green"))
  console.log(colors("orange"))
  console.log(colors("black"))

  console.log(" ")
  console.log("ejercicio #6 fizzBuzz")
  const fizzBuzz = (numero)  => {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero

    

    if(numero % 3==0 ){
      return  numero + " = "+ "fizz"
    } else if(numero % 5==0){
      return  numero + " = "+ "buzz"
    } else if(numero %3==0 && numero%5) {
      return numero + " = "+ "fizzbuzz"
    } else{
      return numero;
    } 
  }
 
  console.log(fizzBuzz(5))
  console.log(fizzBuzz(3))
  console.log(fizzBuzz(15))
  console.log(fizzBuzz(2))

  console.log(" ")
  console.log("ejercicio #7 Devolver 1er elemento ")
  const devolverPrimerElemento = (array) => {
    /**
     * La función recibe como parámetro de entrada un arreglo.
     * La función debe regresar el primer elemento del arreglo
     */
    // Tu código:
  
    return "La primera posicion es: "+ array[0];

   
  }

  
  console.log("el array tiene los siguientes datos :"+ [3,5,6,7,4,2,3])
  console.log(devolverPrimerElemento(  array=[3,5,6,7,4,2,3]))

  console.log(" ")
  console.log("ejercicio #8 agregrar item ")
  const agregarItemAlFinalDelArray = (array, elemento) =>{
    /**
     * La función recibe dos parámetros de entrada, un arreglo y un elemento
     * Se debe añadir el elemento al final del arreglo y luego regresar el arreglo
     */
    // Tu código:
    array.push(elemento)
    return   array + " El numero agregado es: "+ elemento ;
  }

  console.log(agregarItemAlFinalDelArray( array=[3,5,6,7,4,2,3],12))
  console.log(" ")
  console.log("ejercicio #9 crear un objeto ")

  const usuarios = [
    {
      nombre: 'carlos',
      email: 'carlos212@gmail.com',
      password: '124235',
      amigos: ['jose', 'maria'],
      esPremium: false
    },
    {
      nombre: 'Esteban',
      email: 'esteban@gmail.com',
      password: '2134dw',
      amigos: ['Antonio', 'Camilo'],
      esPremium: false
    },
    {
      nombre: 'Andres',
      email: 'Andres@gmail.com',
      password: 'andress2345',
      amigos: ['Ana', 'Laura', 'Esteban'],
      esPremium: false
    }
  ];
  
  const nuevoUsuario = (nombre, email, password,esPremium) => {
    /**
     * Crea un nuevo objeto con las propiedades coincidiendo con los argumentos
     * que se pasan a la función.  Devuelve el objeto
     */
    // Tu código:
    
    const usuario={
      nombre: nombre,
      email: email,
      password : password,
      amigos:[],
  
      esPremium: false,

       
    }

  return usuario;
  }
    const usuarionuevo=nuevoUsuario("carlos","carlos@as.com","1234")
    console.log("este es",usuarionuevo);

  console.log(" ")
  console.log("ejercicio #10 contraseñas iguales  ")

  console.log(nuevoUsuario())

  const verificarPassword = (usuario, password) => {
    // Comprueba si el "password" enviado coincide con la propiedad "password" del objeto "usuario"
    // Devuelve "true" si coinciden
    // De lo contrario, devuelve "false"
    // // Tu código:
    if(usuario.password === password){
      return true;
    }else{
      return false;
    }

  }

  console.log(verificarPassword(usuarionuevo,"1234"))
  console.log(verificarPassword(usuarionuevo,"andres"))

  console.log(" ")
  console.log("ejercicio #11 cambiar contraseña  ")

  const actualizarPassword =(usuario, nuevaPassword) => {
    // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
    // Devuelve el objeto
    // Tu código:
    usuario.password = nuevaPassword;
    return usuario;
  }

  console.log(actualizarPassword(usuarionuevo,"nueva123"))
  console.log(usuarionuevo)
  console.log(" ")
  console.log("ejercicio #12 agregar amigo ")
  const agregarAmigo = (usuario, nuevoAmigo) => {
    // "usuario" tiene una propiedad llamada "amigos" que es un array
    // Agrega "nuevoAmigo" al final de ese array
    // Devuelve el objeto "usuario"
    // // Tu código:

    usuario.amigos.push(nuevoAmigo)
    return usuario
  
   
  }

  console.log(agregarAmigo(usuarionuevo, "jose")); 
  console.log(agregarAmigo(usuarionuevo, "mario")); 
console.log(usuarionuevo); 
console.log(" ")
  console.log("ejercicio #13 usuarios premium ")
  const pasarUsuarioAPremium = usuarios => {
    // "usuarios" es un array de objetos "usuario"
    // Cada objeto "usuario" tiene la propiedad "esPremium"
    // Define cada propiedad "esPremium" de cada objeto como "true"
    // Devuelve el array de usuarios
    // Tu código:

    for(let i =0; i<usuarios.length; i++){
      usuarios[i].esPremium = true;
    }
    return usuarios;
    
  }

  console.log(pasarUsuarioAPremium(usuarios));

  console.log(" ")
  console.log("ejercicio #14 likes ")
  const sumarLikesDeUsuario = usuario => {
    // "usuario" tiene una propiedad llamada "posts" que es un array
    // "posts" es un array de objetos "post"
    // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
    // Suma todos los likes de todos los objetos "post"
    // Devuelve la suma
    // Tu código:
    

  }

  
  console.log(" ")
  console.log("ejercicio #15 herencia ")
class Persona {
  // ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con 
  //las propiedades de la persona y sus valores.
  //un ejemplo del objeto es el siguiente
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }
    constructor(nombre, apellido,edad, domicilio) {
       this.nombre=nombre;
       this.apellido=apellido;
       this.edad=edad;
       this.domicilio=domicilio;

    }

    detalle(){
      return{
        Nombre: this.nombre,
        Apellido: this.apellido,
        Edad:this.edad,
        Domicilio:this.domicilio

      }
    }
}

const persona = new Persona("Andres","solorzano",20,"Medellin") 
console.log(persona.detalle())

console.log(" ")
  console.log("ejercicio #16 crear persona  ")
const crearInstanciaPersona = (nombre, apellido, edad, dir)=>{
    //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
    //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
    //Devolver la nueva persona creada
    const persona = new persona(nombre,apellido,edad,dir)
    return persona;
}
//const nuevapersona = new crearInstanciaPersona("ana","sanchez",23,"Bogota");
//console.log(nuevapersona.detalle())

const sumarArray = (numeros, cb) =>{
    // Suma todos los números enteros (int/integers) de un array ("numeros")
    // Pasa el resultado a `cb`
    // No es necesario devolver nada
    let suma=0;
    for (let i = 0; i < numeros.length; i++){
      suma = suma + numeros[i];
    }
  cb(suma);
}

const copiarEach = (array, cb) =>{
    // Itera sobre la matriz "array" y pasa los valores a cb uno por uno
    // Pista: Estarás invocando a `cb` varias veces (una por cada valor en el array)
    // no tienes que devolver nada
    
   // usar en:  Este caso es para una matriz(Bidimencional )

    
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        cb.push(array[i][j]);
      }
    }
        for (let i = 0; i < array.length; i++) {
      cb.push(array[i]);
    }
    
    
   
    // este se utiliza unicamente si es para un vector
    /*let arreglo = []
    array.forEach(element => {
      cb(element);
    });
    */
  }

  const operacionMatematica =(n1, n2, cb) =>{
    //Vamos a recibir una función (cb) que realiza una operación matemática junto con dos números.
    //Devolver la función pasándole como argumentos los números recibidos.
    //Tu código:
    return cb(n1,n2);
  }

  function filter(array) {
    //Filtrar todos los elementos del array que comiencen con la letra "a".
    //Devolver un nuevo array con los elementos que cumplen la condición
    //Tu código:
    let awords=[];
    array.forEach(element => {
      if(element.startsWith('a'))
      awords.push(element);
    });
    return awords;
  } 


  /**
 * Por favor no borrar el código que hay de aquí en adelante.
 * Este código sirve para ejecutar las pruebas de la solución hallada para cada
 * una de las funciones creadas.
 */
/*module.exports = {
    suma,
    sonIguales,
    tienenMismaLongitud,
    esPositivo,
    colors,
    fizzBuzz,
    devolverPrimerElemento,
    agregarItemAlFinalDelArray,
    nuevoUsuario,
    verificarPassword,
    actualizarPassword,
    agregarAmigo,
    pasarUsuarioAPremium,
    sumarLikesDeUsuario,
    Persona,
    crearInstanciaPersona,
    sumarArray,
    copiarEach,
    operacionMatematica,
    filter
}*/

