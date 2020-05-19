var box = document.querySelector('boxResult');

var car: Car;

var regex = /^[0-9]{4}[A-Z]{3}$/; // Validate Plate exp.

// CREATE CAR
function createCar() {
  let plate = <HTMLInputElement>document.getElementById('inputPlate').value;
  let brand = <HTMLInputElement>document.getElementById('inputBrand').value;
  let color = <HTMLInputElement>document.getElementById('inputColor').value;

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

// ADD WHEELS
function addWheels() {
  let brand;
  let diameter;
  for (let i = 1; i < 5; i++) {
    brand = <HTMLInputElement>document.getElementById('inputBrand' + i).value;
    diameter = <HTMLInputElement><unknown>parseFloat(document.getElementById('inputDiameter' + i).value);

  // Validate Wheels - Necesito validar las 4 ruedas 1 a 1 y si hay 1 que no cumple no imprime nada 
  if (brand == '' || diameter == '') {
    alert("Rellena todos los campos");

  }else if (diameter < 0.4 || diameter > 2 || isNaN(diameter)) {
    alert("Introduce un diámetro entre 0.4 y 2");

  } else {
    let wheel = new Wheel(diameter, brand); // Instance object
    console.log(wheel);
    car.addWheel(wheel);

    console.log(JSON.stringify(car.wheels));
    console.log(car);
      
      // Print Wheels
      let pBrand = document.querySelector('#pBrand' + i);
      let pDiameter = document.querySelector('#pDiameter' + i);
  
      pBrand.innerHTML = 'Marca: ' + '<b>'+wheel.brand+'<b>';
      pDiameter.innerHTML = 'Diámetro : ' +'<b>'+wheel.diameter+'<b>';
    } 
  }
}
