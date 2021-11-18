/* eslint-disable @typescript-eslint/typedef */
class Stos {
    constructor() {
        this.tablica = [];
    }
    dodaj(element) {
        this.tablica.push(element);
    }
    zabierz() {
        return this.tablica.pop();
    }
    podglad() {
        return this.tablica[this.tablica.length - 1];
    }
    pusta() {
        return this.tablica.length === 0;
    }
    rozmiar() {
        return this.tablica.length;
    }
    wyczysc() {
        return (this.tablica = []);
    }
}

const stos = new Stos();

console.log(stos.pusta());
console.log(stos.rozmiar());
stos.dodaj('A');
stos.dodaj('B');
stos.dodaj('C');

console.log(stos.pusta());
console.log(stos.rozmiar());
console.log(stos.podglad());

const usuniete = stos.zabierz();

console.log(usuniete);

console.log(stos.pusta());
console.log(stos.rozmiar());
console.log(stos.podglad());

stos.wyczysc();
console.log(stos.pusta());
console.log(stos.rozmiar());

export default stos;
