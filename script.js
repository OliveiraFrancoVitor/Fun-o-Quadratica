const button = document.querySelector('#button');
const resposta = document.querySelector('#resposta');
const comecoX = 150;
const comecoY = 150;


button.addEventListener('click', () => {
    let a = parseInt(document.querySelector('#a').value);
    let b = parseInt(document.querySelector('#b').value);
    let c = parseInt(document.querySelector('#c').value);

    let resultadoDelta = delta(a, b, c);
    let r1 = raiz1(a, b, calculaRaizDeDelta(resultadoDelta));
    let r2 = raiz2(a, b, calculaRaizDeDelta(resultadoDelta));
    let vx = verticeX(a, b);
    let vy = verticeY(a, resultadoDelta);

    resposta.innerHTML= 'Delta: ' +  resultadoDelta + '<br>Raizes: ' + r1 + ', ' + r2 + '<br>Vertice: ' + vx + ',' + vy;

    const myCanvas = document.getElementById("myCanvas");
    const ctx = myCanvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(comecoX, comecoY-(c*7));
    
    console.log();
    console.log();

    console.log(comecoX+(vx*10));
    console.log(comecoY-(vy*10));
    ctx.lineTo(comecoX+(vx*20), comecoY-(vy*20));
    ctx.lineTo(comecoX+(r2*20), comecoY);
    ctx.strokeStyle = "red";
    ctx.stroke();
})

function delta(a, b, c){
    
    let a1 = a;
    let b1 = b;
    let c1 = c;
    console.log('delta: ' + (b1**2-4*a1*c1));
    return b1**2-4*a1*c1;    
}

function calculaRaizDeDelta(resultadoDelta){

    return Math.sqrt(resultadoDelta);
}

function raiz1(a, b, resultadoCalculaRaizDeDelta){
    
    let x1 = (-b-resultadoCalculaRaizDeDelta)/(2*a);
    console.log('x1: ' + x1);
    return x1;
}

function raiz2(a, b, resultadoCalculaRaizDeDelta){

    let x2 = (-b+resultadoCalculaRaizDeDelta)/(2*a);
    console.log('x2: ' + x2);
    return x2;
}

function verticeX(a, b){

    let v1 = -b/(2*a);
    console.log('x do vertice: ' + v1);
    return v1;
}

function verticeY(a, resultadoDelta){

    let v2 = -resultadoDelta/(4*a);
    console.log('y do vertice: ' + v2);
    return v2;
}




