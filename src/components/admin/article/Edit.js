import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import axios from "axios";
import { getValidationErrors } from "../../../utils/FormValidator";
import SimpleSnackbar from "../../../utils/SimpleSnackbar";

import {useParams} from 'react-router-dom';

const Edit = () => {
  const {slug} = useParams();
  let url = `/article/${slug}`;
  const defaultArticle = {
    title: "",
    content: "",
    status: "",
  };

  const [article, setArticle] = useState(defaultArticle);
  const [error, setError] = useState({});
  const [toast, setToast] = useState(false)

  useEffect(() => {
    getArticle();
    // eslint-disable-next-line
  }, []);

  const getArticle = async () => {
    let res = await axios.get(url);
    setArticle(res.data);
  };

  const addArticle = async (e) => {
    e.preventDefault();
    let res = await axios.post(url, article);
    const { data } = res;

    if (!data.status) {
      getValidationErrors(data.errors, setError);
      return false;
    }

    setError({});
    setArticle(defaultArticle);
    setToast(data.message);
  };
  return (
    <div>
      <h2>Edit Article</h2>
      <SimpleSnackbar toast={toast} setToast={setToast}/>
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

        <Button type="submit" variant="contained" className="mt-3" color="primary" size="small">
          Update
        </Button>
      </form>
    </div>
  );
};

export default Edit;
