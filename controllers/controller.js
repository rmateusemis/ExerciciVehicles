"use strict";
var box = document.querySelector('boxResult');
var regex = /^[0-9]{4}[A-Z]{3}$/;
function createCar() {
    var plate = document.getElementById('inputPlate').value;
    var brand = document.getElementById('inputBrand').value;
    var color = document.getElementById('inputColor').value;
    if (!regex.test(plate)) {
        alert("Introduce la matrícula correctamente");
    }
    var pPlate = document.querySelector('#pPlate span');
    var pBrand = document.querySelector('#pBrand span');
    var pColor = document.querySelector('#pColor span');
    var myCar = new Car(plate, color, brand);
    pPlate.innerHTML = plate;
    pBrand.innerHTML = brand;
    pColor.innerHTML = color;
}
function addWheels() {
    var brand1 = document.getElementById('inputBrand1').value;
    var brand2 = document.getElementById('inputBrand2').value;
    var brand3 = document.getElementById('inputBrand3').value;
    var brand4 = document.getElementById('inputBrand4').value;
    var pBrand1 = document.querySelector('#pBrand1 span');
    var pBrand2 = document.querySelector('#pBrand2 span');
    var pBrand3 = document.querySelector('#pBrand3 span');
    var pBrand4 = document.querySelector('#pBrand4 span');
    //let myWheel = new Wheel(diameter, brand);
    pBrand1.innerHTML = brand1;
    pBrand2.innerHTML = brand2;
    pBrand3.innerHTML = brand3;
    pBrand4.innerHTML = brand4;
    var diameter1 = parseFloat(document.getElementById('inputDiameter1').value);
    var diameter2 = parseFloat(document.getElementById('inputDiameter2').value);
    var diameter3 = parseFloat(document.getElementById('inputDiameter3').value);
    var diameter4 = parseFloat(document.getElementById('inputDiameter4').value);
    if (diameter1 < 0.4 || diameter1 > 2 || isNaN(diameter1)) {
        alert("Introduce un diámetro entre 0.4 y 2");
    }
    var pDiameter1 = document.querySelector('#pDiameter1 span');
    var pDiameter2 = document.querySelector('#pDiameter2 span');
    var pDiameter3 = document.querySelector('#pDiameter3 span');
    var pDiameter4 = document.querySelector('#pDiameter4 span');
    pDiameter1.innerHTML = diameter1;
    pDiameter2.innerHTML = diameter2;
    pDiameter3.innerHTML = diameter3;
    pDiameter4.innerHTML = diameter4;
}
/*
  let car=new Car(plate,color,brand);
  car.addWheel(new Wheel(2,"SEAT"));
  document.body.innerText="CAR: PLATE: " + car.plate
  + " COLOR: " +car.color + " BRAND: " + brand
  + " WHEELS: " + JSON.stringify(car.wheels);
}*/
