import React, { Fragment, useState, useEffect } from "react";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Pagination from "@material-ui/lab/Pagination";
import Chip from "@material-ui/core/Chip";

const ListArticle = () => {
  const classes = useStyles();
  const [url, setUrl] = useState("/article");
  const match = useRouteMatch();
  const location = useLocation();
  const [articles, setArticles] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  useEffect(() => {
    getArticles(url);
    // eslint-disable-next-line
  }, [url]);
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

  const showTags = (tags) => {
    if (!tags || tags === null) {
      return null;
    }

    return tags.split(",").map((item, key) => (
      <Link
        to={`${match.path}?tag=${item.trim()}`}
        key={key}
        className={classes.links}
      >
        <Chip
          className={`${classes.chipStyle} ml-1`}
          label={item.trim()}
          size="small"
          onClick={(e) => setUrl(`/article?tag=${item.trim()}`)}
        />
      </Link>
    ));
  };

  const clearTagsFilter = () => {
    return (
      <Link to={"/articles"} className={classes.links}>
        <Chip
          className={`${classes.chipStyle} mb-3`}
          label="Clear Filter"
          onClick={(e) => setUrl(`/article`)}
        />
      </Link>
    );
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
      {/* Clear tag filter */}
      {location.search !== "" ? clearTagsFilter() : null}

      {/*Article start*/}
      {articles.data.map((item, key) => (
        <div className={classes.article} key={key}>
          <div className={classes.articleDate}>
            {new Date(item.created_at).toDateString()}
            <span className="ml-3">
              {/* {item.tags.split(",").map((item, key) => (
                <Link
                  to={`${match.path}?tag=${item}`}
                  key={key}
                  className={classes.links}
                >
                  <Chip
                    className={`${classes.chipStyle} ml-1`}
                    label={item}
                    size="small"
                  />
                </Link>
              ))} */}

              {showTags(item.tags)}
            </span>
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
  chipStyle: {
    fontSize: "15px",
    fontWeight: "normal",
    "& :hover": {
      color: "#000",
      cursor: "pointer",
    },
  },
});
