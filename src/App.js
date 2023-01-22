import { useState, useCallback } from "react";

import "./styles.css";

import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/router";

export default function App() {
  console.log("app");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onClickText = (e) => {
    setText(e.target.value);
  };

  const onClickClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onClickOpne = () => {
    setOpen(!open);
  };
  return (
    <BrowserRouter>
      <div className="App">
        {/* <input value={text} onChange={onClickText}></input>
      <br />
      <br />
      <button onClick={onClickOpne}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} /> */}
        {/* <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion /> */}
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">page1</Link>
        <br />
        <Link to="/page2">page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}
