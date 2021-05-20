import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  content: {
    wordSpacing: "2px",
    "& p": {
      marginBottom: "5%",
      [theme.breakpoints.down("xs")]: {
        marginBottom: "10%",
      },
    },
  },
  links: {
    color: "inherit",
    "&:hover": {
      color: "#e57373",
    },
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <p>
        Hi, I'm Bishal! I'm a full-stack engineer with a passion for building
        beautiful things from scratch. I've been building websites and saas
        services since 2017. I love working with React and Laravel more about
        them in{" "}
        {
          <Link to="/stack" className={classes.links}>
            Stack
          </Link>
        }{" "}
        section.
      </p>

      <p>
        Right now I'm working at{" "}
        <a
          href="https://wolfmatrix.com/"
          target="_blank"
          className={classes.links}
          rel="noreferrer"
        >
          Wolfmatrix
        </a>
        , software development company established in Nepal with the mission to
        make every business better by understanding its requirement and
        providing a custom system or technical solution and partnership.
      </p>

      <p>
        I work on challenging projects and I enjoy writing about it. I
        occasionally make myself available for contract work and consultancy.
      </p>
      <p>
        You can reach me at{" "}
        <a href="mailto: me@budash.net" className={classes.links}>
          me@budash.net
        </a>{" "}
      </p>

      <a
        href="https://www.linkedin.com/in/bishal-udash-04a07215a/"
        target="_blank"
        rel="noreferrer"
        className={`${classes.links} mr-2`}
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://github.com/bishaludas"
        target="_blank"
        rel="noreferrer"
        className={classes.links}
      >
        <GitHubIcon />
      </a>
    </div>
  );
};

export default About;
