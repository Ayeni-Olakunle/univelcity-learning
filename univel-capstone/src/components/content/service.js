import React from 'react';
import serviceStyle from "./service.module.css"
import { FaLaptopCode } from 'react-icons/fa';

export default function Service() {
    return (
        <section>
            <div className={serviceStyle.holdCard}>
                <div className={serviceStyle.flipCard}>
                    <div className={serviceStyle.flipCardInner}>
                        <div className={serviceStyle.flipCardFront}>
                            <img src="https://portfo.jstemplate.net/wp-content/uploads/2021/02/Web-Development.png" alt="Avatar" style={{ width: "150px", height: "150px" }} />
                            <h3>Front End Developer</h3>
                            <p>React.js, Vue.js</p>
                        </div>
                        <div className={serviceStyle.flipCardBack}>
                            <h1>Front End Developer</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
                <div className={serviceStyle.flipCard}>
                    <div className={serviceStyle.flipCardInner}>
                        <div className={serviceStyle.flipCardFront}>
                            <img src="https://portfo.jstemplate.net/wp-content/uploads/2021/02/UI-UX-Design.png" alt="Avatar" style={{ width: "150px", height: "150px" }} />
                            <h3>UI/UX Designer</h3>
                            <p>Adobe XD, Figma</p>
                        </div>
                        <div className={serviceStyle.flipCardBack}>
                            <h1>UI/UX Designer</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
                <div className={serviceStyle.flipCard}>
                    <div className={serviceStyle.flipCardInner}>
                        <div className={serviceStyle.flipCardFront}>
                            <FaLaptopCode className={serviceStyle.backEndIcon} />
                            <h3>Back End Development</h3>
                            <p>Node.js, Django</p>
                        </div>
                        <div className={serviceStyle.flipCardBack}>
                            <h1>Back End Development</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}