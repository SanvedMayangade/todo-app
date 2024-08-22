import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Todoitems from './components/Todoitems';
import Btn from './components/Button';

function App() {
  return (
    <div className='todo-container'>
      <Header/>
      <Todoitems/>
      <Todoitems/>
      <Todoitems/>
      <Todoitems/>
      <Btn/>
    </div>
  )
}

export default App;
