function gwiazdki() {
    let str = "";

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            str += "*";
        }
        str += "\n";
    }

    console.log(str);
}

function sumaNaturnalnych() {
    let suma = 0;
    let liczba = 1;
    let liczby = [];

    while (suma <= 1000) {
        liczby.push(liczba);
        suma += liczba;//zwiększenie sumy o liczbę
        liczba++;
    }

    console.log(`Suma kolejnych ${liczby.length} liczb jest wymagana do przekroczenia liczby 1000`);
    console.log("A oto liczby: " + liczby);
}

function sumuj(lista) {
    let suma = 0;

    lista.forEach(el => {
        suma += el;
    });

    console.log("Przekazana lista liczb do zsumowania: " + lista);
    console.log("SUMA: " + suma);
}

function filterUsers(uzytkownicy) {
    let result = [];

    uzytkownicy.forEach(user => {
        if (user.age >= 18) {
            result.push(user);
        }
    });

    /* alternatywnie za pomocą metody filter */
    //result = uzytkownicy.filter(user => user.age >= 18);

    return result;
}

































