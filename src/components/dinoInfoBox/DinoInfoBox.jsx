import "./dinoInfoBox.css";

const DinoInfoBox = ({
  name,
  discoveryYear,
  period,
  length,
  weigth,
  image,
  reverse,
}) => {
  if (reverse) {
    return (
      <>
        <h2>Img left</h2>
        <div className="dino-info-box">
          <img src={image} alt="dino-img" />
          <div className="info">
            <h3>{name}</h3>
            <p>{discoveryYear}</p>
            <p>{period}</p>
            <p>{length}</p>
            <p>{weigth}</p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h2>Img right</h2>
        <div className="dino-info-box">
          <div className="info">
            <h3>{name}</h3>
            <p>{discoveryYear}</p>
            <p>{period}</p>
            <p>{length}</p>
            <p>{weigth}</p>
          </div>
          <img src={image} alt="dino-img" />
        </div>
      </>
    );
  }
};

export default DinoInfoBox;
