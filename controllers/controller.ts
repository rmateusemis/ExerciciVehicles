var box = document.getElementById('boxResult');
var addWheelsDiv = document.getElementById('addWheelsDiv');

addWheelsDiv.style.display = 'none';
boxResult.style.display = 'none';



var car: Car;
var carExist = false;

var regex = /^[0-9]{4}[A-Z]{3}$/; // Validate Plate exp.

// CREATE CAR
function createCar() {
  let plate = <HTMLInputElement>document.getElementById('inputPlate').value;
  let brand = <HTMLInputElement>document.getElementById('inputBrand').value;
  let color = <HTMLInputElement>document.getElementById('inputColor').value;

  //Validate Car 
  if (plate == '' || brand == '' || color == '') {
    alert('Rellena todos los campos');
  }
  else if (!regex.test(plate)) {
    alert("Introduce la matrícula correctamente (Ej:1111AAA)");
  } else {
    car = new Car(plate, color, brand); // Car obj Instance
    carExist = true;
    console.log(car);

    let pPlate = document.querySelector('#pPlate span');
    let pBrand = document.querySelector('#pBrand span');
    let pColor = document.querySelector('#pColor span');

    pPlate.innerHTML = car.plate;
    pBrand.innerHTML = car.brand;
    pColor.innerHTML = car.color;

    addWheelsDiv.style.display = 'block';

  }
}


// ADD WHEELS
function addWheels() {
  let brand;
  let diameter;
  let errorEmpty = false;
  let errorDiameter = false;

  if (carExist == true) {
    // Validate Wheels
    for (let i = 1; i < 5; i++) {
      brand = <HTMLInputElement>document.getElementById('inputBrand' + i).value;
      diameter = <HTMLInputElement><unknown>parseFloat(document.getElementById('inputDiameter' + i).value);

      if (brand == '' || diameter == '' || brand == null || diameter == null) {
        errorEmpty = true;

      } else if (diameter < 0.4 || diameter > 2 || isNaN(diameter)) {
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
      for (let i = 1; i < 5; i++) {
        brand = <HTMLInputElement>document.getElementById('inputBrand' + i).value;
        diameter = <HTMLInputElement><unknown>parseFloat(document.getElementById('inputDiameter' + i).value);

        let wheel = new Wheel(diameter, brand);
        console.log(wheel);
        car.addWheel(wheel);
        console.log(JSON.stringify(car.wheels));
        console.log(car);

        // Print Wheels
        let pBrand = document.querySelector('#pBrand' + i);
        let pDiameter = document.querySelector('#pDiameter' + i);

        pBrand.innerHTML = 'Marca: ' + '<b>' + wheel.brand + '<b>';
        pDiameter.innerHTML = 'Diámetro : ' + '<b>' + wheel.diameter + '<b>';
      }
      boxResult.style.display = 'block';

    }
  } else {
    alert('Añade el cotxe antes que las ruedas');
  }


}

