import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(search, query);

  return (
    <div>
      <h1>UrlParameterです。</h1>
      <p>パラメータは{id}です</p>
      <p>Queryパラメータは{query.get("name")}です</p>
    </div>
  );
};
