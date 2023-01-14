import "./index.css";

export const ListCard = ({ item, onClick, onCheckItem }) => {
  return (
    <div className="list-card-container">
        <img
          className="checkbox"
          alt="checkbox-icon"
          src={`/img/${item?.checked ? "checked.svg" : "unchecked.svg"}`}
          onClick={() => onCheckItem(item)}
        />
      <div className="list-card-text-container">
        <span className="list-card-title">{item?.name}</span>
        <span className="list-card-subtitle">{item?.quantity} unidades</span>
      </div>
      <div className="arrow-icon-container" onClick={() => onClick(item)}>
        <img className="arrow-icon" src="/img/arrow.svg" alt="arrow-icon" />
      </div>
    </div>
  );
};
