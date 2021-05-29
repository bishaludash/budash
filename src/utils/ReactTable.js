import React, { useEffect, Fragment } from "react";
import { useTable, usePagination } from "react-table";
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";

const ReactTable = ({
  columns,
  data,
  fetchData,
  loading,
  pageCount: controlledPageCount,
}) => {
  // Instantiate react table and fetch required values from the hook
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
    // Get the state from the instance
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }, // Pass our hoisted table state
      manualPagination: true, // Tell the usePagination
      // hook that we'll handle our own data fetching
      // This means we'll also have to provide our own
      // pageCount.
      pageCount: controlledPageCount,
    },
    usePagination
  );

  useEffect(() => {
    fetchData(pageIndex, pageSize);
  }, [fetchData, pageIndex, pageSize]);

  // Render the UI for your table
  return (
    <Fragment>
      {/* <pre>
        <code>
          {JSON.stringify(
            {
              pageIndex,
              pageSize,
              pageCount,
              canNextPage,
              canPreviousPage,
            },
            null,
            2
          )}
        </code>
      </pre> */}
      <div style={{ minHeight: "70vh" }}>
        <MaUTable {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell
                    {...column.getHeaderProps()}
                    style={{ fontWeight: "bold" }}
                  >
                    {column.render("Header")}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <TableCell {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </MaUTable>
      </div>

      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <div className="pagination">
        {/* Show Loading status */}
        <div>
          {loading ? (
            // Use our custom loading state to show a loading indicator
            <span colSpan="10000">Loading...</span>
          ) : (
            <span colSpan="10000">
              Showing {page.length} of ~{controlledPageCount * pageSize} results
            </span>
          )}
        </div>
        <IconButton onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          <SkipPreviousIcon />
        </IconButton>{" "}
        <IconButton onClick={() => previousPage()} disabled={!canPreviousPage}>
          <NavigateBeforeIcon />
        </IconButton>{" "}
        <IconButton onClick={() => nextPage()} disabled={!canNextPage}>
          <NavigateNextIcon />
        </IconButton>{" "}
        <IconButton
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          <SkipNextIcon />
        </IconButton>{" "}
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
    </Fragment>
  );
};

export default ReactTable;
