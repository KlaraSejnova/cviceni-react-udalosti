/*
Zadání: Po kliku na tlačítko zobrazte alert s textem „Ahoj“.
*/
const handleClick = () => {
  alert("Ahoj");
};
export const Uloha1 = () => {
  return <button onClick={handleClick}>Ukaž bublinu</button>;
};
