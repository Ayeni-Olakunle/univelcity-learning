import React, { useState, useEffect } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaFileCode } from 'react-icons/fa';
import { GiGraduateCap, GiFeather } from 'react-icons/gi';
import { RiMessage2Line } from 'react-icons/ri';
import { MdCardTravel } from 'react-icons/md';
import { Link } from 'react-router-dom';
import navStyle from "./navigate.module.css";

export default function Navigate(props) {
    const [currentPath, setCurrentPath] = useState("")
    const ulrChange = () => {
        setCurrentPath(window.location.pathname);
    }
    useEffect(() => {
        ulrChange()
    })
    return (
        <section>
            <div>
                <ul className={navStyle.holdList}>
                    <li onClick={ulrChange}>
                        <Link to="/">
                            <AiFillHome className={currentPath === "/" ? navStyle.icons2 : navStyle.icons} />
                        </Link>
                    </li>
                    <li onClick={ulrChange}>
                        <Link to="/services">
                            <FaFileCode className={currentPath === "/services" ? navStyle.icons2 : navStyle.icons} />
                        </Link>
                    </li>
                    <li onClick={ulrChange}>
                        <Link to="/education">
                            <GiGraduateCap className={currentPath === "/education" ? navStyle.icons2 : navStyle.icons} />
                        </Link>
                    </li>
                    <li onClick={ulrChange}>
                        <Link to="/portfolios">
                            <MdCardTravel className={currentPath === "/portfolios" ? navStyle.icons2 : navStyle.icons} />
                        </Link>
                    </li>
                    <li onClick={ulrChange}>
                        <Link to="/blog">
                            <GiFeather className={currentPath === "/blog" ? navStyle.icons2 : navStyle.icons} />
                        </Link>
                    </li>
                    <li onClick={ulrChange}>
                        <Link to="/contact">
                            <RiMessage2Line className={currentPath === "/contact" ? navStyle.icons2 : navStyle.icons} />
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
}