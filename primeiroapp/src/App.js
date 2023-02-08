// function App() {
//     return (
//         <div>
//             <h1>Bem vindo ao meu projeto</h1>
//         </div>
//     );
// }

// export default App;
import Nome from './components/Nome'
function App(){
    return(
        <div>
            <h1>Componente App</h1>
            <Nome aluno="Antonio" idade={30} /><br/>
            <Nome aluno="César" idade={25} /><br/>
            
        </div>
    );
}
export default App;

