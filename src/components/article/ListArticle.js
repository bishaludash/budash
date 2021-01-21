import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Typography from "@material-ui/core/Typography";

const ListArticle = () => {
  const classes = useStyles();
  return (
    <Fragment>
      {/*Article start*/}
      <div className={classes.article}>
        <div className={classes.articleDate}>
          11 JANUARY 2021 / POSTGRESQL, PERFORMANCE, SQL{" "}
        </div>

        <Link to="/articles/article-slug" className={classes.links}>
          <Typography variant="h5" color="primary">
            Re-Introducing Hash Indexes in PostgreSQL
          </Typography>
        </Link>

        <Typography variant="body2" gutterBottom>
          There is a type of index you are probably not using, and may have
          never even heard of. It is wildly unpopular, and until a few
          PostgreSQL versions ago it was highly discouraged and borderline
          unusable, but under some circumstances it can out-perform even a
          B-Tree index.
        </Typography>

        <Link to="/articles/article-slug" className={classes.links}>
          <Typography gutterBottom color="primary">
            Read this article
            <ArrowRightAltIcon
              variant="overline"
              style={{ marginBottom: "-10px", marginLeft: "10px" }}
            />
          </Typography>
        </Link>
      </div>
      {/*Article End*/}
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
    // fontWeight: "600",
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
