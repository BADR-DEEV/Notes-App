import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Meaw ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
