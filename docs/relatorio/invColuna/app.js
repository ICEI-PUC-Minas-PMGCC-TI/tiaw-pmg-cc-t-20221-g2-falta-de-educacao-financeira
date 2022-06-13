// const API_KEY = ''; chave não necessaria
/**
 API USADA - CoinGecko.com
*/

function exibeDados ( ) {
    var div = document.getElementById('colocar'); 
    var texto = '';
    let dados = JSON.parse (this.responseText);
    let data = new Date (dados.tickers[0].timestamp);
    texto = `<div class="col-6"><br><a href="${dados.tickers[0].trade_url}"><img src="imgs/${moeda[moeda.length - 1]}.jpg" style="max-width:100px;"></a><br>
    <h5 class="titulo-investimento">${dados.name}</h5> <span class="data-investimento">Data: ${data.toLocaleDateString()}</span> 
    <p class="corpo-investimento">Valor em Dólares: ${dados.tickers[0].converted_last.usd}</p></div>`;
    div.innerHTML = texto;
}

function carregaDados () {
    let moeda = arrayM.pop();
    alert(moeda);
    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeDados( );
    xhr.open ('GET', `https://api.coingecko.com/api/v3/coins/${moeda}/tickers`);
    xhr.send ();
}

let arrayM = ['bitcoin', 'monero', 'ethereum', 'litecoin', 'dogecoin', 'chainlink'];
document.getElementById('btnMais').onclick = ( ) => carregaDados ();

// codigo nao funcional