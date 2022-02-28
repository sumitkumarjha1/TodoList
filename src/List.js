import "./List.css";

function List(props) {
  const del = (key) => {
    const newL = props.itemL.filter((Ob) => {
      return Ob.key !== key;
    });
    props.update(newL);
  };
  return (
    <div>
      {props.itemL.map((itemO) => {
        return (
          <div key={itemO.key} className="item">
            <p>{itemO.item}</p>
            <button onClick={() => del(itemO.key)}>x</button>
          </div>
        );
      })}
    </div>
  );
}
export default List;
