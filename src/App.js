import logo from "./logo.svg";
import "./App.css";
import { persons } from "./assets/persons";
import {Card} from "./components/card/card"

function App() {
  return (
    <div className="App">
      {persons.map(person => {
        return (<Card key={person.id} person={person} />)
      })}
    </div>
  );
}

export default App;
