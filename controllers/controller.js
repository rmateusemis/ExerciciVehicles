"use strict";
var box = document.querySelector('boxResult');
var car;
var regex = /^[0-9]{4}[A-Z]{3}$/; // Validate Plate exp.
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
/*
function addWheels() {
  let brand = document.getElementById('inputBrand1').value;
  let diameter = parseFloat(document.getElementById('inputDiameter1').value);

  // Validate Wheels
  if (brand == '' || diameter == '') {
    alert("Introduce la marca de la rueda");
  
  }else if (diameter < 0.4 || diameter > 2 || isNaN(diameter)) {
    alert("Introduce un diámetro entre 0.4 y 2");

  } else {
    let wheel = new Wheel(diameter, brand);
    console.log(wheel);
    car.addWheel(wheel);

    console.log(JSON.stringify(car.wheels));
    console.log(car);

    let pBrand = document.querySelector('#pBrand1 span');
    let pDiameter = document.querySelector('#pDiameter1 span');

    pBrand.innerHTML = wheel.brand;
    pDiameter.innerHTML = wheel.diameter;
  }
}
*/
function addWheels() {
    var brand1 = document.getElementById('inputBrand1').value;
    var brand2 = document.getElementById('inputBrand2').value;
    var brand3 = document.getElementById('inputBrand3').value;
    var brand4 = document.getElementById('inputBrand4').value;
    var diameter1 = parseFloat(document.getElementById('inputDiameter1').value);
    var diameter2 = parseFloat(document.getElementById('inputDiameter2').value);
    var diameter3 = parseFloat(document.getElementById('inputDiameter3').value);
    var diameter4 = parseFloat(document.getElementById('inputDiameter4').value);
    // Validate diameters
    if ((diameter1 < 0.4 || diameter1 > 2 || isNaN(diameter1)) || (diameter2 < 0.4 || diameter2 > 2 || isNaN(diameter2)) || (diameter3 < 0.4 || diameter3 > 2 || isNaN(diameter3)) || (diameter4 < 0.4 || diameter4 > 2 || isNaN(diameter4))) {
        alert("Introduce un diámetro entre 0.4 y 2");
    }
    else {
        // Print Brand
        var pBrand1 = document.querySelector('#pBrand1 span');
        var pBrand2 = document.querySelector('#pBrand2 span');
        var pBrand3 = document.querySelector('#pBrand3 span');
        var pBrand4 = document.querySelector('#pBrand4 span');
        pBrand1.innerHTML = brand1;
        pBrand2.innerHTML = brand2;
        pBrand3.innerHTML = brand3;
        pBrand4.innerHTML = brand4;
        // Print Diameter
        var pDiameter1 = document.querySelector('#pDiameter1 span');
        var pDiameter2 = document.querySelector('#pDiameter2 span');
        var pDiameter3 = document.querySelector('#pDiameter3 span');
        var pDiameter4 = document.querySelector('#pDiameter4 span');
        pDiameter1.innerHTML = diameter1;
        pDiameter2.innerHTML = diameter2;
        pDiameter3.innerHTML = diameter3;
        pDiameter4.innerHTML = diameter4;
    }
}
/*
  let car=new Car(plate,color,brand);
  car.addWheel(new Wheel(2,"SEAT"));
  document.body.innerText="CAR: PLATE: " + car.plate
  + " COLOR: " +car.color + " BRAND: " + brand
  + " WHEELS: " + JSON.stringify(car.wheels);
*/
