import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
import RichText from "../../../utils/RichText";
import SimpleSnackbar from "../../../utils/SimpleSnackbar";
import CircularProgress from "@material-ui/core/CircularProgress";

const Edit = () => {
  const { slug } = useParams();
  let url = `/article/${slug}`;
  const defaultArticle = {
    title: "",
    summary:"",
    content: "",
    status: "",
  };

  const [article, setArticle] = useState(defaultArticle);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(false);
  const [error, setError] = useState({});
  const [toast, setToast] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    getArticle();
    // eslint-disable-next-line
  }, []);

  const getArticle = async () => {
    let res = await axios.get(url);
    const { data, status, message } = res.data;

    if (!status) {
      setMessage(message);
    }

    setArticle(data);
    setLoading(false);
  };

  const updateArticle = async (e) => {
    e.preventDefault();
    setProgress(true);
    if (article.content.replace(/<(.|\n)*?>/g, "").trim().length === 0) {
      setError({ ...error, content: "Content cannot be empty" });
      setProgress(false);
      return false;
    }

    let res = await axios.put(url, article);
    const { data } = res;

    if (!data.status) {
      getValidationErrors(data.errors, setError);
      setProgress(false);
      return false;
    }

    setError({});
    setProgress(false);
    setToast(data.message);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (message) {
    return <div>{message}</div>;
  }

  return (
    <div>
      <h2>Edit Article</h2>
      <SimpleSnackbar toast={toast} setToast={setToast} />
      <form noValidate autoComplete="off" onSubmit={updateArticle}>
        <Grid container spacing={3}>
          {/*title*/}
          <Grid item xs={12}>
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

          <Grid item xs={12}>
            <TextField
              required
              id="outlined-required"
              name="summary"
              fullWidth
              label="Summary"
              error={error.summary ? true : false}
              helperText={error.summary ?? ""}
              value={article.summary ?? ""}
              onChange={(e) =>
                setArticle({ ...article, summary: e.target.value })
              }
            />
          </Grid>

          {/*content*/}
          <Grid item xs={12}>
            <InputLabel
              id="rich-text"
              className="mb-2"
              error={error.content ? true : false}
            >
              Content *
            </InputLabel>
            <FormHelperText error>{error.content ?? ""}</FormHelperText>
            <RichText value={article} setValue={setArticle} />
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

        <Button
          type="submit"
          variant="contained"
          className="mt-3"
          color="primary"
          size="small"
        >
          Update {progress ? <CircularProgress className="progress" /> : ""}
        </Button>
      </form>
    </div>
  );
};

export default Edit;
