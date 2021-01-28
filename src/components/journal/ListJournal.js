
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const ListJournal = () => {
    const classes = useStyles();
  return (
    <Fragment>
      {/*Article start*/}
      <div className={classes.article}>
        <div className={classes.articleDate}>
          11 JANUARY 2021
        </div>

        <Link to="/journal/article-slug" className={classes.links}>
          <Typography variant="h5" color="primary">
            2020 Year in review 
          </Typography>
        </Link>

      </div>
      {/*Article End*/}
    </Fragment>
  );
}

export default ListJournal

const useStyles = makeStyles({
  article: {
    marginBottom: "3rem",
  },
  articleDate: {
    fontSize: "15px",
    fontWeight: "600",
    color:"#676767"
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
