import React, { useState, useEffect } from "react";
import "./searchpage.css";
import { useParams } from "react-router-dom";
import ImageCollection from "../dashboard/imageCollection/ImageCollection";
import Bodywrapper from "../bodywrapper/Bodywrapper";
import { SpinnerCircular } from "spinners-react";
import Pagination from "../pagination/Pagination";
import AddTag from "./addTag/AddTag";

const Searchpage = () => {
  const { query } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=nxqsfFYnW7Kmx88PonlFI9AQCUpeHyVyzPrb85RlK-Q&per_page=30&page=${currentPage}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const searchData = data.results;
        setSearchData(searchData);
        setLoading(false);
      })
      .catch((error) => console.error("Error:", error));
  }, [currentPage, query]);

  return (
    <div className="search-page">
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
        <Bodywrapper>
          <div className="displaysearch_pages">
            <div>
              <h1>{query}</h1>
              <div>
                <AddTag data={searchData} />
              </div>
            </div>
            <div>
              <ImageCollection data={searchData} />
            </div>
            <div className="pageess">
              <Pagination
                currentPage={currentPage}
                totalPages={99}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </Bodywrapper>
      )}
    </div>
  );
};

export default Searchpage;
