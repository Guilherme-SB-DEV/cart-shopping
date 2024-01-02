// times= ["corinntians", "vitoria", "botafogo"]
//         var lista = document.getElementById("lista-time");
        
        
        
//         for(i=0; i<times.length; i++){
//             var time = times[i];
//             var listItem = document.createElement("li");
//             listItem.innerHTML = time;
//             lista.appendChild(listItem);
//         }

var valorTotal = [0,0];
var valorProduto = [50,30];
var qtd = [0,0];

function addItem (item){
    var quantidade = document.getElementById("quantidade" + item);
    var total = document.getElementById("total" + item);
    qtd[item]++;
    valorTotal[item] = Number.parseFloat(valorProduto[item])*qtd[item];
    quantidade.innerHTML = qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
    calcTotal();
}
function rmItem(item){
    if(qtd[item] >0){
        var quantidade = document.getElementById("quantidade" + item);
        var total = document.getElementById("total" + item);
        qtd[item]--;
        valorTotal[item] = Number.parseFloat(valorProduto[item])*qtd[item];
        quantidade.innerHTML = qtd[item];
        total.innerHTML = valorTotal[item].toFixed(2);
        calcTotal();
    }
}
function parcialPrice(){
    var parcialprice = document.getElementById("parcialPrice");
    valor1 =0;
    for (let i = 0; i < valorTotal.length; i++){
        valor1 += valorTotal[i];    
    }
    
    parcialprice.innerHTML = valor1.toFixed(2);
}
function totalQuant(){
    var quantidade_item = document.getElementById("quantidade_item").innerHTML = qtd[0] + qtd[1];
    
}


function calcTotal(){
    var totalFinal = document.getElementById("totalPrice");
    var shipping = document.getElementById("shipping");
    valor =0;
    shipping =5
    for (let i = 0; i < valorTotal.length; i++){
        valor += valorTotal[i];
        if(valorTotal[i]>0){
            valor += shipping
        }    
    }
    parcialPrice();
    totalFinal.innerHTML = valor.toFixed(2);
    totalQuant();
}
