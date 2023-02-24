import React, { Fragment, useRef } from "react";
import { Button } from "react-bootstrap";
// styles
import "./app.css";
// components
import Footer from "./components/Footer";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function App() {
  const decreeRef = useRef(null);
  const garmentRef = useRef(null);
  const executeRef = () => scrollToRef(decreeRef);
  const executeRefTwo = () => scrollToRef(garmentRef);

  return (
    <Fragment>
      <section className="hero">
        <div className="app"></div>
        <div className="royal-decree-btn">
          <Button onClick={executeRef} variant="outline-dark">
            Learn more
          </Button>
        </div>
      </section>
      <section ref={decreeRef} className="announcements">
        <div>
          <h1 className="royal-decree">By Royal Decree</h1>
        </div>
        <div>
          <p className="royal-text">
            Summer of 2022, we will re-introduce made-to-order suits, jackets,
            and trousers in tandem with our shirt subscription service, Cuff &
            Collar.
            <br />
            <br />
            At this time, access to our entry level membership is only by way of
            invitation from an active founding member or directly from a member
            of our team. For more information, please download our pitch
            <a
              href="general.pdf"
              style={{
                padding: "0px 2.5px",
                textDecoration: "none",
                color: "#ededed",
              }}
              download
            >
              here.
            </a>
          </p>
        </div>
        <div>
          <Button onClick={executeRefTwo} variant="outline-light">
            Garment Program
          </Button>
        </div>
      </section>
      <section ref={garmentRef} className="cuffsncollars">
        <div className="cnc-card">
          <div
            style={{
              padding: "10px 50px",
            }}
          >
            <h1
              style={{
                color: "#9a1e28",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              The Royal Guard Mobile
            </h1>
          </div>
          <div
            style={{
              padding: "10px 50px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: "1.25rem",
              }}
            >
              Something for everyone. Launching Spring of 2023
            </p>
          </div>
          <div style={{ padding: "50px 0px" }}>
            <Button
              variant="dark"
              onClick={() => {
                window.location.href =
                  "https://apps.apple.com/us/app/cuff-and-collar/id1561239176";
              }}
            >
              Download The App
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}

export default App;
