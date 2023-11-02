import React from "react";
import { Link } from "react-router-dom";

function Detect() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">This is the Next Page</h1>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go back to Homepage
      </Link>
    </div>
  );
}

export default Detect;
