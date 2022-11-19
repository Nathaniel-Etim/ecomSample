import React from "react";
import "./fotter.css";

const Fotter = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="fotter-col-1">
            <h3>Download Our App</h3>
            <p>Downoad App For Both Andriod And IOS mobile.</p>
            <div className="app-logo">
              <img alt="" src="../img/andriod.png" />
              <img alt="" src="../img/app store.png" />
            </div>
          </div>
          <div className="fotter-col-3">
            <h3>communicate with us!</h3>
            <ul>
              <li className="list-it">
                <a href="nathjoeetim@gmail">email@example.com</a>
              </li>
              <li className="list-it">
                <a href="http://yourwebsite.com">yourwebsite.com</a>
              </li>
              <li className="list-it">
                <a href="./">Twitter</a>
              </li>
              <li className="list-it">
                <a href="./">LinkedIn</a>
              </li>
              <li className="list-it">
                <a href="./">Facebook</a>
              </li>
            </ul>
          </div>
          <div className="fotter-col-4">
            <h3> follow us!</h3>
            <ul>
              <li className="list-it">
                <a href="http://facebook/nathjoeetim.com"> Facebook</a>
              </li>
              <li className="list-it">
                <a href="./">Twitter</a>
              </li>
              <li className="list-it">
                <a href="./"> Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copyright">copyright - 2020</p>
      </div>
    </div>
  );
};

export default Fotter;
