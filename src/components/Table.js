import React, { useState } from 'react';

function Table(props) {
  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const { data } = props;

  // Sorts the data based on the specified column and sort order
  const sortData = (column, order) => {
    const sortedData = [...data];
    sortedData.sort((a, b) => {
      if (a[column] < b[column]) {
        return order === 'ascending' ? -1 : 1;
      }
      if (a[column] > b[column]) {
        return order === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    return sortedData;
  };

  // Handles click on column header to sort the table
  const handleSort = (column) => {
    let order = 'ascending';
    if (sortedColumn === column && sortOrder === 'ascending') {
      order = 'descending';
    }
    setSortedColumn(column);
    setSortOrder(order);
  };

  let sortedData = [...data];
  if (sortedColumn !== null && sortOrder !== null) {
    sortedData = sortData(sortedColumn, sortOrder);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>Name</th>
            <th onClick={() => handleSort('age')}>Age</th>
            <th onClick={() => handleSort('gender')}>Gender</th>
            <th onClick={() => handleSort('condition')}>Condition</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((patient, index) => (
            <tr key={index}>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.condition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
