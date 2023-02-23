import './App.css';

// import { CardList } from './components/IfElse/CardList';
// import { CardList } from './components/Ternario/CardList';
// import { CardList } from './components/operadoresLogicos/CardList';
import { CardList } from './components/enum/CardList';

const array = [1, 2, 3, 4];

function App() {
	return (
		<div className="App">
			<h1>Clase 04</h1>
			<CardList array={[]} title="Lista de numeros" step={'checkout'} />
		</div>
	);
}

export default App;
