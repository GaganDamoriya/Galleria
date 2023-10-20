import React, { useEffect, useState } from "react";
import "./dashboard.css";
import Bodywrapper from "../bodywrapper/Bodywrapper";
import mountain from "../../assets/mountaincpoy1.jpg";
import ImageCollection from "./imageCollection/ImageCollection";
import { SpinnerCircular } from "spinners-react";
import Searchbar from "../searchbar/Searchbar";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/?client_id=nxqsfFYnW7Kmx88PonlFI9AQCUpeHyVyzPrb85RlK-Q&per_page=30&page=1`
    )
      .then((response) => response.json())
      .then((Responsedata) => {
        setData(Responsedata);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);
  console.log(data);
  return (
    <div className="dashDiv">
      {loading ? (
        <div className="spinner">
          <SpinnerCircular
            size={120}
            thickness={100}
            speed={100}
            color="rgba(57, 70, 172, 1)"
            secondaryColor="var(--txt-clr)"
          />
        </div>
      ) : (
        <div
          className="herodiv"
          style={{
            backgroundImage: `url(${mountain})`,
          }}
        >
          <h1>Download HD Quality Image from Creator</h1>

          <Searchbar />
        </div>
      )}
      {!loading && (
        <Bodywrapper>
          <div className="imageclts">
            <h1>Image Collections</h1>
            <div>
              <ImageCollection data={data} />
            </div>
          </div>
        </Bodywrapper>
      )}
    </div>
  );
};
export default Dashboard;
