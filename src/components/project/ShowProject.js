import React, { Fragment, useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import parse from "html-react-parser";

const ShowProject = () => {
  const classes = useStyles();
  const { slug } = useParams();
  const url = `/project/${slug}`;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [project, setProject] = useState({});

  useEffect(() => {
    getProjectBySlug();
    // eslint-disable-next-line
  }, []);

  const getProjectBySlug = async () => {
    let res = await axios.get(url);
    const { data, status, message } = res.data;

    if (!status) {
      setError(message);
      setLoading(false);
      return false;
    }

    setProject(data);
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
        {project.title}
      </Typography>

      {/*Date and tags*/}
      <Typography
        variant="caption"
        display="block"
        style={{ marginBottom: "2rem" }}
      >
        {new Date(project.created_at).toDateString()}
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
          {parse(project.content)}
        </Typography>
      </article>
    </Fragment>
  );
};

export default ShowProject;

const useStyles = makeStyles({
  pills: {
    fontSize: ".9rem",
    margin: "0 5px",
  },
});
