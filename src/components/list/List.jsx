const List = ({ animals, ordered }) => {
  let array = animals.join(" ");
  array = array.split(" ");
  if (ordered) {
    return (
      <ol>
        {array.map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ol>
    );
  } else {
    return (
      <ul>
        {array.map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    );
  }
};

export default List;
