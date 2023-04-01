import './App.css';
import Allergen from "./components/Allergen";
import {useState} from "react";
import AllergensCheckboxes from "./components/AllergensCheckboxes";
import allAllergens from "./allergensData";

const months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];

function App() {
  const [renderedAllergens, setRenderedAllergens] = useState(allAllergens);

  return (
    <div className="App">
      <h1>KiedyPyli.pl</h1>
      <AllergensCheckboxes allAllergens={allAllergens} setRenderedAllergens={setRenderedAllergens}/>
      <table>
        <thead>
        <tr>
          <td/>
          {months.map(month => <th key={month} colSpan="3" scope="colgroup">{month}</th>)}
        </tr>
        </thead>
        <tbody>
        {renderedAllergens.map(allergen => (<Allergen key={allergen.name} allergen={allergen}/>))}
        </tbody>
      </table>
    </div>
  );
}

export default App;