import { useEffect, useState } from "react";

function App() {
  const arr = ['Yes', 'Probably not'];
  const [dropSelect, setDropSelect] = useState(null);
  const [styleItem, setStyleItem] = useState(false);

  const showItem = () => {
    setStyleItem(true);
  }

  useEffect(() => {
    console.log(dropSelect);
    if(dropSelect){
      setStyleItem(false);
    }
  }, [dropSelect])

  return (
    <div className="App">
      <h2>Should you use a dropdown?</h2>
       {/* <select className="drop">
        <option hidden defaultValue>Select</option>
        {arr.map((item, i)=> (
            <option key={i}>{item}</option>
        ))}
      </select> */}
      <div className="main-div" 
        onMouseOver={showItem} 
        // onMouseOut={() => styleItem ? (setTimeout(() => {setStyleItem(false)}, 3000) ) : null}
        >
        <a className="select-option">{dropSelect ? dropSelect : 'Select'} ▽</a>
        <div className="dropdown" onMouseOver={showItem}>
          {
            arr.map((item, i) => (
              <a style={{ display : styleItem ? 'block' : 'none'}} onClickCapture={() => (setDropSelect(item), setStyleItem(false))} className="item" key={i}>{item}</a>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
