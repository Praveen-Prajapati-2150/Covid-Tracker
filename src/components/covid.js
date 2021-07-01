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
                    <h1> Live</h1>
                    <h2>COVID-19 CORONAVIRUS TRACKER</h2>
                </div>

                <ul>
                    <li className="card">
                        <div className="card__inner">
                            <p className="card__name">
                                <span> OUR </span> COUNTRY{" "}
                            </p>
                            <p className="card__total card__small">INDIA</p>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__inner">
                            <p className="card__name">
                                <span> TOTAL </span> RECOVERED{" "}
                            </p>
                            {/* <p className="card__total card__small">INDIA</p> */}
                            <p className="card__total card__small">{data.recovered}</p>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__inner">
                            <p className="card__name">
                                <span> TOTAL </span> CONFIRMED{" "}
                            </p>
                            <p className="card__total card__small">{data.confirmed}</p>
                        </div>
                    </li> 
                    <li className="card">
                        <div className="card__inner">
                            <p className="card__name">
                                <span> TOTAL </span> DEATH{" "}
                            </p>
                            <p className="card__total card__small">{data.deaths}</p>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__inner">
                            <p className="card__name">
                                <span> TOTAL </span> ACTIVE{" "}
                            </p>
                            <p className="card__total card__small">{data.active}</p>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card__inner">
                            <p className="card__name">
                                <span> LAST </span> UPDATED{" "}
                            </p>
                            <p className="card__total card__small">{data.lastupdatedtime}</p>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    );
};


export default Covid;
