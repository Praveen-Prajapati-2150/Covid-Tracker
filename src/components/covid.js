import React from "react";
import "./covid.css";

const Covid = () => {
  const [data, setData] = React.useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      // console.log(res);
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <section>
        <div className="heading">
          <h1> <span>🔴</span> Live</h1>
          <h2> <span>COVID-19</span>  CORONAVIRUS TRACKER</h2>
        </div>

        <ul>
          <li className="card">
            <p className="card__name">
              <span> OUR </span> COUNTRY{" "}
            </p>
            <p className="card__total card__small">INDIA</p>
          </li>

          <li className="card">
            <p className="card_name">
              <span> TOTAL </span> RECOVERED{" "}
            </p>
            {/* <p className="card__total card__small">INDIA</p> */}
            <p className="card__total card__small">{data.recovered}</p>
          </li>

          <li className="card">
            <p className="card__name">
              <span> TOTAL </span> CONFIRMED{" "}
            </p>
            <p className="card__total card__small">{data.confirmed}</p>
          </li>

          <li className="card">
            <p className="card__name">
              <span> TOTAL </span> DEATH{" "}
            </p>
            <p className="card__total card__small">{data.deaths}</p>
          </li>

          <li className="card">
            <p className="card__name">
              <span> TOTAL </span> ACTIVE{" "}
            </p>
            <p className="card__total card__small">{data.active}</p>
          </li>

          <li className="card">
            <p className="card__name">
              <span> LAST </span> UPDATED{" "}
            </p>
            <p className="card__total card__small">{data.lastupdatedtime}</p>
          </li>

        </ul>
      </section>
    </>
  );
};

export default Covid;
