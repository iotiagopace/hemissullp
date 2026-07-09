"use client";

import React, { useState } from 'react';
import Link from "next/link";
import Swal from 'sweetalert2';

export default function LoginOne() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.email.trim() || !formData.password.trim()) {
            Swal.fire({
                icon: 'warning',
                title: 'Missing Fields',
                text: 'Please enter both email and password.',
                confirmButtonColor: '#e74c3c',
            });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            Swal.fire({
                icon: 'warning',
                title: 'Invalid Email',
                text: 'Please enter a valid email address.',
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
             *  NOTE: Add your authentication / API call here.
             *  Example:
             *
             *  await signIn('credentials', {
             *      email: formData.email,
             *      password: formData.password,
             *      redirect: false,
             *  });
             *       — or —
             *  await axios.post('/api/auth/login', {
             *      email: formData.email,
             *      password: formData.password,
             *  });
             * ─────────────────────────────────────────────
             */

            Swal.fire({
                icon: 'success',
                title: 'Login Successful!',
                text: 'Welcome back! Redirecting you...',
                confirmButtonColor: '#e74c3c',
                timer: 2000,
                timerProgressBar: true,
            });

            setFormData({ email: '', password: '', rememberMe: false });

        } catch{
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Invalid email or password. Please try again.',
                confirmButtonColor: '#e74c3c',
            });
        }
    };

    return (
        <>
            {/*Start Login One*/}
            <section className="login-one">
                <div className="container">
                    <div className="login-one__form">
                        <div className="inner-title text-center">
                            <h2>Login Here</h2>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <div className="input-box">
                                            <input
                                                type="email"
                                                name="email"
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
                                                type="password"
                                                name="password"
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
                                            <span>Login Here</span>
                                            <i className="fal fa-angle-double-right"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="remember-forget">
                                    <div className="checked-box1">
                                        <input
                                            type="checkbox"
                                            name="rememberMe"
                                            id="saveinfo"
                                            checked={formData.rememberMe}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="saveinfo">
                                            <span></span>
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="forget">
                                        <Link href="#">Forget password?</Link>
                                    </div>
                                </div>
                                <div className="create-account text-center">
                                    <p>
                                        Not registered yet?{' '}
                                        <Link href="/sign-up">
                                            Create an Account
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/*End Login One*/}
        </>
    );
}