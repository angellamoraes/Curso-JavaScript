let clientes = Number(prompt("Quantos clientes deseja cadastrar?"));

let total = 0;

let qtdRadio =0;
let qtdTv = 0;
let qtdRevista =0;
let qtdOutdoor = 0;

for (let i= 1; i <= clientes; i++) {

  let midia = prompt("Tipo de mídia (radio/tv/revista/outdoor):").toLowerCase();

  if (midia === "radio") {

    let faixa = prompt("Faixa (AM/FM):").toUpperCase();

    if(faixa === "FM") {
      total += 500;
    } else {
      total += 300;
    }

    qtdRadio++;

  } else if (midia === "tv") {

    let horario = Number(prompt("Horário:"));

    if (horario <= 20) {
      total += 1200;
    } else {
      total +=2000;
    }
    qtdTv++;
  } else if (midia === "revista") {

    total += 750;
    qtdRevista++;
  } else if (midia === "outdoor") {

    total +=1500;
    qtdOutdoor++;
  }
}

console.log(`Valor total arrecadado: R$ ${total.toFixed(2)}`);

console.log(`Anúncio de Rádio ${qtdRadio}`);
console.log(`Anúncio de TV: ${qtdTv}`);
console.log(`Anúncio de Revista: ${qtdRevista}`);
console.log(`Anúncio de Outdoor: ${qtdOutdoor}`);
