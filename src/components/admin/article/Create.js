import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import axios from "axios";

const Create = () => {
  const url = '/article';
  const defaultArticle = {
    title: "",
    content: "",
    status: "",
  };
  const [article, setArticle] = useState(defaultArticle);
  const [error, setError] = useState({});

  const addArticle = async (e) => {
    e.preventDefault();
    let res = await axios.get(url, article);
    console.log(res.data);
  };
  return (
    <div>
      <h2>Add Article</h2>

      <form noValidate autoComplete="off" onSubmit={addArticle}>
        <Grid container spacing={3}>
          {/*title*/}
          <Grid item xs={10} sm={8}>
            <TextField
              required
              id="outlined-required"
              name="title"
              fullWidth
              label="Title"
              error={error.title ? true : false}
              helperText={error.title ?? ""}
              value={article.title}
              onChange={(e) =>
                setArticle({ ...article, title: e.target.value })
              }
            />
          </Grid>

          {/*content*/}
          <Grid item xs={10} sm={10}>
            <TextField
              required
              id="outlined-required"
              name="content"
              fullWidth
              label="Content"
              error={error.content ? true : false}
              helperText={error.content ?? ""}
              value={article.content}
              onChange={(e) =>
                setArticle({ ...article, content: e.target.value })
              }
            />
          </Grid>

          {/*Status*/}
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth error={error.status ? true : false}>
              <InputLabel id="demo-simple-select-label" required>
                Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="manager-select"
                name="manager_id"
                value={article.status}
                onChange={(e) =>
                  setArticle({ ...article, status: e.target.value })
                }
              >
                <MenuItem value="publish">Publish</MenuItem>
                <MenuItem value="draft">Draft</MenuItem>
                <MenuItem value="archive">Archive</MenuItem>
                ))}
              </Select>
              <FormHelperText>{error.status ?? ""}</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>

        <Button type="submit" variant="contained" color="primary" size="small">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Create;
