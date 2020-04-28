console.log("Test");

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
