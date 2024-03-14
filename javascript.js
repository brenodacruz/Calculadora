let tela = document.getElementById('res')
let memoria = document.getElementById('memoria')
n1 = 0
let conteudo = tela.innerHTML

function number0(){ 
    tela.innerHTML += '0'             
}

function number1(){
    let conteudo = tela.innerHTML
    if (conteudo === '0'){
        tela.innerHTML = '1'
    }
    else
    {
        tela.innerHTML += '1'          
    }
   
}

function number2(){
    let conteudo = tela.innerHTML
    if (conteudo === '0'){
        tela.innerHTML = '2'
    }
    else
    {
        tela.innerHTML += '2'           
    }
  
}
function number3(){
    let conteudo = tela.innerHTML
    if (conteudo === '0'){
        tela.innerHTML = '3'
    }
    else
    {
        tela.innerHTML += '3'              
    }

}
function number4(){
    let conteudo = tela.innerHTML
    if (conteudo === '0'){
        tela.innerHTML = '4'
    }
    else
    {
        tela.innerHTML += '4'          
    }

}
function number5(){
    let conteudo = tela.innerHTML
    if (conteudo === '0'){
        tela.innerHTML = '5'
    }
    else
    {
        tela.innerHTML += '5'           
    }

}
function number6(){
    let conteudo = tela.innerHTML
    if (conteudo === '0'){
        tela.innerHTML = '6'
    }
    else
    {
        tela.innerHTML += '6'          
    }

    
}
function number7(){
    let conteudo = tela.innerHTML
    if (conteudo === '0'){
        tela.innerHTML = '7'
    }
    else
    {
        tela.innerHTML += '7'
              
    }

}
function number8(){
    let conteudo = tela.innerHTML
    if (conteudo === '0'){
        tela.innerHTML = '8'
    }
    else
    {
        tela.innerHTML += '8'
             
    }

}
function number9(){
    let conteudo = tela.innerHTML
    if (conteudo === '0'){
        tela.innerHTML = '9'
    }
    else 
    {
        tela.innerHTML += '9'              
    }

}

function soma (){
    let conteudo = tela.innerHTML
    if (conteudo.includes('+') || conteudo.includes('-') || conteudo.includes('x') || conteudo.includes('/'))
    {
        return 
    }
    else{
        tela.innerHTML += ' + '        
    }
}

function sub(){
    let conteudo = tela.innerHTML
    if (conteudo.includes('+') || conteudo.includes('-') || conteudo.includes('x') || conteudo.includes('/'))
    {
        return 
    }
    else{
        tela.innerHTML += ' - '        
    }
}

function mult(){
    let conteudo = tela.innerHTML
    if (conteudo.includes('+') || conteudo.includes('-') || conteudo.includes('x') || conteudo.includes('/'))
    {
        return 
    }
    else{
        tela.innerHTML += ' x '        
    }

}

function div(){
    let conteudo = tela.innerHTML
    if (conteudo.includes('+') || conteudo.includes('-') || conteudo.includes('x') || conteudo.includes('/'))
    {
        return 
    }
    else{
        tela.innerHTML += ' / '        
    }
}

function ce(){
    tela.innerHTML = '0'
}

function c (){
    ce()
    memoria.innerHTML = ''

}

function apagar(){
    let conteudo = tela.innerHTML
    conteudo = conteudo.slice(0, -1)
    tela.innerHTML = conteudo

}

function por(){
    let conteudo = tela.innerHTML
    if (conteudo.includes('+') || conteudo.includes('-') || conteudo.includes('x') || conteudo.includes('/'))
    {
        return 
    }
    else{
        tela.innerHTML += ' % '        
    }
}

function resultado(){

    let conteudo = tela.innerHTML
    let op = conteudo
    if  (conteudo.includes('+')){
        let n = conteudo.substring(0, conteudo.indexOf('+') + 1); 
        let n2 = conteudo.substring(conteudo.indexOf('+') + 1);
        let n1 = n.replace(' +', '') 

        n1 = parseInt(n1,10)
        n2 = parseInt(n2,10)

        tela.innerHTML = n1 + n2
    }

    else if  (conteudo.includes('-')){
        let n = conteudo.substring(0, conteudo.indexOf('-') + 1); 
        let n2 = conteudo.substring(conteudo.indexOf('-') + 1);
        let n1 = n.replace(' -', '') 

        n1 = parseInt(n1,10)
        n2 = parseInt(n2,10)

        tela.innerHTML = n1 - n2
    }
    else if  (conteudo.includes('x')){
        let n = conteudo.substring(0, conteudo.indexOf('x') + 1); 
        let n2 = conteudo.substring(conteudo.indexOf('x') + 1);
        let n1 = n.replace(' x', '') 

        n1 = parseInt(n1,10)
        n2 = parseInt(n2,10)

        tela.innerHTML = n1 * n2
    }
    else if  (conteudo.includes('/')){
        let n = conteudo.substring(0, conteudo.indexOf('/') + 1); 
        let n2 = conteudo.substring(conteudo.indexOf('/') + 1);
        let n1 = n.replace(' /', '') 

        n1 = parseInt(n1,10)
        n2 = parseInt(n2,10)

        tela.innerHTML = n1 / n2
    }

    else if  (conteudo.includes('%')){
        let n = conteudo.substring(0, conteudo.indexOf('%') + 1); 
        let n2 = conteudo.substring(conteudo.indexOf('%') + 1);
        let n1 = n.replace(' %', '') 

        n1 = parseInt(n1,10)
        n2 = parseInt(n2,10)

        tela.innerHTML = (n1 * n2) / 100
    }

    memoria.innerHTML = op
}

