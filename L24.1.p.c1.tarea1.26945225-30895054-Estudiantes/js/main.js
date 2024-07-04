/*En la UCLA, el DCYT desea conocer algunas estadísticas de sus estudiantes. De cada 
estudiante se conoce: su cédula, sexo y sus tres notas parciales. Se requiere conocer por el 
DCYT: a) nota total obtenida por el estudiante b) la mayor nota obtenida c) De los 
estudiantes femeninos cantidad de estudiantes aprobadas, d) promedio de notas 
El DCYT suministra la siguiente información demostrativa, para 4 estudiantes: (cedula, sexo, 
notap1, notap2, notap3) (13457856, M, 15, 20, 25) (15432551, F, 10, 10, 10) (32455678, M, 
18, 22, 20) (28678900, F, 18, 25, 24)*/

/*Echo por Karen Rangel y Yoswer Avendaño, CI 30895054 y 26945225 */

import Estudiante from './Estudiante.js';
import TodoEstudiante from './TodoEstudiante.js';

let estudiante1= new Estudiante('13457856','M', 15, 20, 25);
let estudiante2= new Estudiante('15432551','F', 10, 10, 10);
let estudiante3= new Estudiante('32455678','M', 18, 22, 20);
let estudiante4= new Estudiante('28678900','F', 18, 25, 24);
let todoestudiante= new TodoEstudiante();
todoestudiante.procesarEstudiante(estudiante1);
todoestudiante.procesarEstudiante(estudiante2);
todoestudiante.procesarEstudiante(estudiante3);
todoestudiante.procesarEstudiante(estudiante4);

let salida= document.getElementById("Salida");
salida.innerHTML= "Resultados <br><br>"
salida.innerHTML+= "La nota total del estudiante de cédula: " + estudiante1.cedula + " es: " + estudiante1.calcNotaTotal();
salida.innerHTML+= "<br>La nota total del estudiante de cédula: " + estudiante2.cedula + " es: " + estudiante2.calcNotaTotal();
salida.innerHTML+= "<br>La nota total del estudiante de cédula: " + estudiante3.cedula + " es: " + estudiante3.calcNotaTotal();
salida.innerHTML+= "<br>La nota total del estudiante de cédula: " + estudiante4.cedula + " es: " + estudiante4.calcNotaTotal();
salida.innerHTML+= "<br><br>La mayor nota obtenida fue: " + todoestudiante.devolverMayorNota();
salida.innerHTML+= "<br>Estudiantes femeninas aprobadas: " + todoestudiante.devolverFemApr();
salida.innerHTML+= "<br>El promedio de las notas es: " + todoestudiante.promedioNotas();
