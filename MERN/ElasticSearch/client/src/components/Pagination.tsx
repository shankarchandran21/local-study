import React, { useState } from "react";

const PaginationExample = () => {
  // Sample data
  const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

  // States
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate indexes
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

console.log(`indexOfFirstItem : ${indexOfFirstItem}`)
console.log(`indexOfLastItem : ${indexOfLastItem}`)
console.log(`totalPages : ${totalPages}`)


  return (
    <div style={{ padding: 20 }}>
      <h2>Pagination Example</h2>

      {/* Display current items */}
      <ul>
        {currentItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      {/* Pagination controls */}
      <div style={{ marginTop: 20 }}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {/* {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              margin: "0 5px",
              fontWeight: currentPage === i + 1 ? "bold" : "normal"
            }}
          >
            {i + 1}
          </button>
        ))} */}

        {Array.from({length:totalPages}).map((_,i)=>{
            return(
                <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              margin: "0 5px",
              fontWeight: currentPage === i + 1 ? "bold" : "normal"
            }}
          >
            {i + 1}
          </button>
            )
        })}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationExample;


