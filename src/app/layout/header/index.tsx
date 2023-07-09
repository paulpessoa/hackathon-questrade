"use client"

import "./style.scss";
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import Button from '@mui/material/Button';


const Header = () => {
    const [classOn, setClassOn] = useState(false);

    return (
        <header>
            <div className="container">
                <a href="/" className="logo-link">
                    <Image width={200} height={200} src="/images/logo.png" className="logo-image" alt="Logo LionLand" />
                    <div className="logo-texts">
                        <h2 className="text-brand">LionLand</h2>
                        <span className="text-slogan">Empower Your Dreams</span>
                    </div>
                </a>
                <div
                    className={classOn ? "menu-section on" : "menu-section"}
                    onClick={() => setClassOn(!classOn)}
                >
                    <div className="menu-toggle">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <Link className="nav-link" href="/about">About</Link>
                            </li>


                            {/* <li>
                                <Link href="/loans">
                                    Loans*
                                </Link>
                            </li>
                            <li>
                                <Link href="/payments">
                                    Payments*
                                </Link>
                            </li>
                            <li>
                                <Link href="/score">
                                    Score*
                                </Link>
                            </li>
                            <li>
                                <Link href="/academy">
                                    Academy
                                </Link>
                            </li>
                            <li>
                                <Link href="/refer">
                                    Refer
                                </Link>
                            </li> */}


                            <li>
                                <Link className="nav-link" href="/help">
                                    Help ?
                                </Link>
                            </li>
                            <li>
                                <Button className="button-primary" color="warning" variant="contained" href="/auth" size="medium" >Apply now</Button>
                            </li>
                            {/* <li>
                                <Link href="/auth">
                                    logout
                                </Link>
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
