import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

export default function App() {
    const [message, setMessage] = useState("");
    useEffect(() => {
        fetch('/api/v1/message')
            .then(res => res.json())
            .then(res => res.body)
            .catch(() => {
                return { message: "Failed to fetch" };
            })
            .then(json => {
                setMessage(json.message);
            });
    });
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>{message}</p>
            </header>
        </div>
    );
}
