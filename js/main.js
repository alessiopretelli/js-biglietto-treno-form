var genera = document.getElementById("genera");
genera.addEventListener("click", 

    function() {
        var chilometri, eta, costante, costo, sconto, nome;


        costante = 0.21;
        nome = document.getElementById("text").value;
        document.getElementById("nome").innerHTML = nome;
        eta = document.getElementById("age").value;
        console.log(eta);
        chilometri = document.getElementById("km").value;
        console.log(chilometri);
        document.getElementById("carrozza_num").innerHTML = (Math.floor(Math.random() * 10) + 1);
        document.getElementById("cp").innerHTML = (Math.floor(Math.random() * 10000) + 90000);


        if (eta == "underage") {
            costo = chilometri * costante;
            sconto = costo * 0.2;
            costo = costo - sconto;
            costo = Math.round( costo * 100 + Number.EPSILON ) / 100;
            document.getElementById("costo_biglietto").innerHTML = costo + " Eur.";
            document.getElementById("sconto").innerHTML = "Sconto Minori";
            
        } else if (eta == "elder") {
            costo = chilometri * costante;
            sconto = costo * 0.4;
            costo = costo - sconto;
            costo = Math.round( costo * 100 + Number.EPSILON ) / 100;
            document.getElementById("costo_biglietto").innerHTML = costo + " Eur.";
            document.getElementById("sconto").innerHTML = "Sconto Anziani";

        } else {
            costo = chilometri * costante;
            costo = Math.round( costo * 100 + Number.EPSILON ) / 100;
            document.getElementById("costo_biglietto").innerHTML = costo + " Eur.";
            document.getElementById("sconto").innerHTML = "Null";

        }
    }

);