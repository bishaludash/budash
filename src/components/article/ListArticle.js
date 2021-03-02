import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Pagination from "@material-ui/lab/Pagination";

const ListArticle = () => {
  const classes = useStyles();
  let url = "/article";
  const [articles, setArticles] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1)

  useEffect(() => {
    getArticles(url);
    // eslint-disable-next-line
  }, []);

  const getArticles = async (url) => {
    let res = await axios.get(url);
    const { data, status, message } = res.data;

    if (!status) {
      setError(message);
      setLoading(false);
      return false;
    }
    setCount(data.last_page);
    setArticles(data);
    setLoading(false);
  };


  const handlePaginate = async (e, value) => {
    e.preventDefault();
    setPage(value);
    let paginateUrl = `${url}?page=${value}&per_page=10`;
    console.log(paginateUrl);
    await getArticles(paginateUrl);
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
      {/*Article start*/}
      {articles.data.map((item, key) => (
        <div className={classes.article} key={key}>
          <div className={classes.articleDate}>
            {new Date(item.created_at).toDateString()}
            {/*
            / POSTGRESQL, PERFORMANCE, SQL{" "}
            */}
          </div>

          <Link to={`/articles/${item.slug_title}`} className={classes.links}>
            <Typography variant="h5" color="primary">
              {item.title}
            </Typography>
          </Link>

          <Typography variant="body2" gutterBottom>
            {item.summary}
          </Typography>

          <Link to={`/articles/${item.slug_title}`} className={classes.links}>
            <Typography gutterBottom color="primary">
              Read this article
              <ArrowRightAltIcon
                variant="overline"
                style={{ marginBottom: "-10px", marginLeft: "10px" }}
              />
            </Typography>
          </Link>
        </div>
      ))}

      {/*Article End*/}

      {/*Paginate*/}
      {count > 1 ? (
        <Pagination count={count} page={page} onChange={handlePaginate} />
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default ListArticle;

const useStyles = makeStyles({
  article: {
    marginBottom: "3rem",
  },
  articleDate: {
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
