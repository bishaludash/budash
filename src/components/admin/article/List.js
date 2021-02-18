import React from "react";
import Button from "@material-ui/core/Button";
import { Link, useRouteMatch } from "react-router-dom";

const List = () => {
  const match = useRouteMatch();
  return (
    <div>

      {/*Add article link*/}
      <div className="mb-3">
        <Link to={`${match.path}/create`} className="td-none">
          <Button variant="contained" size="small" color="primary">
            Create Article
          </Button>
        </Link>
      </div>


      {/*Material table list*/}
      lists
    </div>
  );
};

export default List;
