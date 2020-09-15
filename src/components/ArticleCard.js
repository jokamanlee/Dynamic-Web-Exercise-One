import React from "react";

function ArticleCard({ articleData }) {
  console.log("articleData", articleData);
  return (
    <div>
      <h2>{articleData.title}</h2>
    </div>
  );
}

export default ArticleCard;
