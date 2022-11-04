import React from 'react';
import land from "../../images/land.png";
import landStyle from "./landingPage.module.css"

export default function LandingPage() {
    return (
        <section className={landStyle.holdAllLand}>
            <div className={landStyle.holdLand}>
                <div>
                    <h1 className={landStyle.ayeniEmmanuel}>Ayeni Emmanuel Font End Developer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</p>
                    <button className={landStyle.hireMe}>Hire me</button>
                </div>
                <div>
                    <img src={land} alt="land" className={landStyle.landImage} />
                </div>
            </div>
        </section>
    );
}