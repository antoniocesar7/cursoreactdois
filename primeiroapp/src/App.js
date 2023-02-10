// function App() {
//     return (
//         <div>
//             <h1>Bem vindo ao meu projeto</h1>
//         </div>
//     );
// }

// export default App;
import Nome from './components/Nome';
import {useState} from 'react';//importanto o nosso hook
function App(){
    const[aluno,setAluno] = useState('Sujeito programador')

    function handleChangeName(nome){
       // alert('TESTE')
       setAluno(nome);
    }
    return(
        <div>
            <h1>Componente App</h1><br></br>
            <h2>Olá: {aluno}</h2>
            <button onClick={ () => handleChangeName('Asdubal) } >
                Mudar nome</button><br></br><br></br>
            {/* <Nome aluno="Antonio" idade={30} /><br/> */}
                       
        </div>
    );
}
export default App;

