let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "@diego_camargos23");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("black");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(350, 330, 300));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "O menino que descobriu o grau";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Homem aranha: no aranhaverso";          
        } else{
         return "Ladrões de veia";
        }
      } else {
        if (gostaDeFantasia) {
          return "As 7 clipada Do Hades";
        } else {
          return "Depois do putero";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "A viagem da morte";
    } else {
      return "O feitiço da bruxa sfd";
    }
  }
}
