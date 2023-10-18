import "./empty.css";
import emptyImage from "../../images/empty-image.jpg";

function Empty() {
  return (
    <div>
      <img src={emptyImage} alt="illustration erreur 404"></img>
    </div>
  );
}

export default Empty;
