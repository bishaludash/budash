import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import {Link} from 'react-router-dom';

const SetBreadCrumbs = () => {
  let url = window.location.pathname;
  let pathname = url.split("/");

  // remove the first item in arrary
  let [, ...crumb] = pathname;

  // Remove slugs from bread crumbs
  if (url.includes("_")) {
    const itemlength = crumb.length;
    crumb = crumb.slice(0,itemlength-1);
  }
  
  return (
    <div className="mb-2">
      <Breadcrumbs aria-label="breadcrumb">
        {crumb.map((item, key) => (
          <Link key={key} style={crumbStyle} to={getUrl(key, crumb)}>
            {item}
          </Link>
        ))}
        
      </Breadcrumbs>
    </div>
  );
};

export default SetBreadCrumbs;

const crumbStyle={
  textTransform: "capitalize",
  color:"inherit"
}

const getUrl = (key, crumb) =>{
  let path = crumb.slice(0,key+1);
  return `/${path.join('/')}`;
}