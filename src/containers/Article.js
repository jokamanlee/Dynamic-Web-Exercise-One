import React from "react";

import { useParams } from "react-router-dom";

function Article() {
  let { id } = useParams();

  console.log("id", id);
  return (
    <section>
      <h1>Article</h1>
    </section>
  );
}

export default Article;
