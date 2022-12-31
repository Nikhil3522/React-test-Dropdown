import { useEffect, useState } from "react";

function App() {
  // This is the array, every element of this array is a option of our drop down list.
  const arr = ['Yes', 'Probably not'];

  // This state is storing the option selected by user.
  const [dropSelect, setDropSelect] = useState(null);
  const [styleItem, setStyleItem] = useState(false);

  // This function change the styleItem value to true.
  const showItem = () => {
    setStyleItem(true);
  }

  useEffect(() => {
    if(dropSelect){
      setStyleItem(false);
    }
  }, [dropSelect])

  return (
    <div className="App">
      <h2>Should you use a dropdown?</h2>
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
