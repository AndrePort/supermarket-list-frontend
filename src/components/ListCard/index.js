import { useState } from "react";
import "./index.css";

export const ListCard = ({ item }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="list-card-container">
      <div className="checkbox">
        <input
          onChange={() => setChecked(!checked)}
          checked={checked}
          id="checkbox"
          type="checkbox"
        />
        <label htmlFor="checkbox" />
      </div>
      <div className="list-card-text-container">
        <span className="list-card-title">{item?.name}</span>
        <span className="list-card-subtitle">{item?.quatity} unidades</span>
      </div>
      <img className="arrow-icon" src="arrow-icon" alt="arrow-icon" />
    </div>
  );
};
