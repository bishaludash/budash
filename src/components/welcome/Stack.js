import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  stack: {
    paddingLeft: "20px",
  },
  stackList: {
    textDecoration: "underline",
  },
  staclListDetails: {
    margin: "5px 0",
    marginBottom: "2rem",
  },
});

const Stack = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <h2>Stack</h2>
      <p>
        I've put together this "Stack" page that covers every part of my setup.
      </p>

      <h4>Development</h4>
      <ul className={classes.stack}>
        <li className={classes.stackList}>Sublime Text</li>
        <p className={classes.staclListDetails}>
          Most productive text editing environment I've ever used. Light and
          fast, just perfect for my low end device. Packages such as terminus
          can make up for the missing integrated terminal
        </p>

        <li className={classes.stackList}>VS Code</li>
        <p className={classes.staclListDetails}>
          If it was not for my low end device, I would use VS code for most of
          my works. ie memory issues when spinning up docker instances. Love the
          integrated terminal and feature rich extensions.
        </p>

        <li className={classes.stackList}>Jupiter Notebook</li>
        <p className={classes.staclListDetails}>
          Always end up using Jupyter Notebook whenever I have to debug some
          confusing Pandas algorithm. Using PDB debugger in terminal sometimes
          gets annoying as you can't see the datasets clearly, Jupyter to the
          rescue. Also very helpful for testing simple logics quickly.
        </p>

        <li className={classes.stackList}>Browser</li>
        <p className={classes.staclListDetails}>
          Brave is lightweight browser based upon chromium that comes
          preinstalled with ad-block tool. I prefer using this over chrome as
          its lighter and faster. Second to this I use firefox whenever i need
          google meet call or have to test for cross browser checks.
        </p>
      </ul>

      <h4>Frontend</h4>
      <ul className={classes.stack}>
        <li className={classes.stackList}>React.js</li>
        <p className={classes.staclListDetails}>
          Been using React since early 2020 and I love it. Its lightweight, fast
          and has rich third party packages. Comming form Laravels's blade
          template , JSX was confusing at beginning but getting better at this
          every day.
        </p>

        <li className={classes.stackList}>CSS Framework</li>
        <ul className={classes.stack}>
          <li>Material UI</li>
          <p className={classes.staclListDetails}>
            Material UI is my go to css framework whenever working with React
            based projects. It has excellent components for faster and easier
            web development.
          </p>

          <li>Bootstrap</li>
          <p className={classes.staclListDetails}>
            Bootstrap was the first css framework i picked up and used for all
            my projects before switching to react. All of laravel projects use
            bootstrap for frontend.
          </p>
        </ul>
      </ul>

      <h4>Backend</h4>
      <ul className={classes.stack}>
        <li className={classes.stackList}>Web/Api Development</li>
        <p className={classes.staclListDetails}>
          I use ubuntu 18.4 as my local environment and also use docker for some
          projects. All of my web/api projects use laravel as backend. This is
          what i've been using for years and am pretty confident in. However, I
          use flask whenever i do any data analytics projects as this kind of
          projects dont require all the magical features provided by laravel out
          of the box. For data analytics projects I mostly use python's popular
          package Pandas.
        </p>

        <p className={classes.staclListDetails}>
          For server Apache or Nginx any would work, both are easy to work with
          and have lots of article on howtos. Currently this projects uses Nginx
          and SSl certificate by Let's Encrypt.
        </p>

        <li className={classes.stackList}>Database</li>
        <p className={classes.staclListDetails}>
          Been using relational database since day one ie MySQL and postgres. I
          am pretty good with the sql queries, triggers, CTE, stored procedures.
          I am thinking of learning NoSql and using it over some of my light
          weight projects.
        </p>
      </ul>

      <h4>Hosting</h4>
      <ul>
        <li className={classes.stackList}>NestNepal</li>
        <p className={classes.staclListDetails}>
          NestNepals provides pretty good specs VPS as mind bogging price rate.
          Currently using their server to host all my projects, Go check them
          out!
        </p>
        <li className={classes.stackList}>Mail Solution</li>
        <p className={classes.staclListDetails}>
          I use Zoho for email because it provide a free business plan along with TLS standart encryption. 
        </p>
      </ul>
    </Fragment>
  );
};

export default Stack;
