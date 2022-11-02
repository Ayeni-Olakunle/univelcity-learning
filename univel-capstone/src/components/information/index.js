import React from 'react';
import profileMan from "../../images/profile.jpg";
import infoStyle from "./index.module.css"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineDownload } from 'react-icons/ai';
import { TbCopy } from 'react-icons/tb';

export default function Index(props) {
    return (
        <section>
            <div className={infoStyle.infoMa}>
                <div className={infoStyle.prokIm}>
                    <div className={infoStyle.imgi}>
                        <img src={profileMan} alt='Profile' />
                    </div>
                    <div className={infoStyle.greenDot}></div>
                </div>
                <div className={infoStyle.socialLink}>
                    <h3 className={infoStyle.name}>Ayeni Emmanuel</h3>
                    <p className={infoStyle.positi}>Front End Developer</p>
                    <div className={infoStyle.holdLinks}>
                        <div className={infoStyle.socialIcons}>
                            <a href='https://web.facebook.com/login/?_rdc=1&_rdr' target='_blank' rel="noreferrer">
                                <FaFacebookF className={infoStyle.soIcons} />
                            </a>
                        </div>
                        <div className={infoStyle.socialIcons}>
                            <a href='https://twitter.com/' target='_blank' rel="noreferrer">
                                <FaTwitter className={infoStyle.soIcons} />
                            </a>
                        </div>
                        <div className={infoStyle.socialIcons}>
                            <a href='https://linkedin.com/' target='_blank' rel="noreferrer">
                                <FaLinkedinIn className={infoStyle.soIcons} />
                            </a>
                        </div>
                        <div className={infoStyle.socialIcons}>
                            <a href='https://web.instagram.com/' target='_blank' rel="noreferrer">
                                <FaInstagram className={infoStyle.soIcons} />
                            </a>
                        </div>
                        <div className={infoStyle.socialIcons}>
                            <a href='https://web.facebook.com/login/?_rdc=1&_rdr' target='_blank' rel="noreferrer">
                                <FaWhatsapp className={infoStyle.soIcons} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={infoStyle.AllSkills}>
                    <div className={infoStyle.holdLoco}>
                        <div className={infoStyle.loco}>
                            <span className={infoStyle.textLoco}>Nationality:</span>
                            <span className={infoStyle.textLoco2}>Nigeria</span>
                        </div>
                        <div className={infoStyle.loco}>
                            <span className={infoStyle.textLoco}>Freelancer:</span>
                            <span className={infoStyle.textLoco2}>Avilable</span>
                        </div>
                        <div className={infoStyle.loco}>
                            <span className={infoStyle.textLoco}>Address::</span>
                            <span className={infoStyle.textLoco2}>Lagos, Nigeria</span>
                        </div>
                    </div>
                    <div className={infoStyle.holdLoco}>
                        <h4 className={infoStyle.lang}>Languages</h4>
                        <div className={infoStyle.holdLangText}>
                            <div className={infoStyle.langText}>
                                <span>English</span>
                                <span>90%</span>
                            </div>
                            <div className={infoStyle.holdProgress}>
                                <div className={infoStyle.progress}></div>
                            </div>
                        </div>
                        <div className={infoStyle.holdLangText}>
                            <div className={infoStyle.langText}>
                                <span>Yoruba</span>
                                <span>100%</span>
                            </div>
                            <div className={infoStyle.holdProgress}>
                                <div className={infoStyle.progressY}></div>
                            </div>
                        </div>
                        <div className={infoStyle.holdLangText}>
                            <div className={infoStyle.langText}>
                                <span>Igbo</span>
                                <span>40%</span>
                            </div>
                            <div className={infoStyle.holdProgress}>
                                <div className={infoStyle.progressI}></div>
                            </div>
                        </div>
                        <div className={infoStyle.holdLangText}>
                            <div className={infoStyle.langText}>
                                <span>French</span>
                                <span>20%</span>
                            </div>
                            <div className={infoStyle.holdProgress}>
                                <div className={infoStyle.progressF}></div>
                            </div>
                        </div>

                    </div>

                    <div className={infoStyle.holdLoco}>
                        <h4 className={infoStyle.lang}>Skills</h4>
                        <div className={infoStyle.holdLangText}>
                            <div className={infoStyle.langText}>
                                <span>HTML</span>
                                <span>90%</span>
                            </div>
                            <div className={infoStyle.holdProgress}>
                                <div className={infoStyle.progress}></div>
                            </div>
                        </div>
                        <div className={infoStyle.holdLangText}>
                            <div className={infoStyle.langText}>
                                <span>CSS</span>
                                <span>80%</span>
                            </div>
                            <div className={infoStyle.holdProgress}>
                                <div className={infoStyle.progressCSS}></div>
                            </div>
                        </div>
                        <div className={infoStyle.holdLangText}>
                            <div className={infoStyle.langText}>
                                <span>Javascript</span>
                                <span>80%</span>
                            </div>
                            <div className={infoStyle.holdProgress}>
                                <div className={infoStyle.progressCSS}></div>
                            </div>
                        </div>
                        <div className={infoStyle.holdLangText}>
                            <div className={infoStyle.langText}>
                                <span>React</span>
                                <span>70%</span>
                            </div>
                            <div className={infoStyle.holdProgress}>
                                <div className={infoStyle.progressREACT}></div>
                            </div>
                        </div>
                    </div>
                    <div className={infoStyle.holdLoco}>
                        <h4 className={infoStyle.lang}>Extra Skills</h4>
                        <div className={infoStyle.holdLangText}>
                            <div className={infoStyle.langTextExtra}>
                                <TbCopy className={infoStyle.langTextExtraIcon} />
                                <span>Bootstrap, Material UI</span>
                            </div>
                            <div className={infoStyle.langTextExtra}>
                                <TbCopy className={infoStyle.langTextExtraIcon} />
                                <span>Sass</span>
                            </div>
                            <div className={infoStyle.langTextExtra}>
                                <TbCopy className={infoStyle.langTextExtraIcon} />
                                <span>Gulp, Webpack</span>
                            </div>
                            <div className={infoStyle.langTextExtra}>
                                <TbCopy className={infoStyle.langTextExtraIcon} />
                                <span>Git Knowldge</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>

                        </div>

                    </div>
                </div>

                <div className={infoStyle.holdButin}>
                    <button>Downlaod CV <AiOutlineDownload /></button>
                </div>
            </div>
        </section >
    );
}