import React from "react";

export default function SectionHeading({ title, body }) {
  return (
    <div className="contactMe__heading">
      <h1>{title}</h1>
      <p>{body}</p>
      <div></div>
    </div>
  );
}
