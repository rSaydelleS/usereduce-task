import { useState, useEffect } from 'react'


function App() {

  /*O Text inicia vazio para poder rotacionar com a informação do content */
  const [Text, setText] = useState('');
  /*conteúdo que será mostrado dinamicamente */
  const content = ['Rafael Saydelles', 'Desenvolvedor junior', 'Amante de Tecnologia']
/*Função resposável por deletar ou não o texto */
  const [IsDeleting, setIsDeleting] = useState(false)
  const [Loop, setLoop] = useState(0);
  const Time = 200;
  /*tempo de digitação de letra por letra do texto */
  const [Delta, setDelta] = useState(100)


  useEffect(() => {
    let ticker = setInterval(() => {
      toType()
    }, Delta)
    return () => {clearInterval(ticker)}
  }, [Text])

  const toType = () => {
    /* Essa variável "i" está trabalhando com o estado do loop e ela
    que vai definir qual texto será mostrado. O "i" está limitado
    pelo tamanho do array por causa da "%" que está pegando o resto
    da divisão do loop com o array */
    let i = Loop % content.length;
    /*A FullText está pegando o elemento do array de posição i para 
    passando pelo elemento necessário */
    let FullText = content[i];
    /*Nessa variável caso o IsDeliting for false a estrutura será diferente se fosse true,
    sendo true, estiver deletando, ele estaria deletando uma letra do tamanho do elemento do array por vez,
    caso fosse falso, não estiver deletando, estaria escrevendo uma letra por vez de acordo com o tamanho do array */
    let UpdatedText = IsDeleting ? FullText.substring(0, Text.length-1) : FullText.substring(0, Text.length+1);

    setText(UpdatedText);

    /*Variação responsável por mudar o IsDeleting de false para true e vice versa */
    if(!IsDeleting && UpdatedText === FullText) {
      setIsDeleting(true);
      setDelta(Time)
    }else if (IsDeleting && UpdatedText === '') {
      setIsDeleting(false);
      setDelta(Time);
      setLoop(Loop + 1)
    }
    }


  return (
    <>
      <div className='header'>
        <h1>Olá eu sou {Text} </h1>
        <p>
          Estou estudando na DNC o curso de tecnologia,
          possu o objetivo de me tornar um programador Front-End e para tornar isso
          realidade estou focando em aprender <b>ReactJS e JS.</b>
        </p>
      </div>
    </>
  )
}

export default App
