function contarVocales(cadena) {
    let contador = 0;
    const vocales = "aeiouAEIOU";
    
    for (let i = 0; i < cadena.length; i++) {
      if (vocales.includes(cadena[i])) {
        contador++;
      }
    }
    
    console.log(`La palabra ${cadena} tiene ${contador} vocales`);
    
}
    console.log("Solucion 1:");
    console.log(contarVocales("Palta"));
    console.log(contarVocales("otorrinolaringología")); 
    console.log(contarVocales("Hoy"));
    console.log("///////////////");



function maxNum(array) {
    let maximo = array[0];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maximo) {
        maximo = array[i];
      }
    }
    
    console.log(`el maximo numero del array [${array}] es [${maximo}]`);
}

  
    console.log("Solucion 2:");
    let arrayNumeros = [1, 2, 3, 4, 5, 8, 6, 3, 3, 2, 9, 1, 6, 7, 8];
    console.log(maxNum(arrayNumeros));
    console.log(maxNum([10, 20, 30]));
    console.log(maxNum([5, 4, 3, 2, 1]));
    console.log("///////////////");


function calcularMedia(array) {
    let suma = 0;
  
    for (let i = 0; i < array.length; i++) {
      suma += array[i];
    }
    let media = suma / array.length;
    
    console.log(`La media del array [${array}] es [${media}]`);
    
}   

    console.log("Solucion 3:");
    console.log(calcularMedia([1, 2, 3])); 
    console.log(calcularMedia([19, 23, 72, 41])); 
    console.log(calcularMedia([10, 230, 391])); 
    console.log("///////////////");


function invertirArray(array) {
    let arrayInvertido = array.reverse();
    console.log(`El array [${array}] invertido quedaria asi [${arrayInvertido}]`);
    
}
    
    console.log("Solucion 4:");
    console.log(invertirArray([1, 2, 3, 4, 5]))
    console.log(invertirArray([10, 20, 30]));
    console.log(invertirArray([5, 4, 3, 2]));
    console.log("///////////////");

  
function eliminarDuplicados(array) {
    let arraySinDuplicados = [...new Set(array)]; 
    console.log(`El array [${array}] sin los numeros duplicados seria [${arraySinDuplicados}]`);
    
}   
  
    console.log("Solucion 5:");
    console.log(eliminarDuplicados([2, 3, 3, 4, 5, 5, 6])); 
    console.log(eliminarDuplicados([11, 23, 23, 34])); 
    console.log(eliminarDuplicados([7, 7, 7, 7])); 
    console.log("///////////////");


function primeraLetraEnMayuscula(cadena) {
    let palabras = cadena.split(" ");
    let palabrasConMayuscula = palabras.map(palabra => 
      palabra.charAt(0).toUpperCase() + palabra.slice(1)
    );
    
    console.log(palabrasConMayuscula.join(" "));
    
}
  
    console.log("Solucion 6:");
    console.log(primeraLetraEnMayuscula("hola mundo desde javascript"));
    console.log(primeraLetraEnMayuscula("javascript es el mejor idioma de todos"));
    console.log(primeraLetraEnMayuscula('programar es desestresante'));
    console.log("///////////////");


function fibonacci(num) {
    let fib = [0, 1];
    for (let i = 2; i < num; i++) {
      fib.push(fib[i-1] + fib[i-2]);
    }
    
    console.log(`Los ${num} primeros numeros de fibonacci son ${fib.slice(0, num)}`);
    
}
  
    console.log("Solucion 7:");
    console.log(fibonacci(5));
    console.log(fibonacci(3)); 
    console.log(fibonacci(8)); 
    console.log("///////////////");
