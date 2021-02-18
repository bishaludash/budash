import React from "react";
import TextField from "@material-ui/core/TextField";

const Create = () => {
  return (
    <div>
      <h2>Add Article</h2>

      <form noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" />
      </form>
    </div>
  );
};

export default Create;
