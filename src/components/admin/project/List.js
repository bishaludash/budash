import React, { useState, useCallback, useMemo } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";

import ReactTable from "../../../utils/ReactTable";
import SimpleSnackbar from "../../../utils/SimpleSnackbar";
import DeleteModal from "../../../utils/DeleteModal";

const List = () => {
  const url = "/project";
  const match = useRouteMatch();
  const history = useHistory();

  const [data, setData] = React.useState([]);
  const [dataRange, setDataRange] = useState({ from: null, to: null });
  const [loading, setLoading] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);
  const [message, setMessage] = useState(null);
  const [toast, setToast] = useState(false);
  const [currentItem, setCurrentItem] = useState({ slug: null, index: null });
  const [handleDelete, setHandleDelete] = useState(false);

  const columns = useMemo(
    () => [
      {
        Header: "Project title",
        accessor: "title",
        Cell: ({ row, value }) => (
          <a
            href={`/projects/${row.original.slug_title}`}
            target="_blank"
            rel="noreferrer"
          >
            {value}
          </a>
        ),
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => <Chip label={value} />,
      },
      {
        Header: "Created At",
        accessor: "created_at",
        Cell: ({ value }) => <span>{new Date(value).toDateString()}</span>,
      },
      {
        Header: "Action",
        accessor: "id",
        Cell: ({ row }) => (
          <div>
            <Tooltip title="Edit">
              <IconButton
                aria-label="delete"
                size="small"
                onClick={() => {
                  history.push(`${match.path}/edit/${row.original.slug_title}`);
                }}
                className="mr-3"
              >
                <EditIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Delete">
              <IconButton
                aria-label="delete"
                size="small"
                onClick={(e) => {
                  setHandleDelete(true);
                  setCurrentItem({
                    slug: row.original.slug_title,
                    index: row.index,
                  });
                }}
                className="mr-3"
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </div>
        ),
      },
    ],
    [history, match]
  );

  const fetchData = useCallback(async (pageIndex, pageSize) => {
    setLoading(true);
    const res = await axios.get(
      `${url}?page=${pageIndex}&per_page=${pageSize}&all=yes`
    );
    if (!res.data.status) {
      setMessage(res.data.message);
      return false;
    }

    // set data to state
    const { data, total, from, to } = res.data.data;
    setData(data);
    setDataRange({ from, to, total });

    // set total items count
    setPageCount(Math.ceil(total / pageSize));
    setLoading(false);
  }, []);

  const deleteProject = async (slug) => {
    console.log(slug);
    let res = await axios.delete(`/project/${slug}`);

    // remove item from ui
    let newData = [...data];
    newData.splice(currentItem.index, 1);
    setData(newData);

    setHandleDelete(false);
    setToast(res.data.message);
  };

  if (message) {
    return <div>{message}</div>;
  }

  return (
    <div>
      {/*Material table list*/}
      <SimpleSnackbar toast={toast} setToast={setToast} />
      <DeleteModal
        handleDelete={handleDelete}
        setHandleDelete={setHandleDelete}
        currentItem={currentItem}
        deleteItem={deleteProject}
      />

      <h2 className="mb-2">Project</h2>

      {/* Create Article button */}
      <div style={{ padding: "0px 10px", marginBottom: "5px" }}>
        <Link to={`${match.path}/create`} className="td-none">
          <Button variant="contained" size="small" color="primary">
            Create Project
          </Button>
        </Link>
      </div>

      {/* Table */}
      <ReactTable
        columns={columns}
        data={data}
        fetchData={fetchData}
        loading={loading}
        pageCount={pageCount}
        dataRange={dataRange}
      />
    </div>
  );
};

export default List;
