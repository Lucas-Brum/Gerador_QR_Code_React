import Titulo from'./components/titulo/titulo'
import ConteudoQRCode from'./components/Conteudo/conteudo'
import Botao from './components/Botao/botao'
import Imagem from './components/Imagem/imagem'
import RodaPe from './components/RodaPe/rodaPe'



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

export default Home