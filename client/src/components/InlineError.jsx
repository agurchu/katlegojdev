import React from "react";

export default function InlineError({ error }) {
  return <p className="my-1 text-sm text-danger font-medium">{error}</p>;
}
