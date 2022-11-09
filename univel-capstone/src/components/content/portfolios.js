import React, { useState } from 'react';
import porfolioStyle from "./portfolios.module.css"
import WebApp from './webapp';
import MoblieApp from './mobileApp';
import BackEnd from './backEnd';

export default function Portfolios(props) {
    const [current, setCurrent] = useState("All Categories")
    const change = (index) => {
        setCurrent(index)
    }
    return (
        <section>
            <div>
                <h1 className={porfolioStyle.headOne}>Portfolios</h1>
                <div className={porfolioStyle.holdHeaderPTage}>
                    <p className={porfolioStyle.headerPTage}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
                </div>
                <div className={porfolioStyle.holdUnorderedList}>
                    <ul className={porfolioStyle.unorderedList}>
                        <li className={current === "All Categories" ? porfolioStyle.active : null} onClick={() => {
                            change("All Categories")
                        }} >All Categories</li>
                        <li className={current === "Front End Projects" ? porfolioStyle.active : null} onClick={() => {
                            change("Front End Projects")
                        }}>Front End Project</li>
                        <li className={current === "Mobile Application Projects" ? porfolioStyle.active : null} onClick={() => {
                            change("Mobile Application Projects")
                        }}>Mobile Application Project</li>
                        <li className={current === "Back End Projects" ? porfolioStyle.active : null} onClick={() => {
                            change("Back End Projects")
                        }}>Back End Project</li>
                    </ul>
                </div>
                <div className={porfolioStyle.firstHold}>
                    <h1 className={porfolioStyle.clickType}>{current}</h1>
                    {current === "All Categories" ? <div><WebApp />  <MoblieApp /> <BackEnd /></div> : null}
                    {current === "Front End Projects" ? <WebApp /> : null}
                    {current === "Mobile Application Projects" ? <MoblieApp /> : null}
                    {current === "Back End Projects" ? <BackEnd /> : null}
                </div>
            </div>
        </section>
    );
}