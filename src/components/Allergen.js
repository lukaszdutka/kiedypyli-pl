const array = Array.from(Array(36).keys()).map(i => i + 1); //1 to 36

function Allergen({allergen}) {
  const {name, from, to} = allergen;
  const getClass = number => number >= from && number <= to ? "high" : "";
  return (
    <tr>
      <th className={"row"} scope="row">{name}</th>
      {array.map(i => {
        return <td className={getClass(i)} key={i}/>;
      })}
    </tr>
  );
}

export default Allergen;