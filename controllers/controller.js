"use strict";
var box = document.getElementById('boxResult');
var addWheelsDiv = document.getElementById('addWheelsDiv');
var addCarDiv = document.getElementById('addCarDiv');
var car;
var carExist = false;
var regex = /^[0-9]{4}[A-Z]{3}$/; // Validate Plate exp.
addWheelsDiv.style.display = 'none';
boxResult.style.display = 'none';
// CREATE CAR
function createCar() {
    var plate = document.getElementById('inputPlate').value;
    var brand = document.getElementById('inputBrand').value;
    var color = document.getElementById('inputColor').value;
    //Validate Car 
    if (plate == '' || brand == '' || color == '') {
        alert('Rellena todos los campos');
    }
    else if (!regex.test(plate)) {
        alert("Introduce la matrícula correctamente (Ej:1111AAA)");
    }
    else {
        car = new Car(plate, color, brand); // Car obj Instance
        carExist = true;
        console.log(car);
        var pPlate = document.querySelector('#pPlate span');
        var pBrand = document.querySelector('#pBrand span');
        var pColor = document.querySelector('#pColor span');
        pPlate.innerHTML = car.plate;
        pBrand.innerHTML = car.brand;
        pColor.innerHTML = car.color;
        addCarDiv.style.display = 'none';
        addWheelsDiv.style.display = 'block';
    }
}
// ADD WHEELS
function addWheels() {
    var brand;
    var diameter;
    var errorEmpty = false;
    var errorDiameter = false;
    if (carExist == true) {
        // Validate Wheels
        for (var i = 1; i < 5; i++) {
            brand = document.getElementById('inputBrand' + i).value;
            diameter = parseFloat(document.getElementById('inputDiameter' + i).value);
            if (brand == '' || diameter == '' || brand == null || diameter == null) {
                errorEmpty = true;
            }
            else if (diameter < 0.4 || diameter > 2 || isNaN(diameter)) {
                errorDiameter = true;
            }
        }
        if (errorEmpty == true) {
            alert("Rellena todos los campos");
        }
        if (errorDiameter == true) {
            alert("Introduce un diámetro entre 0.4 y 2");
        }
        if (errorDiameter == false && errorEmpty == false) {
            // Add Wheels
            for (var i = 1; i < 5; i++) {
                brand = document.getElementById('inputBrand' + i).value;
                diameter = parseFloat(document.getElementById('inputDiameter' + i).value);
                var wheel = new Wheel(diameter, brand);
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
            boxResult.style.display = 'block';
        }
    }
    else {
        alert('Añade el cotxe antes que las ruedas');
    }
}
