//Una materia de la carrera de Ingeniería de Sistemas tiene 30 alumnos, divididos en 3 comisiones. Estos arreglos contienen las notas finales de los alumnos en cada comisión :
//comisionA = [8, 5, 7, 10, 9, 2, 4, 8, 6, 8]
//comisionB = [3, 6, 8, 5, 4, 7, 7, 4, 6, 8]
//comisionC = [7, 6, 9, 8, 9, 8, 5, 7, 10, 9]
//1) Crear una función que devuelva el mayor promedio y a que comisión corresponde.
//2) Crear una función que devuelva el menor promedio y a que comisión corresponde.
//3) Teniendo en cuenta que la materia se aprueba con 6, crear una función que
//devuelva la cantidad de desaprobados en una comisión, mostrar el resultado para cada comisión.
//4) Crear una función que devuelva la menor nota de una comisión, mostrar el resultado
let comisionA:any[0]=[8, 5, 7, 10, 9, 2, 4, 8, 6, 8];
let comisionB:any[0]=[3, 6, 8, 5, 4, 7, 7, 4, 6, 8];
let comisionC:any[0]=[7, 6, 9, 8, 9, 8, 5, 7, 10, 9]
function mayorpromedio(array:number[]=[],array1:number[]=[],array2:number[]=[]) {
  let promedio1:number;
  promedio1=0;
  let promedio2:number;
  promedio2=0;
  let promedio3:number;
  promedio3=0;
  for (let index = 0; index < array.length; index++) {
    promedio1+=array[index]/array.length;
    if (promedio1>promedio2&&promedio1>promedio3) {
      console.log(`El Mayor es el promedio de la comision A es: ${promedio1}`)
    }
       }
      for (let inde = 0; inde < array1.length; inde++) {
        promedio2+=array1[inde]/array1.length;
        if (promedio2>promedio1&&promedio2>promedio3) {
          console.log(`El Mayor promedio es el de la comision B es: ${promedio2}`)
        }
          }
for (let ind = 0; ind < array2.length; ind++) {
  promedio3+=array2[ind]/array2.length;
  if (promedio3>promedio1&&promedio3>promedio1) {
    console.log(`El Mayor  promedio es el  de la comision C es: ${promedio3}`)
  }
  }
  return mayorpromedio
}
mayorpromedio(comisionA[0]=[8, 5, 7, 10, 9, 2, 4, 8, 6, 8],comisionB[0]=[3, 6, 8, 5, 4, 7, 7, 4, 6, 8],comisionC[0]=[7, 6, 9, 8, 9, 8, 5, 7, 10, 9])
function menorpromedio(array:number[]=[],array1:number[]=[],array2:number[]=[]) {
  let promedio1:number;
  promedio1=0;
  let promedio2:number;
  promedio2=0;
  let promedio3:number;
  promedio3=0;
  for (let index = 0; index < array.length; index++) {
    promedio1+=array[index]/array.length;
    if (promedio1<promedio2&&promedio1<promedio3) {
      console.log(`El menor promedio de la comisionA es: ${promedio1}`)
    }
       }
      for (let inde = 0; inde < array1.length; inde++) {
        promedio2+=array1[inde]/array1.length;
        if (promedio2<promedio1&&promedio2<promedio3) {
          console.log(`El menor promedio de la comision B es: ${promedio2}`)
        }
          }
for (let ind = 0; ind < array2.length; ind++) {
  promedio3+=array2[ind]/array2.length;
  if (promedio3<promedio1&&promedio3<promedio1) {
    console.log(`El menor promedio de la comision C es: ${promedio3}`)
  }
  }
  return menorpromedio
}
menorpromedio(comisionA[0]=[8, 5, 7, 10, 9, 2, 4, 8, 6, 8],comisionB[0]=[3, 6, 8, 5, 4, 7, 7, 4, 6, 8],comisionC[0]=[7, 6, 9, 8, 9, 8, 5, 7, 10, 9])
function desaprobados(array:number[]=[],array1:number[]=[],array2:number[]=[]) {
 let comisionAdesaprobados:any[]=new Array(array);
 let comisionBdesaprobados:any[]=new Array(array1);
 let comisionCdesaprobados:any[]=new Array(array2);
  for (let index = 0; index < array.length; index++) {
 if (array[index]<6) {
   for (let i = 0; i < comisionAdesaprobados.length; i++) {
     comisionAdesaprobados[i]=array[index];
     console.log("la cantidad de desaprobados en la comision A son:"   +  comisionAdesaprobados.length)
   }
 }
 for (let ind = 0; ind < array1.length; ind++) {
  if (array1[ind]<6) {
    for (let a = 0; a< comisionBdesaprobados.length; a++) {
      comisionBdesaprobados[a]=array1[ind];
      console.log("la cantidad de desaprobados en la comision A son:"   +  comisionBdesaprobados.length)
    }
  }
  for (let inde = 0; inde < array2.length; inde++) {
    if (array2[inde]<6) {
      for (let b = 0; b < comisionCdesaprobados.length; b++) {
        comisionCdesaprobados[b]=array2[inde];
        console.log("la cantidad de desaprobados en la comision A son:"   +  comisionCdesaprobados.length)
      }
    }
  return desaprobados
  }
  }
  desaprobados(comisionA[0]=[8, 5, 7, 10, 9, 2, 4, 8, 6, 8],comisionB[0]=[3, 6, 8, 5, 4, 7, 7, 4, 6, 8],comisionC[0]=[7, 6, 9, 8, 9, 8, 5, 7, 10, 9])
