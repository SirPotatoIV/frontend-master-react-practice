import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havenese",
    }),
    React.createElement(Pet, { name: "Penny", animal: "Dog", breed: "Mutt" }),
    React.createElement(Pet, { name: "Bowie", animal: "Cat", breed: "Mixed" }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
