var box = document.querySelector('boxResult');

var car: Car;

var regex = /^[0-9]{4}[A-Z]{3}$/; // Validate Plate exp.

function createCar() {
  let plate = document.getElementById('inputPlate').value;
  let brand = document.getElementById('inputBrand').value;
  let color = document.getElementById('inputColor').value;

  //Validate Car 
  if (plate == '' || brand == '' || color == '') {
    alert('Rellena todos lops campos');
  }
  else if (!regex.test(plate)) {
    alert("Introduce la matrícula correctamente (Ej:1111AAA)");
  } else {
    car = new Car(plate, color, brand); // Car obj Instance
    console.log(car);

    let pPlate = document.querySelector('#pPlate span');
    let pBrand = document.querySelector('#pBrand span');
    let pColor = document.querySelector('#pColor span');

    pPlate.innerHTML = car.plate;
    pBrand.innerHTML = car.brand;
    pColor.innerHTML = car.color;
  }
}

var wheels: any = [];
function addWheels() {

  while (wheels.length < 4) {
    let brand = prompt("Introduce la marca de la rueda")
    let diameter = parseFloat(prompt("Introduce el diámetro de la rueda (Entre 0'4 y 2)"));

    if (brand == '' || diameter == '' || brand == null || diameter == null) {
      alert("Rellena los dos campos");

    } else if (diameter < 0.4 || diameter > 2 || isNaN(diameter)) {
      alert("Introduce un diámetro entre 0.4 y 2");

    } else {
      let wheel = new Wheel(diameter, brand);
      console.log(wheel);
      wheels.push(wheel);
      car.addWheel(wheel);
    }
  }

  console.log(JSON.stringify(car.wheels));
  console.log(car);

  let pWheel = document.querySelector('#pWheel1 span');
  //let pBrand = document.querySelector('#pBrand1 span');
  //let pDiameter = document.querySelector('#pDiameter1 span');

  for (let i = 0; i < wheels.length; i++) { //¿como imprimir cada iteracion en una columna?
    pWheel.innerHTML += "Rueda " + [i+1] + "</br>" + "Marca: " + wheels[i].brand+ "</br>" + "Diámetro: " + wheels[i].diameter + "</br>" + "</br>";
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

/*
function addWheels() {
  let brand1 = document.getElementById('inputBrand1').value;
  let brand2 = document.getElementById('inputBrand2').value;
  let brand3 = document.getElementById('inputBrand3').value;
  let brand4 = document.getElementById('inputBrand4').value;

  let diameter1 = parseFloat(document.getElementById('inputDiameter1').value);
  let diameter2 = parseFloat(document.getElementById('inputDiameter2').value);
  let diameter3 = parseFloat(document.getElementById('inputDiameter3').value);
  let diameter4 = parseFloat(document.getElementById('inputDiameter4').value);

  // Validate diameters
  if ((diameter1 < 0.4 || diameter1 > 2 || isNaN(diameter1)) || (diameter2 < 0.4 || diameter2 > 2 || isNaN(diameter2)) || (diameter3 < 0.4 || diameter3 > 2 || isNaN(diameter3)) || (diameter4 < 0.4 || diameter4 > 2 || isNaN(diameter4))) {
    alert("Introduce un diámetro entre 0.4 y 2");

  } else {
    // Print Brand
    let pBrand1 = document.querySelector('#pBrand1 span');
    let pBrand2 = document.querySelector('#pBrand2 span');
    let pBrand3 = document.querySelector('#pBrand3 span');
    let pBrand4 = document.querySelector('#pBrand4 span');

    pBrand1.innerHTML = brand1;
    pBrand2.innerHTML = brand2;
    pBrand3.innerHTML = brand3;
    pBrand4.innerHTML = brand4;

    // Print Diameter
    let pDiameter1 = document.querySelector('#pDiameter1 span');
    let pDiameter2 = document.querySelector('#pDiameter2 span');
    let pDiameter3 = document.querySelector('#pDiameter3 span');
    let pDiameter4 = document.querySelector('#pDiameter4 span');

    pDiameter1.innerHTML = diameter1;
    pDiameter2.innerHTML = diameter2;
    pDiameter3.innerHTML = diameter3;
    pDiameter4.innerHTML = diameter4;

  }
}
*/
/*
  let car=new Car(plate,color,brand);
  car.addWheel(new Wheel(2,"SEAT"));
  document.body.innerText="CAR: PLATE: " + car.plate
  + " COLOR: " +car.color + " BRAND: " + brand
  + " WHEELS: " + JSON.stringify(car.wheels);
*/
