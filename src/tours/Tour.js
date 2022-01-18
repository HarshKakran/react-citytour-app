import React, { useState } from "react";

function Tours(props) {
  console.log(props);
  const [readMore, setReadMore] = useState(false);
  const { tours, fetchTours } = props;
  console.log(tours);
  const [tourData, setTourData] = useState(tours);
  console.log(`TourData: ${tourData}`);

  const removeTour = (id) => {
    let newTourData = tourData.filter((tour) => tour.id !== id);
    setTourData(newTourData);
  };
  if (tourData.length === 0) {
    return (
      <main>
        {console.log("length=0")}
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
        // console.log(tour);
        const { id, img, info, name, price } = tour;
        console.log(`${id}`);
        return (
          <article key={id} className="single-tour">
            <img src={img} alt={name} />
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
