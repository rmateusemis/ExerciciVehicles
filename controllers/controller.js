"use strict";
var box = document.querySelector('boxResult');
var car;
var regex = /^[0-9]{4}[A-Z]{3}$/; // Validate Plate exp.
// CREATE CAR
function createCar() {
    var plate = document.getElementById('inputPlate').value;
    var brand = document.getElementById('inputBrand').value;
    var color = document.getElementById('inputColor').value;
    //Validate Car 
    if (plate == '' || brand == '' || color == '') {
        alert('Rellena todos lops campos');
    }
    else if (!regex.test(plate)) {
        alert("Introduce la matrícula correctamente (Ej:1111AAA)");
    }
    else {
        car = new Car(plate, color, brand); // Car obj Instance
        console.log(car);
        var pPlate = document.querySelector('#pPlate span');
        var pBrand = document.querySelector('#pBrand span');
        var pColor = document.querySelector('#pColor span');
        pPlate.innerHTML = car.plate;
        pBrand.innerHTML = car.brand;
        pColor.innerHTML = car.color;
    }
}
// ADD WHEELS
function addWheels() {
    var brand;
    var diameter;
    for (var i = 1; i < 5; i++) {
        brand = document.getElementById('inputBrand' + i).value;
        diameter = parseFloat(document.getElementById('inputDiameter' + i).value);
        // Validate Wheels - Necesito validar las 4 ruedas 1 a 1 y si hay 1 que no cumple no imprime nada 
        if (brand == '' || diameter == '') {
            alert("Rellena todos los campos");
        }
        else if (diameter < 0.4 || diameter > 2 || isNaN(diameter)) {
            alert("Introduce un diámetro entre 0.4 y 2");
        }
        else {
            var wheel = new Wheel(diameter, brand); // Instance object
            console.log(wheel);
            car.addWheel(wheel);
            console.log(JSON.stringify(car.wheels));
            console.log(car);
            // Print Wheels
            var pBrand = document.querySelector('#pBrand' + i);
            var pDiameter = document.querySelector('#pDiameter' + i);
            pBrand.innerHTML = 'Marca: ' + '<b>' + wheel.brand + '<b>';
            pDiameter.innerHTML = 'Diámetro : ' + '<b>' + wheel.diameter + '<b>';
        }
    }
}
