import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };

  // Not sure what the statement static does.
  // Goal of this is so you can pull media out of the props and not have super long expressions like props.data.media.photo
  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  // May not explain this correctly, but the reason why the arrow function causes handleIndexClick to have the right context is due to the modules we added so that we
  // ... don't need to use constructor and super
  handleIndexClick = (event) => {
    this.setState({
      // plus sign magically transforms it from a string to a num?!
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt={"animal"} />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
        )
      </div>
    );
  }
}

export default Carousel;
