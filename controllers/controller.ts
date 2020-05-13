var box = document.querySelector('boxResult');

var regex = /^[0-9]{4}[A-Z]{3}$/; // Validate Plate exp.

function createCar() {
  let plate = document.getElementById('inputPlate').value;
  let brand = document.getElementById('inputBrand').value;
  let color = document.getElementById('inputColor').value;



  //Validate Plate 
  if (!regex.test(plate)) {
    alert("Introduce la matrícula correctamente");
  } else {

  let myCar = new Car(plate, color, brand); // Car obj Instance
  console.log(myCar);

  let pPlate = document.querySelector('#pPlate span');
  let pBrand = document.querySelector('#pBrand span');
  let pColor = document.querySelector('#pColor span');

  pPlate.innerHTML = plate;
  pBrand.innerHTML = brand;
  pColor.innerHTML = color;
}

}

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
  //let myWheel = new Wheel(diameter, brand); //???

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

/*
validateCar() {
  const form = document.getElementById('myFormId');
  form.classList.remove('is-invalid');
  let plate = document.forms["myForm"]["inputPlate"];

  if (!regex.test(plate)) {
    alert("Introduce la matrícula correctamente");
    plate.classList.add("is-invalid");
    document.getElementById("errorPlate").textContent = "La matrúcla no es correcta";
    return false;
  }
}

if(form){
form.addEventListener("blur", function( event ) {
	if(event.target.value!='') event.target.classList.remove('is-invalid');
	registerValidate();
}, true);
}
*/



/*
  let car=new Car(plate,color,brand);
  car.addWheel(new Wheel(2,"SEAT"));
  document.body.innerText="CAR: PLATE: " + car.plate
  + " COLOR: " +car.color + " BRAND: " + brand
  + " WHEELS: " + JSON.stringify(car.wheels);
}*/

