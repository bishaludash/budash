import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Pagination from "@material-ui/lab/Pagination";

const ListProject = () => {
  const classes = useStyles();
  let url = "/project";
  const [projects, setProjects] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1)

  useEffect(() => {
    getProjects(url);
    // eslint-disable-next-line
  }, []);

  const getProjects = async (url) => {
    let res = await axios.get(url);
    const { data, status, message } = res.data;

    if (!status) {
      setError(message);
      setLoading(false);
      return false;
    }
    setCount(data.last_page);
    setProjects(data);
    setLoading(false);
  };


  const handlePaginate = async (e, value) => {
    e.preventDefault();
    setPage(value);
    let paginateUrl = `${url}?page=${value}&per_page=10`;
    console.log(paginateUrl);
    await getProjects(paginateUrl);
  };

  if (loading) {
    return (
      <center>
        <CircularProgress className="mt-5" />
      </center>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Fragment>
      {/*Project start*/}
      {projects.data.map((item, key) => (
        <div className={classes.project} key={key}>
          <div className={classes.projectDate}>
            {new Date(item.created_at).toDateString()}
          </div>

          <Link to={`/projects/${item.slug_title}`} className={classes.links}>
            <Typography variant="h5" color="primary">
              {item.title}
            </Typography>
          </Link>
        </div>
      ))}

      {/*project End*/}

      {/*Paginate*/}
       {count > 1 ? (
        <Pagination count={count} page={page} onChange={handlePaginate} />
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default ListProject;

const useStyles = makeStyles({
  project: {
    marginBottom: "1rem",
  },
  projectDate: {
    fontSize: "15px",
    fontWeight: "600",
    color: "#676767",
  },
  links: {
    textDecoration: "none",
    "& h5:hover": {
      color: "#e57373",
    },
    "& p:hover": {
      color: "#e57373",
    },
  },
});
