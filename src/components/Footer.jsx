import React from "react";

function Footer() {
  function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
  }

  return (
    <div className="footer">
      <div className="popup about" id="popup-1">
        <div class="overlay"></div>
        <div className="content">
          <div className="close-btn" onClick={togglePopup}>
            &times;
          </div>
          <h1>About</h1>
          <p> This is a simple notes app to demonstrate my React knowledge.</p>
          <p>
            {" "}
            <a
              className="transition duration-500 ease-in-out border-b border-pink-600 font-medium text-pink-600 hover:text-pink-500"
              href="https://github.com/tanmichael1/Notes-App"
              target="_blank"
              rel="noreferrer"
            >
              View the code on GitHub &rarr;
            </a>
          </p>
        </div>
      </div>
      <p
        id="aboutButton"
        style={{ textDecoration: "underline" }}
        onClick={togglePopup}
      >
        {" "}
        About
      </p>
    </div>
  );
}

export default Footer;
