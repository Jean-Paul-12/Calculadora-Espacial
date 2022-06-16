        alert("Hola!! Este es el medidor para saber si estas gordo o estas en el planeta equivocado?")
        var usuario = prompt("Perfecto, ahora dime ¿Cual es tu peso?");
        var planeta = parseInt(prompt("Ahora elige el planeta en el que quisieras saber tu peso:\n1 es Marte, 2 es Jupiter"));
        var peso = parseInt(usuario);
        var g_tierra = 9.8;
        var g_marte = 3.7;
        var g_jupiter = 24.8;
        var peso_final;
        var nombre;
        if (planeta == 1) {
            peso_final = peso * g_marte / g_tierra;
            nombre = "Marte"
        }
        else if(planeta == 2) {
            peso_final = peso * g_jupiter / g_tierra;
            nombre = "Jupiter"
        }
        else{
            peso_final = 1000000;
            nombre = "Kripton"
        }
        peso_final = parseInt(peso_final);
        document.write("¡¡¡Felicidades no estas en gordo, sino que estas en el planeta equivocado!!! Tu peso en "+ nombre +" es <strong>" + peso_final + " Kilos </strong>");