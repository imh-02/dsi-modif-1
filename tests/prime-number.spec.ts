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

 import 'mocha';
 import {expect} from 'chai';
 import {PrimeNumberInstance} from '../src/prime-number';
 import {isPrime} from '../src/prime-function';
 
 
 describe('Función para comprobar si un número es primo', () => {

 
   it("Comprobar que 5 es primo resulta true ", () => {
     expect(isPrime(5)).to.be.eql(true);
   });

   it("Comprobar que 1 es primo resulta false ", () => {
    expect(isPrime(1)).to.be.eql(false);
  });

   it("Comprobar que 97 es primo resulta true ", () => {
    expect(isPrime(97)).to.be.eql(true);
  });
    
   it("Comprobar que 10 es primo resulta false ", () => {
    expect(isPrime(10)).to.be.eql(false);
  });

 });


describe('Clase prime number', () => {
    const primeNumberInstance1 = PrimeNumberInstance.getPrimeNumbersInstance(10);
   it("Getter de la colección debería devolver [2,3,5,7,11,13,17,19,23,29] ", () => {
     expect(PrimeNumberInstance.getPrimeNumbers()).to.be.eql([2,3,5,7,11,13,17,19,23,29]);
   });

   it("Comprobar que una segunda llamada a instancia devuelve la misma instancia", () => {
    const primeNumberInstance2 = PrimeNumberInstance.getPrimeNumbersInstance(10);
    expect(primeNumberInstance2 === primeNumberInstance1).to.be.eql(true);
    });

    it("Comprobar que al llamar a set con 5 los números primos ahora resulta [2,3,5,7,11]", () => {
        PrimeNumberInstance.setnPrimeNumbers(5);
        expect(PrimeNumberInstance.getPrimeNumbers()).to.be.eql([2,3,5,7,11]);
     });

     it("Devolver los 2 primeros números primos resulta [2,3]", () => {
        expect(PrimeNumberInstance.getFirstNPrimeNumbers(2)).to.be.eql([2,3]);
     });

     it("Devolver los números en el rango [2,10] resulta [2,3]", () => {
        expect(PrimeNumberInstance.getNumberRange(2,10)).to.be.eql([ 2, 3, 5, 7 ]);
     });
     it("Devolver los número en el rango [-1,10] resulta [2,3]", () => {
        expect(PrimeNumberInstance.getNumberRange(-1, 10)).to.be.eql(undefined);
     });

     it("La clase es iterable, al recorre y sumar los números primos actuales resulta 5", () => {
        let counter = 0;
        [...primeNumberInstance1].forEach((number_) =>{
            counter += number_;
        });
        expect(counter).to.be.eql(17);
     });


 });