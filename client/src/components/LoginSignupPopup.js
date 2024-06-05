import React, { useState } from 'react';
import axios from 'axios';
import './LoginSignupPopup.css';

const LoginSignupPopup = ({ onClose }) => {
    const [activeTab, setActiveTab] = useState('login');
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, username, password, confirmPassword } = formData;

        if (activeTab === 'signup' && password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            let url = '';
            let payload = { username, password };

            if (activeTab === 'login') {
                url = '/auth/login';
            } else if (activeTab === 'signup') {
                url = '/auth/signup';
                payload = { name, username, password };
            } else if (activeTab === 'adminLogin') {
                url = '/auth/admin/login';
            }

            const response = await axios.post(url, payload);
            alert(`Success: ${response.data.message}`);
            onClose();
        } catch (error) {
            alert(`Error: ${error.response.data.message}`);
        }
    };

    return (
        <div className="popup-background">
            <div className="popup">
                <div className="popup-header">
                    <button 
                        onClick={() => setActiveTab('login')} 
                        className={activeTab === 'login' ? 'active' : ''}
                    >
                        Login
                    </button>
                    <button 
                        onClick={() => setActiveTab('adminLogin')} 
                        className={activeTab === 'adminLogin' ? 'active' : ''}
                    >
                        Admin Login
                    </button>
                    <button 
                        onClick={() => setActiveTab('signup')} 
                        className={activeTab === 'signup' ? 'active' : ''}
                    >
                        Sign Up
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    {activeTab === 'signup' && (
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    )}
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    {activeTab === 'signup' && (
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    )}
                    <button type="submit">Submit</button>
                    <button type="button" onClick={onClose}>Close</button>
                </form>
            </div>
        </div>
    );
};

export default LoginSignupPopup;
