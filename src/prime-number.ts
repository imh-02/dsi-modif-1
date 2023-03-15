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

import { isPrime } from "./prime-function";

/**
 * Clase de una instancia de prime number que además es iterable
 */
export class PrimeNumberInstance implements Iterable<number> {
    private prime_numbers: number[] = [];

    private static primeNumberInstance : PrimeNumberInstance;

    /**
     * Constructor privado que sólo permite crear una instancia de la clase 
     * @param n N primeros números primos 
     */
    private constructor(n: number) {
        let counter = 0;
        for (let i = 1; counter < n; ++i) {
            if (isPrime(i)) {
                ++counter;
                this.prime_numbers.push(i);
            }
        }
    }

    /**
     * Obtener la instancia de la clase, en caso de no estar ya creada
     * @param n N primeros números para la nueva instancia 
     * @returns Instancia creada o que ya exista 
     */
    public static getPrimeNumbersInstance(n: number) : PrimeNumberInstance {
        if (!PrimeNumberInstance.primeNumberInstance) {
            PrimeNumberInstance.primeNumberInstance = new PrimeNumberInstance(n);
        }
        return PrimeNumberInstance.primeNumberInstance;
    }

    /**
     * Método para establecer otros n primeros primos 
     * @param n N primero primos 
     */
    public static setnPrimeNumbers(n: number) {
        const new_prime_numbers: number [] = [];
        let counter = 0;
        for (let i = 1; counter < n; ++i) {
            if (isPrime(i)) {
                ++counter;
                new_prime_numbers.push(i);
            }
        }
        PrimeNumberInstance.primeNumberInstance.prime_numbers = new_prime_numbers;
    }

    /**
     * Método para obtener todos los números primos generados hasta el momento
     * @returns Números primos de la instancia generados
     */
    public static getPrimeNumbers() {
        return PrimeNumberInstance.primeNumberInstance.prime_numbers;
    }

    /**
     * Método para obtener los n primeros primos y además modifica la propiedad de la instancia
     * @param n N primeros primos
     * @returns Resultado generado
     */
    public static getFirstNPrimeNumbers(n: number) {
        const result: number[] = [];
        let counter = 0;
        for (let i = 1; counter < n; ++i) {
            if (isPrime(i)) {
                ++counter;
                result.push(i);
            }
        }
        PrimeNumberInstance.primeNumberInstance.prime_numbers = result;
        return result;
    }

    /**
     * Método para generar los números primos en un rango
     * @param left Rango izquierdo 
     * @param rigth Rango derecho  
     * @returns Resultado generado
     */
    public static getNumberRange(left: number, rigth: number) {
        const result: number[] = [];
        if (left >= 0 && rigth >= 0) {
            for (let i = 1; i <= rigth; ++i) {
                if (isPrime(i) && i >= left && i <= rigth) {
                    result.push(i);
                }
            }
            PrimeNumberInstance.primeNumberInstance.prime_numbers = result;
            return result;
        }
        return undefined;
    }

    /**
     * Método de la interfaz iterable, para que la clase sea iterable 
     * @returns Elementos iterados
     */
    [Symbol.iterator](): Iterator<number> {
        return PrimeNumberInstance.primeNumberInstance.prime_numbers.values();
    }
}
