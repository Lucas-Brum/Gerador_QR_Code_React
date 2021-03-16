function Botao() {
    return <button type="button" onClick={GerarQrCode}>Gerar</button>
}
function GerarQrCode(){
    var conteudo = document.getElementById('conteudoQRCode').value;
    var GoogleCharts = 'https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=';
    var imagemQRCode = GoogleCharts + conteudo;
    document.getElementById('imageQRCode').src = imagemQRCode;
 
}
export default Botao