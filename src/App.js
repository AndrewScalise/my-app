import { useState } from "react";
import Card from "./components/card";
import shuffle from "./utlities/shuffle"

function App() {
  const [cards, setCards] = useState(shuffle); // Cards array from assets

  return (
    <>
      <div className="grid">
        {cards.map((card) => {
          const { image, id, matched } = card;

          return (
            <Card key={id} image={image} selected={false} onClick={() => {}} />
          );
        })}
      </div>
    </>
  );
}

export default App;
