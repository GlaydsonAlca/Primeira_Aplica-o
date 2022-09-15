let pessoas = [
  {
    altura: 1.81,
    sexo: "M",
  },
  {
    altura: 1.85,
    sexo: "M",
  },
  {
    altura: 1.75,
    sexo: "M",
  },
  {
    altura: 1.65,
    sexo: "F",
  },
  {
    altura: 1.45,
    sexo: "M",
  },
  {
    altura: 1.66,
    sexo: "F",
  },
  {
    altura: 1.75,
    sexo: "M",
  },
  {
    altura: 1.75,
    sexo: "F",
  },
  {
    altura: 1.65,
    sexo: "M",
  },
  {
    altura: 1.81,
    sexo: "M",
  },
  {
    altura: 1.60,
    sexo: "F",
  },
  {
    altura: 1.71,
    sexo: "F",
  },
  {
    altura: 1.71,
    sexo: "M",
  },
];

const maiorMenorAltura = (array) => {
  let maior = {};
  let menor = {};

  array.forEach((pessoa) => {
    if (!maior.altura || pessoa.altura > maior.altura) {
      maior = pessoa;
    }
    if (!menor.altura || pessoa.altura < menor.altura) {
        menor = pessoa;
      }
  });
  console.log(`A maior pessoa do grupo tem ${maior.altura} e é do sexo ${maior.sexo == "M" ? "Masculino" : "Feminino"}`);
  console.log(`A menor pessoa do grupo tem ${menor.altura} e é do sexo ${menor.sexo == "M" ? "Masculino" : "Feminino"}`)
};

maiorMenorAltura(pessoas);

const mediaAltura = (array) => {
  let filtroMulher = array.filter((pessoa)=>{return pessoa.sexo == "F"});
  let somaTotalAltura = filtroMulher.reduce((somaAltura,pessoa)=>{
    return somaAltura + pessoa.altura
  },0);
  
  let media = somaTotalAltura/filtroMulher.length;

 console.log(`A média de altura das mulheres é ${media.toFixed(2)}`);
};
mediaAltura(pessoas);


const qtdHomens = (array) => {
  const numHomens = array.filter((pessoa) => pessoa.sexo == "M").length;
  console.log(`O número total de homens é: ${numHomens}`)
};
qtdHomens(pessoas);