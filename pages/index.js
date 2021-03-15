import Image from 'next/image'
import {useState} from 'react'

function Home() {
    return (
        <div>
            <Titulo/>
            <ConteudoQRCode/>
            <br/>
            <Botao/>
            <br/><br/>
            <Imagem/>
            <RodaPe />

            
        </div>
    )
}
function Titulo() {
    return <h1>Gerador de QR Code</h1>
}
function ConteudoQRCode(){
    return <textarea maxlength="256" rows="3" id="conteudoQRCode">Conteudo do QR Code</textarea>
}
function Botao() {
    return <button type="button" onClick={GerarQrCode}>Gerar</button>
}

function GerarQrCode(){
        var conteudo = document.getElementById('conteudoQRCode').value;
        var GoogleCharts = 'https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=';
        var imagemQRCode = GoogleCharts + conteudo;
        document.getElementById('imageQRCode').src = imagemQRCode;
     
}








function RodaPe () {
    return (

            <p> By: 
            <strong>
                <a href="https://www.linkedin.com/in/lucas-matheus-rodrigues-brum-2a1891b9/">
                    Lucas Brum
                </a> Dev Front End
            </strong>
        </p>

    )
}


// function Imagem() {
//   return <Image id='imageQRCode' src="/../public/banner.png" alt="me" width="500" height="500" />
// }
function Imagem() {
  return <img id='imageQRCode' src="https://raw.githubusercontent.com/Lucas-Brum/Gerado-de-QR-Code/main/banner.png" alt="me" width="500" height="500" />
}


export default Home