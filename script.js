document.getElementById('gerar').addEventListener('click', tabuada)

function tabuada() {
    let num = (document.getElementById("num").value);
    let tabuadaMult = (document.getElementById("tabuadaMult"));
    let tabuadaAdd = (document.getElementById("tabuadaAdd"))
    let tabuadaSub = (document.getElementById("tabuadaSub"))
    let tabuadaDiv = (document.getElementById("tabuadaDiv"))
    if (num === ''){
        window.alert('[ERRO] Digite um número.')
    }
    
    else{
        let n = Number(document.getElementById("num").value)
        let c = 1

        tabuadaAdd.innerHTML = '' // Limpar a tabuada para o próximo número
        while (c <= 10) {
            let itemAdd = document.createElement('option') // Criar elemento option que tem no html
            itemAdd.text = `${n} + ${c} = ${c+n}`
            tabuadaAdd.appendChild(itemAdd)
            c++
        }

        c = 1
        
        tabuadaMult.innerHTML = ''
        while (c <= 10) {
           let itemMult = document.createElement('option')
           itemMult.text = `${n} x ${c} = ${n*c}` // fazer esse elemento aparecer 
           tabuadaMult.appendChild(itemMult) //Adicionar um elemento filho na tabuada que no caso é o item
           c++ // sempre que refazer o laço contar mais um número no C
        }   
        
        tabuadaSub.innerHTML = ''
        for (c = 1;c <=10;c++ ) {
            let itemSub = document.createElement('option')
            itemSub.text = `${n} - ${c} = ${n-c}`
            tabuadaSub.appendChild(itemSub)
        }

        tabuadaDiv.innerHTML = ''
        for (c = 1; c <= 10; c++) {
            let itemDiv = document.createElement('option')
            itemDiv.text = `${n} / ${c} = ${n/c}`
            tabuadaDiv.appendChild(itemDiv)
        }
    }
    
}