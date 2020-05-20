var cont=0;
var paciente = document.querySelectorAll(".paciente");
console.log(paciente);

while (cont<paciente.length) {
    
var tdNome=paciente[cont].querySelector(".info-nome");
var nome=tdNome.textContent;

var tdPeso=paciente[cont].querySelector(".info-peso");
var peso=tdPeso.textContent;

var tdAltura=paciente[cont].querySelector(".info-altura");
var altura=tdAltura.textContent;

var IMC= peso / (altura*altura);
console.log(IMC)

paciente[cont].querySelector(".info-imc").textContent=IMC;
cont++
}