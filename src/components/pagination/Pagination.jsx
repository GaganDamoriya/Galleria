import React from "react";
import PropTypes from "prop-types";
import "./Pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  const maxButtons = 9; // Maximum number of buttons to show

  for (let i = 1; i <= totalPages; i++) {
    if (i <= maxButtons) {
      pages.push(i);
    }
  }

  return (
    <div className="pagination-container">
      {currentPage > 1 && (
        <button onClick={() => onPageChange(1)} className="pagination-button">
          First
        </button>
      )}
      <div className="pagination-buttons">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`pagination-button ${
              currentPage === page ? "active" : ""
            }`}
          >
            {page}
          </button>
        ))}
        {totalPages > maxButtons && <span>...</span>}
        {totalPages > maxButtons && (
          <button
            onClick={() => onPageChange(totalPages)}
            className="pagination-button"
          >
            Last
          </button>
        )}
      </div>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
