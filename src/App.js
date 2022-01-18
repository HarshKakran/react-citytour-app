import { useState, useEffect } from "react";
import Loading from "./tours/Loading";
import Tours from "./tours/Tour";
import { data } from "./tours/tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [tourData, setTourData] = useState([]);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours);
      setIsLoading(false);
      setTourData(tours);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
    // setTourData(data);
  }, []);
  if (isLoading) {
    return (
      <main>
        {console.log("loading")}
        <Loading></Loading>
      </main>
    );
  }

  return (
    <main>
      {/* <Tours tours={data} fetchTours={fetchTours}></Tours> */}
      <Tours tours={tourData} fetchTours={fetchTours}></Tours>
    </main>
  );
}

export default App;
