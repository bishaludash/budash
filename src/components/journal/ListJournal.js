import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Pagination from "@material-ui/lab/Pagination";

const ListJournal = () => {
  const classes = useStyles();
  let url = "/journal";
  const [journal, setJournal] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  useEffect(() => {
    getJournals(url);
    // eslint-disable-next-line
  }, []);

  const getJournals = async (url) => {
    let res = await axios.get(url);
    const { data, status, message } = res.data;

    if (!status) {
      setError(message);
      setLoading(false);
      return false;
    }
    setCount(data.last_page);
    setJournal(data);
    setLoading(false);
  };

  const handlePaginate = async (e, value) => {
    e.preventDefault();
    setPage(value);
    let paginateUrl = `${url}?page=${value}&per_page=10`;
    console.log(paginateUrl);
    await getJournals(paginateUrl);
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
      {/*journal start*/}
      {journal.data.map((item, key) => (
        <div className={classes.journal} key={key}>
          <div className={classes.journalDate}>
            {new Date(item.created_at).toDateString()}
            {/*
            / POSTGRESQL, PERFORMANCE, SQL{" "}
            */}
          </div>

          <Link to={`/journal/${item.slug_title}`} className={classes.links}>
            <Typography variant="h5" color="primary">
              {item.title}
            </Typography>
          </Link>
        </div>
      ))}

      {/*journal End*/}

      {/*Paginate*/}
      {count > 1 ? (
        <Pagination count={count} page={page} onChange={handlePaginate} />
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default ListJournal;

const useStyles = makeStyles({
  journal: {
    marginBottom: "1rem",
  },
  journalDate: {
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
