import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

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
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <p>
        Hi, I'm Bishal! I'm a full-stack engineer with a passion for building
        beautiful things from scratch. I've been building websites and saas
        services since 2017.
      </p>

      <p>
        Right now I'm working at{" "}
        <a
          href="https://www.mobwizards.com/"
          target="_blank"
          className={classes.links}
          rel="noreferrer"
        >
          Mobwizards
        </a>
        , a digital marketing company where I'm remodeling the old backoffice
        using React.js and Laravel. The next phase is to make use of data
        analytics to provide results that help in making better decision to the
        company.
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
