import React from "react";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {

  const getPages = () => {
    const pages = [];

    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      if (i > 1 && i < totalPages) {
        pages.push(i);
      }
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };

  const pages = getPages();

  return (
    <div className="flex justify-center my-10 items-center gap-2">

      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
      >
        «
      </button>

      {/* Pages */}
      {pages.map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-3 py-2">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 rounded font-medium transition
              ${currentPage === page
                ? "bg-blue-900 text-white"
                : "bg-gray-100 hover:bg-gray-200"
              }`}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
      >
        »
      </button>
    </div>
  );
};