import React, {Fragment, useRef} from 'react';
import {Button} from 'react-bootstrap';
// styles
import "./app.css"
// components
import Footer from "./components/Footer"

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

function App() {

    const decreeRef = useRef(null);
    const garmentRef = useRef(null);
    const executeRef = () => scrollToRef(decreeRef)
    const executeRefTwo = () => scrollToRef(garmentRef);

    return (
        <Fragment>
            <section className="hero">
                <div className="app"></div>
                <div className="royal-decree-btn">
                    <Button onClick={executeRef} variant="outline-dark">Learn more</Button>
                </div>
            </section>
            <section ref={decreeRef} className="announcements">
                <div>
                    <h1 className="royal-decree">By Royal Decree</h1>
                </div>
                <div>
                    <p className="royal-text">
                        Summer of 2022, we will re-introduce made-to-order suits, jackets, and trousers
                        in tandem with our shirt subscription service, Cuff & Collar.
                        <br/><br/>
                        At this time, access to our entry level membership is only by way of invitation
                        from an active founding member or directly from a member of our team. For more
                        information, please download our pitch
                        <a
                            href="general.pdf"
                            style={{
                            padding: '0px 2.5px',
                            textDecoration: 'none',
                            color: '#ededed'
                        }}
                            download>here.</a>

                    </p>

                </div>
                <div>
                    <Button onClick={executeRefTwo} variant="outline-light">Garment Program</Button>
                </div>
            </section>
            <section ref={garmentRef} className="cuffsncollars">
                <div className="cnc-card">
                    <div
                        style={{
                        padding: '10px 50px'
                    }}>
                        <h1
                            style={{
                            color: '#9a1e28',
                            textTransform: 'uppercase'
                        }}>The Royal Guard Shop</h1>
                    </div>
                    <div>
                        <p>Something for everyone. Launching Fall of 2022</p>
                    </div>
                    <div style={{padding: '50px 0px'}}>
                        <Button onClick={() => alert('Ooops, theroyalguard.shop is under construction. Please check back in a week.')} variant="dark">theroyalgaurd.shop</Button>
                    </div>
                </div>

            </section>
            <Footer/>
        </Fragment>
    );
}

export default App;
