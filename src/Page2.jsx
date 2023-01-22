import { Link } from "react-router-dom";
import { UrlParameter } from "./UrlParameter";

export const Page2 = () => {
  return (
    <div>
      <h1>PAGE2</h1>
      <Link to="/page2/999">URL　Parameter</Link>
      <br />
      <Link to="/page2/999?name=hogehoge">Query</Link>
    </div>
  );
};
