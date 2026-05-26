const desconto = (preco,desconto) =>{
return (preco*desconto)/100
}
console.log("o desconto sera de",desconto(100,20),
"%, ficando o valor de",(100-desconto(100,20)),"reais")