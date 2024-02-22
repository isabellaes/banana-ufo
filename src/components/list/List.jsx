const List = ({ animals, ordered }) => {
  if (ordered) {
    return (
      <ol>
        {animals.map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ol>
    );
  } else {
    return (
      <ul>
        {animals.map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    );
  }
};

export default List;
