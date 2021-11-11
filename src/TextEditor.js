import React from "react";
import PropTypes from "prop-types";
import MUIEditor, { MUIEditorState, toHTML } from "react-mui-draft-wysiwyg";
import { convertFromHTML, ContentState } from "draft-js";

const TextEditor = ({ value, onChange }) => {
  const editorConfig = {};

  const [editorState, setEditorState] = React.useState(
    MUIEditorState.createEmpty()
  );

  const handleChangeEditor = (val) => {
    setEditorState(val);
    onChange(toHTML(val.getCurrentContent()));
  };

  React.useEffect(() => {
    const convertedHTML = convertFromHTML(value);
    const convertedHTMLContent = ContentState.createFromBlockArray(
      convertedHTML.contentBlocks,
      convertedHTML.entityMap
    );
    setEditorState(
      MUIEditorState.createWithContent(editorConfig, convertedHTMLContent)
    );
  }, []);

  return <MUIEditor editorState={editorState} onChange={handleChangeEditor} />;
};
TextEditor.PropTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextEditor;
