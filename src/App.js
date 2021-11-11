import React from "react";
import { Typography, Container } from "@material-ui/core";
import MUIEditor, { MUIEditorState, toHTML } from "react-mui-draft-wysiwyg";

export default function App() {
  const [editorState, setEditorState] = React.useState(
    MUIEditorState.createEmpty()
  );

  const onChange = (val) => {
    setEditorState(val);
  };

  return (
    <div className="App">
      <Container>
        <Typography variant="h6">Editor padrão Text to HTML </Typography>
        <MUIEditor editorState={editorState} onChange={onChange} />
        <pre>{JSON.stringify(editorState, null, 2)}</pre>
        <pre>
          {JSON.stringify(toHTML(editorState.getCurrentContent()), null, 2)}
        </pre>
      </Container>
    </div>
  );
}
