import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1em",
          backgroundColor: "#05053e",
          color: "#fff",
        }}
      >
        <Link to={"/"}>
          <h3>Soy header</h3>
        </Link>
        <h5>#cart</h5>
      </div>
    </>
  );
};

export default Header;
