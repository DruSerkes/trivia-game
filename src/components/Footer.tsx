import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="Footer">
      <p>
        <a
          data-testid="footer"
          href="https://github.com/druserkes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dru Serkes &copy;{year}
        </a>
      </p>
    </footer>
  );
};
