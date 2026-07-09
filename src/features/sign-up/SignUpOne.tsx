"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Swal from 'sweetalert2';
import IconGoogle2 from "@/assets/images/icon/icon-google-2.png";
import IconFacebook from "@/assets/images/icon/icon-facebook.png";

export default function SignUpOne() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.name.trim()) {
            Swal.fire({
                icon: 'warning',
                title: 'Name Required',
                text: 'Please enter your full name.',
                confirmButtonColor: '#e74c3c',
            });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            Swal.fire({
                icon: 'warning',
                title: 'Invalid Email',
                text: 'Please enter a valid email address.',
                confirmButtonColor: '#e74c3c',
            });
            return;
        }

        const phoneRegex = /^[0-9\s\+\-\(\)]{7,15}$/;
        if (formData.phone.trim() && !phoneRegex.test(formData.phone)) {
            Swal.fire({
                icon: 'warning',
                title: 'Invalid Phone',
                text: 'Please enter a valid phone number.',
                confirmButtonColor: '#e74c3c',
            });
            return;
        }

        if (formData.password.length < 6) {
            Swal.fire({
                icon: 'warning',
                title: 'Weak Password',
                text: 'Password must be at least 6 characters long.',
                confirmButtonColor: '#e74c3c',
            });
            return;
        }

        try {
            /*
             * ─────────────────────────────────────────────
             *  NOTE: Add your registration / API call here.
             *  Example:
             *
             *  await axios.post('/api/auth/register', formData);
             *       — or —
             *  await fetch('/api/auth/register', {
             *      method: 'POST',
             *      headers: { 'Content-Type': 'application/json' },
             *      body: JSON.stringify(formData),
             *  });
             * ─────────────────────────────────────────────
             */

            Swal.fire({
                icon: 'success',
                title: 'Account Created!',
                text: 'Welcome! Your account has been successfully created.',
                confirmButtonColor: '#e74c3c',
                timer: 2000,
                timerProgressBar: true,
            });

            setFormData({ name: '', email: '', phone: '', password: '' });

        } catch {
            Swal.fire({
                icon: 'error',
                title: 'Registration Failed',
                text: 'Something went wrong. Please try again later.',
                confirmButtonColor: '#e74c3c',
            });
        }
    };

    return (
        <>
            {/*Start Sign Up One*/}
            <section className="sign-up-one">
                <div className="container">
                    <div className="sign-up-one__form">
                        <div className="inner-title text-center">
                            <h2>Sign Up</h2>
                        </div>
                        <form
                            id="sign-up-one__form"
                            name="sign-up-one_form"
                            onSubmit={handleSubmit}
                        >
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <div className="input-box">
                                            <input
                                                type="text"
                                                name="name"
                                                id="formName"
                                                placeholder="Name..."
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <div className="input-box">
                                            <input
                                                type="email"
                                                name="email"
                                                id="formEmail"
                                                placeholder="Email..."
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <div className="input-box">
                                            <input
                                                type="text"
                                                name="phone"
                                                id="formPhone"
                                                placeholder="Phone..."
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <div className="input-box">
                                            <input
                                                type="password"
                                                name="password"
                                                id="formPassword"
                                                placeholder="Password..."
                                                value={formData.password}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <button
                                            className="thm-btn"
                                            type="submit"
                                        >
                                            <span>Sign Up</span>
                                            <i className="fal fa-angle-double-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="google-facebook">
                                <a href="https://www.google.com/">
                                    <div className="icon">
                                        <Image src={IconGoogle2} alt="Google" />
                                    </div>
                                    Continue with Google
                                </a>
                                <a href="https://www.facebook.com/">
                                    <div className="icon">
                                        <Image src={IconFacebook} alt="Facebook" />
                                    </div>
                                    Continue with Facebook
                                </a>
                            </div>
                            <div className="create-account text-center">
                                <p>
                                    Already have an account?{' '}
                                    <Link href="/login">Login Here</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/*End Sign Up One*/}
        </>
    );
}