import "./ufolist.css";
import Button from "../button/Button";

import { useState } from "react";

const UfoList = () => {
  const [showList, setShowList] = useState(false);

  function onClick() {
    if (showList) {
      setShowList(false);
    } else {
      setShowList(true);
    }
  }

  return (
    <>
      <Button func={() => onClick()} title={"Toggle list"}></Button>
      {showList ? (
        <ul>
          <li>Millennium Falcon</li>
          <li>USS Enterprise</li>
          <li>TARDIS</li>
          <li>Serenity</li>
          <li className="color">Discovery One</li>
          <li>Nostromo</li>
          <li>Battlestar Galactica</li>
          <li>Event Horizon</li>
          <li>Sulaco</li>
          <li>Heart of Gold</li>
        </ul>
      ) : (
        <></>
      )}
    </>
  );
};

export default UfoList;
