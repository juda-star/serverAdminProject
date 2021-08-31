import React from "react";
import "./Training.css";

export default function Training() {
  return (
    <div className="mainCard">
      <div className="title">
        <h2>Training program</h2>
      </div>
      <div className="cards">
        <div class="card">
          <img
            src="https://www.researchgate.net/profile/Jay-Hoffman-4/publication/5349206/figure/tbl1/AS:669702279925789@1536680874731/12-week-Resistance-Training-Program.png"
            alt="Avatar"
            style={{ height: "100%", width: "100%" }}
          />
          <div class="container">
            <h4>
              <b>A</b>
            </h4>
           
          </div>
        </div>

        <div class="card">
          <img
            src="https://www.researchgate.net/profile/Abdurrahman-Boyaci/publication/322599785/figure/tbl1/AS:631615315275822@1527600234974/8-Week-Core-Area-Training-Program.png"
            alt="Avatar"
            style={{ height: "100%", width: "100%" }}
          />
          <div class="container">
            <h4>
              <b>AB</b>
            </h4>
           
          </div>
        </div>

        <div class="card">
          <img
            src="https://www.researchgate.net/profile/Damir-Sekulic/publication/321833384/figure/tbl1/AS:613999624343556@1523400326140/Plyometric-training-program.png"
            alt="Avatar"
            style={{ height: "100%", width: "100%" }}
          />
          <div class="container">
            <h4>
              <b>ABC</b>
            </h4>
          
          </div>
        </div>
      </div>
    </div>
  );
}
