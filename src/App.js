import "./App.css";
import { foodObject } from "./foods";

let foodImages = [];
for (let food in foodObject) {
  foodImages.push(
    <img
      alt={foodObject[food].name}
      key={foodObject[food].name}
      src={foodObject[food].img}
      onClick={displayFoodInfo}
    />
  );
}

function displayFoodInfo(e) {
  let foodName = e.target.alt;
  document.getElementById("food-text").innerHTML =
    "This is " +
    foodName +
    " and it's " +
    foodObject[foodName].tastiness +
    "! <br /> <br />" +
    foodObject[foodName].furtherInfo;
}

function App() {
  return (
    <div className="App">
      <header>
        <h1>Food facts</h1>
      </header>
      <main>
        <div id="food-imgs">{foodImages}</div>
        <div>
          <p id="food-text">Click on the food pictures above for more info!</p>
        </div>
      </main>
      <footer>
        <p>
          All images are from{" "}
          <a target="_blank" rel="noreferrer" href="https://unsplash.com/">
            Unsplash
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default App;
