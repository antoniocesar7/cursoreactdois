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
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState('0');

    const [user, setUser] = useState({})
    function handleRegister(e){
        e.preventDefault()
        
        setUser({
            nome:nome,
            idade: idade,
            email: email,
        })
    }
   return(
        <div>
            <h1>Cadatrando Usuário</h1>
            <form onSubmit={handleRegister}>
                <label>Nome:</label><br/>
                <input 
                    placeholder='Digite o seu nome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    
                /><br/>

                <label>Email:</label><br/>
                <input 
                    placeholder='Digite o seu email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br/>

                <label>Idade:</label><br/>
                <input 
                    placeholder='Digite o sua idade'
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                />
                <br/>
                <button type='submit'>Registrar</button>

            </form> <br/><br/>  

            <div>
                <span>Bem vindo: {user.nome}</span><br/>
                <span>Idade: {user.idade}</span><br/>
                <span>Email: {user.email}</span><br/>
            </div>                   
        </div>
    );
}
export default App;

