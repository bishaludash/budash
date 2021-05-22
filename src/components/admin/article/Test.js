import React from "react";
import { useTable, usePagination } from "react-table";

const Test = () => {
  const data = React.useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
        col3: "Hello",
        col4: "World",
        col5: "Hello",
        col6: "World",
      },
      {
        col1: "Hello",
        col2: "World",
        col3: "Hello",
        col4: "World",
        col5: "Hello",
        col6: "World",
      },
      {
        col1: "Hello",
        col2: "World",
        col3: "Hello",
        col4: "World",
        col5: "Hello",
        col6: "World",
      },
      {
        col1: "Hello",
        col2: "World",
        col3: "Hello",
        col4: "World",
        col5: "Hello",
        col6: "World",
      },
      {
        col1: "Hello",
        col2: "World",
        col3: "Hello",
        col4: "World",
        col5: "Hello",
        col6: "World",
      },
      {
        col1: "Hello",
        col2: "World",
        col3: "Hello",
        col4: "World",
        col5: "Hello",
        col6: "World",
      },
      {
        col1: "Hello",
        col2: "World",
        col3: "Hello",
        col4: "World",
        col5: "Hello",
        col6: "World",
      },
      {
        col1: "Hello",
        col2: "World",
        col3: "Hello",
        col4: "World",
        col5: "Hello",
        col6: "World",
      },
      {
        col1: "Hello",
        col2: "World",
        col3: "Hello",
        col4: "World",
        col5: "Hello",
        col6: "World",
      },
      {
        col1: "Hello",
        col2: "World",
        col3: "Hello",
        col4: "World",
        col5: "Hello",
        col6: "World",
      },
      {
        col1: "Hello",
        col2: "World",
        col3: "Hello",
        col4: "World",
        col5: "Hello",
        col6: "World",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Column 1",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Column 2",
        accessor: "col2",
      },
      {
        Header: "Column 3",
        accessor: "col3",
      },
      {
        Header: "Column 4",
        accessor: "col4",
      },
      {
        Header: "Column 5",
        accessor: "col5",
      },
      {
        Header: "Column 6",
        accessor: "col6",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      manualPagination: true,
    },
    usePagination
  );

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Test;
