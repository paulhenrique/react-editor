import React from "react";
import { Typography, Container } from "@material-ui/core";
import MUIEditor, { MUIEditorState, toHTML } from "react-mui-draft-wysiwyg";
import { convertFromHTML, ContentState } from "draft-js";

export default function App() {
  const editorConfig = {};
  const [html, setHTML] = React.useState(
    '<p>TEste de <span style="font-weight: bold;">Bold</span></p>'
  );
  const [editorState, setEditorState] = React.useState(
    MUIEditorState.createEmpty()
  );

  const onChange = (val) => {
    setEditorState(val);
    setHTML(toHTML(val.getCurrentContent()));
  };

  const text = '<p>TEste de <span style="font-weight: bold;">Bold</span></p>';
  React.useEffect(() => {
    const convertedHTML = convertFromHTML(text);
    const convertedHTMLContent = ContentState.createFromBlockArray(
      convertedHTML.contentBlocks,
      convertedHTML.entityMap
    );
    setEditorState(
      MUIEditorState.createWithContent(editorConfig, convertedHTMLContent)
    );
  }, []);

  return (
    <div className="App">
      <Container>
        <Typography variant="h6">Editor padrão Text to HTML </Typography>
        <MUIEditor editorState={editorState} onChange={onChange} />
        <pre>
          {JSON.stringify(toHTML(editorState.getCurrentContent()), null, 2)}
        </pre>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </Container>
    </div>
  );
}
