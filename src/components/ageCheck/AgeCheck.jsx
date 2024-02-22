import { useState } from "react";

const AgeCheck = () => {
  const [input, setInput] = useState(0);
  const age = 18;
  function checkAge(age) {
    if (age >= 18) {
      return "Du är 18 år eller äldre";
    } else {
      return "Du är under 18";
    }
  }
  return (
    <>
      <input
        onChange={(e) => setInput(Number(e.currentTarget.value))}
        placeholder="Enter age"
      ></input>
      {input ? <p>{checkAge(input)}</p> : <p>{checkAge(age)}</p>}
    </>
  );
};

export default AgeCheck;
