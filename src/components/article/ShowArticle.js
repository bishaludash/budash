import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";

const ShowArticle = () => {
  const classes = useStyles();
  return (
    <Fragment>
      {/*title*/}
      <Typography variant="h5" color="primary">
        Re-Introducing Hash Indexes in PostgreSQL
      </Typography>

      {/*Date and tags*/}
      <Typography
        variant="caption"
        display="block"
        style={{ marginBottom: "2rem" }}
      >
        11 JANUARY 2021 /
        {["POSTGRESQL", "PERFORMANCE", "SQL"].map((item) => (
          <Chip size ="small" label={item} color="secondary" className={classes.pills}/>
        ))}
      </Typography>

      {/*content*/}
      <Typography variant="body2" gutterBottom>
        There is a type of index you are probably not using, and may have never
        even heard of. It is wildly unpopular, and until a few PostgreSQL
        versions ago it was highly discouraged and borderline unusable, but
        under some circumstances it can out-perform even a B-Tree index.
      </Typography>
    </Fragment>
  );
};

export default ShowArticle;

const useStyles = makeStyles({
  pills:{
    fontSize : '.9rem',
    margin : '0 5px'
  }
})
