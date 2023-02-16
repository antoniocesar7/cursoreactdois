
import {useEffect, useState} from 'react';//importanto o nosso hook
function App(){
    const [input, setInput] = useState('');     
    const [tarefas, setTarefas] = useState([
        'Pagar a contat de luz',
        'Estudar React JS'
    ]);

    useEffect(() =>{
        const tarefasStorage = localStorage.getItem('@tarefa');

        if(tarefasStorage){
            setTarefas(JSON.parse(tarefasStorage))
        }

    }, []);

    useEffect(()=>{
        localStorage.setItem('@tarefa', JSON.stringify(tarefas))
    }, [tarefas]);

    function handleRegister(e){
        e.preventDefault();
        setTarefas([...tarefas, input]);
        setInput('');

    }
   return(
        <div>
            <h1>Cadatrando Usuário</h1>
git
            <form onSubmit={handleRegister}>
                <label>Nome da tarefa:</label><br/>
                <input 
                    placeholder='Digite uma tarefa'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                   
                /><br/>
                <button type='submit'>Registrar</button>
            </form> 
            <br/><br/>  

            <ul>
                {tarefas.map( tarefa => (
                    <li key={tarefa}>{tarefa}</li>
                ))}
            </ul>
               
        </div>
    );
}
export default App;

