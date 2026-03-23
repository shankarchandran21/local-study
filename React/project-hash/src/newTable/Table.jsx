import React, { memo, useState, useEffect } from 'react';

function Table({ listOfData, page, setPage, total,itemPerPage }) {

  const totalPages = Math.ceil(total / 5);
  const [startPage, setStartPage] = useState(1);
  const [gender,setGender] = useState(null)

  // Update startPage whenever the page changes
  useEffect(() => {
    console.log(page+1)
    console.log(`Start Page is ${startPage} and itemsPerPage is ${itemPerPage} and add the both will be ${startPage+itemPerPage}`)
    if (page+1 >= startPage + itemPerPage) {
      // Move window forward if page exceeds current window
      setStartPage(page);
    } else if (page -1 < startPage) {
      // Move window backward if page is before current window
      setStartPage(Math.max(page - itemPerPage + 1, 1));
    }
  }, [page]);

  const endPage = Math.min(startPage + itemPerPage - 1, totalPages);
  console.log(endPage)

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) pageNumbers.push(i);

  const showLastPage = endPage < totalPages;

  return (
    <div style={{ padding: '20px' }}>
      {/* Table here */}
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Address</th>
            <th>Company</th>
            <th>Company Address</th>
            <th>Gender</th>
            <th>Hair</th>
          </tr>
        </thead>
        <tbody>
          {listOfData.map(({ firstName, lastName, email, address, company, gender, hair, id }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{email}</td>
              <td>
                {address.address}, {address.city}, {address.state} - {address.postalCode}
              </td>
              <td>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Department</th>
                      <th>Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{company.name}</td>
                      <td>{company.department}</td>
                      <td>{company.title}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                {company.address.address}, {company.address.city}, {company.address.state} -{' '}
                {company.address.postalCode}
              </td>
              <td>{gender}</td>
              <td>
                <table>
                  <thead>
                    <tr>
                      <th>color</th>
                      <th>type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{hair.color}</td>
                      <td>{hair.type}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </button>

        {pageNumbers.map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            disabled={num === page}
            style={{
              border: '1px solid grey',
              padding: '10px',
              backgroundColor: page === num ? '#ddd' : 'white',
            }}
          >
            {num}
          </button>
        ))}

        {showLastPage && (
          <>
            <span style={{ padding: '10px' }}>...</span>
            <button
              onClick={() => setPage(totalPages)}
              style={{
                border: '1px solid grey',
                padding: '10px',
                backgroundColor: page === totalPages ? '#ddd' : 'white',
              }}
            >
              {totalPages}
            </button>
          </>
        )}

        <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
          Next
        </button>
      </div>
      <input type='radio' checked={gender === 'male'} value={'male'} onChange={(e)=>setGender(e.target.value)} />
      <input type='radio' checked={gender === 'female'} value={'female'} onChange={(e)=>setGender(e.target.value)} />
      <h1>{gender}</h1>
    </div>
  );
}

export default memo(Table);
