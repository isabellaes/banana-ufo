const List = ({ animals, ordered }) => {
  if (ordered) {
    return (
      <ol>
        <h2>Ordered list</h2>
        {animals.map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ol>
    );
  } else {
    return (
      <ul>
        <h2>Unordered list</h2>
        {animals.map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    );
  }
};

export default List;
