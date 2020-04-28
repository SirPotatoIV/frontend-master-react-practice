import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havenese",
  //   }),
  //   React.createElement(Pet, { name: "Penny", animal: "Dog", breed: "Mutt" }),
  //   React.createElement(Pet, { name: "Bowie", animal: "Cat", breed: "Mixed" }),
  // ]);

  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Penny" animal="Dog" breed="Mutt" />
      <Pet name="Bowie" animal="Cat" breed="Mixed" />
      <Pet name="Tucker" animal="Dog" breed="Doddle" />
      <Pet name="Bindi" animal="Dog" breed="Australian Sheppard" />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
