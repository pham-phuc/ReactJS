import { useState } from "react";

function App() {

  const [item, setItem] = useState("");
  const [items, setItems] = useState(
    (() => {
      const storageItem = JSON.parse(localStorage.getItem("item"));
      return storageItem ?? [];
    }) 
  );
  const handleAddItem = () => {
    setItems((prev) => {
      const newItems = [...prev, item];
      const jsonItem = JSON.stringify(newItems);
      localStorage.setItem("item", jsonItem);
      return newItems;
    });
    setItem("");
  };
  return (
    <div style={{ padding: 50 }}>
      <input value={item} onChange={(e) => setItem(e.target.value)} />
      <button onClick={handleAddItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
