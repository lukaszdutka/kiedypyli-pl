import {useEffect, useState} from "react";

function AllergensCheckboxes({allAllergens, setRenderedAllergens}) {
  const [yourAllergenNames, setYourAllergenNames] = useState([], () => {
    const localData = localStorage.getItem("allergy-filters");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("allergy-filters", JSON.stringify(yourAllergenNames))
    setRenderedAllergens(yourAllergenNames.length === 0
      ? allAllergens
      : allAllergens.filter(allergen => yourAllergenNames.includes(allergen.name)));
  }, [yourAllergenNames])

  function handleCheck(allergen) {
    setYourAllergenNames(
      yourAllergenNames.includes(allergen)
        ? yourAllergenNames.filter(al => al !== allergen)
        : [allergen, ...yourAllergenNames]
    )
  }


  return (
    <>
      <h2>Twoje alergie:</h2>
      <div className={"your-allergies"}>
        {allAllergens.map(allergen => (
          <label key={allergen.name}>
            <input type="checkbox"
                   checked={yourAllergenNames.includes(allergen.name)}
                   onChange={() => handleCheck(allergen.name)}/>
            {allergen.name}
          </label>
        ))}
      </div>
      {yourAllergenNames.length > 0 && <button onClick={() => setYourAllergenNames([])}>wyczyść</button>}
    </>
  );
}

export default AllergensCheckboxes;