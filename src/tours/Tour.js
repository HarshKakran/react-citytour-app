import React, { useState } from "react";

function Tours(props) {
  const [readMore, setReadMore] = useState(false);
  const { tours, fetchTours } = props;
  const [tourData, setTourData] = useState(tours);

  const removeTour = (id) => {
    let newTourData = tourData.filter((tour) => tour.id !== id);
    setTourData(newTourData);
  };
  if (tourData.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            refresh tours
          </button>
        </div>
      </main>
    );
  }
  return (
    <>
      <h2>Our Tours</h2>
      {tourData.map((tour) => {
        console.log(tour);
        const { id, image, info, name, price } = tour;
        return (
          <article key={id} className="single-tour">
            <img src={image} alt={name} />
            <footer>
              <div className="tour-info">
                <h4>{name}</h4>
                <h4 className="tour-price">${price}</h4>
              </div>
              <p>{readMore ? info : `${info.substring(0, 20)}...`}</p>
              <button onClick={() => setReadMore(!readMore)}>
                {readMore ? `show less` : `read more`}
              </button>
              <button className="delete-btn" onClick={() => removeTour(id)}>
                not interested
              </button>
            </footer>
          </article>
        );
      })}
    </>
  );
}

export default Tours;
