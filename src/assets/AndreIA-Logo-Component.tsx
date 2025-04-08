import React from "react";
import { Link } from "react-router";
import Logo_URL from "./logos/1 - LOGO_ÍCONE - sem fundo.png";

function AndreIA_Logo() {
  return (
    <Link to="/" replace className="w-full h-full">
      <img src={Logo_URL} alt="" className="size-full" />
    </Link>
  );
}

export default AndreIA_Logo;
