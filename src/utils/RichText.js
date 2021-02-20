import React from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const  modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      [{ 'align': [] }],
      [{ 'color': [] }, { 'background': [] }],
      ['link', 'image', 'video'],
      ['blockquote', 'code-block'],
      ['clean']
    ],
  }

const  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'align',
    'color','background',
    'link', 'image','video',
    'blockquote', 'code-block',
  ];

const RichText = ({value, setValue}) => {
  return (
    <div>
      <ReactQuill
        theme="snow"
        value={value.content}
        name="content"
        modules={modules}
        formats={formats}
        onChange={(e) =>{
          setValue({ ...value, content: e })
        }
        }
      />
    </div>
  )
}

export default RichText