"use client";
import React, { useContext } from 'react';
import Swal from "sweetalert2";
import ProjectContext from '../context/ProjectContext';
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/resources/logo-2.png"
const SideBar: React.FC = () => {
    const context = useContext(ProjectContext);
    if (!context) throw new Error("Context Null");
    const { isSidebar, setIsSidebar } = context;
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        // Extract form values
        const Name = formData.get("name") as string;
        const Email = formData.get("email") as string;
        const Message = formData.get("message") as string;
        form.reset()
        setIsSidebar(false);
        if (Name && Email && Message) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your message sent successfully!",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    return (
        <div className={`xs-sidebar-group info-group info-sidebar ${isSidebar ? 'isActive' : ''}`}>
            <div className="xs-overlay xs-bg-black" onClick={() => setIsSidebar(pre => !pre)}></div>
            <div className="xs-sidebar-widget">
                <div className="sidebar-widget-container">
                    <div className="widget-heading" onClick={() => setIsSidebar(pre => !pre)}>
                        <Link href="#" className="close-side-widget">X</Link>
                    </div>
                    <div className="sidebar-textwidget">
                        <div className="sidebar-info-contents">
                            <div className="content-inner">
                                <div className="logo">
                                    <Link href="/"><Image src={logo} alt="logo" /></Link>
                                </div>
                                <div className="content-box">
                                    <h4>About Us</h4>
                                    <div className="inner-text">
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                            roots in a piece of classical Latin literature from 45 BC, making it over
                                            2000 years old.
                                        </p>
                                    </div>
                                </div>
                                <div className="form-inner">
                                    <h4>Get a free quote</h4>
                                    <form onSubmit={handleSubmit} className="contact-form-validated">
                                        <div className="form-group">
                                            <input type="text" name="name" placeholder="Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="email" placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <textarea name="message" placeholder="Message..." ></textarea>
                                        </div>
                                        <div className="form-group message-btn">
                                            <button className="thm-btn" data-text="Submit Now" type="submit"
                                                data-loading-text="Please wait...">
                                                <span>Submit Now</span>
                                                <i className="fas fa-arrow-right"></i>
                                            </button>
                                        </div>
                                        <div className="result"></div>
                                    </form>
                                </div>
                                <div className="sidebar-contact-info">
                                    <h4>Contact Info</h4>
                                    <ul className="list-unstyled">
                                        <li>
                                            <span className="icon-location"></span> 88 broklyn street, New York
                                        </li>
                                        <li>
                                            <span className="icon-phone-call"></span>
                                            <a href="tel:123456789">+1 555-9990-153</a>
                                        </li>
                                        <li>
                                            <span className="icon-envelope"></span>
                                            <a href="mailto:info@example.com">info@example.com</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="thm-social-link1">
                                    <ul className="social-box list-unstyled">
                                        <li>
                                            <Link href="#"><i className="fab fa-facebook" aria-hidden="true"></i></Link>
                                        </li>
                                        <li>
                                            <Link href="#"><i className="fab fa-twitter" aria-hidden="true"></i></Link>
                                        </li>
                                        <li>
                                            <Link href="#"><i className="fab fa-pinterest-p" aria-hidden="true"></i></Link>
                                        </li>
                                        <li>
                                            <Link href="#"><i className="fab fa-instagram" aria-hidden="true"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SideBar;