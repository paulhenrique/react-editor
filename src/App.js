import React from "react";
import { Typography, Container } from "@material-ui/core";
import TextEditor from "./TextEditor";

export default function App() {
  const [htmlText, setHTMLText] = React.useState("");

  return (
    <div className="App">
      <Container>
        <Typography variant="h6">Editor padrão Text to HTML </Typography>
        <TextEditor value={htmlText} onChange={setHTMLText} />
        <pre>{JSON.stringify(htmlText, null, 2)}</pre>
        <div dangerouslySetInnerHTML={{ __html: htmlText }}></div>
      </Container>
    </div>
  );
}
