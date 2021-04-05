import React, { Fragment, useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import parse from "html-react-parser";

const ShowJournal = () => {
  const classes = useStyles();
  const { slug } = useParams();
  const url = `/journal/${slug}`;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [journal, setJournal] = useState({});

  useEffect(() => {
    getJournalBySlug();
    // eslint-disable-next-line
  }, []);

  const getJournalBySlug = async () => {
    let res = await axios.get(url);
    const { data, status, message } = res.data;

    if (!status) {
      setError(message);
      setLoading(false);
      return false;
    }

    setJournal(data);
    setLoading(false);
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
      {/*title*/}
      <Typography variant="h5" color="primary">
        {journal.title}
      </Typography>

      {/*Date and tags*/}
      <Typography
        variant="caption"
        display="block"
        style={{ marginBottom: "2rem" }}
      >
        {new Date(journal.created_at).toDateString()}
        {[].map((item, key) => (
          <Chip
            key={key}
            size="small"
            label={item}
            color="secondary"
            className={classes.pills}
          />
        ))}
      </Typography>

      {/*content*/}
      <article>
        <Typography variant="body2" component="div" gutterBottom>
          {parse(journal.content)}
        </Typography>
      </article>
    </Fragment>
  );
};

export default ShowJournal;

const useStyles = makeStyles({
  pills: {
    fontSize: ".9rem",
    margin: "0 5px",
  },
});
