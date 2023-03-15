/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Desarrollo de Sistemas Informáticos
 * Curso: 3º
 * Práctica modif semana 13-03-23
 * @author Ismael Martín Herrera
 * @email alu0101397375@ull.edu.es
 * @date 15/03/2023
 */

/**
 * Función para comprobar si un número es primo 
 * @param n Número a comprobar
 * @return False en caso de no ser primo o true si lo fuera
 */
 export function isPrime(n: number): boolean{
    for(let i = n; i >= 1; --i) {
        if ((n % i === 0) && (i !== 1) && (i !== n)) {
            return false;
        }
    }
    if (n === 1) {
        return false;
    }
    return true;
}