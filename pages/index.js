function Home(){
    return (
        <Botao></Botao>,
        <Conteudo></Conteudo>,
        <Titulo></Titulo>
    )
}
function Titulo(){
    return (<h1>Gerador de QR Code:</h1>)
}
function Conteudo(){
    return (<textarea maxlength="256" rows="3" id="conteudoQRCode">Conteudo do QR Code</textarea>)
}
function Botao(){
    return(<button type="button" onClick="GeraQRCode()">Gerar</button>)
}

export default Home