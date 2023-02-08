function Nome({ aluno,idade }){//Nome(props)
    return(
        <span>Bem-vindo:{aluno} - Idade: {idade} anos</span> //<span>Bem-vindo:{props.aluno}</span>
    )
}
export default Nome;