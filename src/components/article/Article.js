import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const Article = () => {
  const classes = useStyles();
  return (
    <Fragment>
      {/*Article start*/}
      <div className={classes.article}>
        <div className={classes.articleDate}>
          11 JANUARY 2021 / POSTGRESQL, PERFORMANCE, SQL{" "}
        </div>

        <Link to="/articles" className={classes.links}>
          <h4 className={classes.articleTitle}>
            Re-Introducing Hash Indexes in PostgreSQL
          </h4>
        </Link>

        <p className={classes.articleBody}>
          There is a type of index you are probably not using, and may have
          never even heard of. It is wildly unpopular, and until a few
          PostgreSQL versions ago it was highly discouraged and borderline
          unusable, but under some circumstances it can out-perform even a
          B-Tree index.
        </p>

        <div className={classes.articleButton}>
          <Link to="/articles" className={classes.links}>
            Read this article{" "}
            <ArrowRightAltIcon style={{ marginBottom: "-5px" }} />
          </Link>
        </div>
      </div>
      {/*Article End*/}

      <div className={classes.article}>
        <div className={classes.articleDate}>
          11 JANUARY 2021 / POSTGRESQL, PERFORMANCE, SQL{" "}
        </div>

        <Link to="/" className={classes.links}>
          <h4 className={classes.articleTitle}>
            Re-Introducing Hash Indexes in PostgreSQL
          </h4>
        </Link>

        <p className={classes.articleBody}>
          There is a type of index you are probably not using, and may have
          never even heard of. It is wildly unpopular, and until a few
          PostgreSQL versions ago it was highly discouraged and borderline
          unusable, but under some circumstances it can out-perform even a
          B-Tree index.
        </p>

        <div className={classes.articleButton}>
          <Link to="/article" className={classes.links}>
            Read this article{" "}
            <ArrowRightAltIcon style={{ marginBottom: "-5px" }} />
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Article;

const useStyles = makeStyles({
  article: {
    marginBottom: "3rem",
  },
  articleDate: {
    fontSize: "15px",
    // fontWeight: "600",
  },
  articleTitle: {
    margin: "5px 0",
    fontSize: "x-large",
  },
  articleBody: {
    margin: "0",
  },
  articleButton: {
    margin: "10px 0",
  },
  links: {
    color: "#000",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
      color: "#9c27b0",
    },
  },
});
