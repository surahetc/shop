import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/Header";
import Section from "./components/Section"
import Footer from "./components/Footer";

function App() {
    return (
        <div className="app">
            <Router>
                <Header/>
                <Section/>
                <Footer/>
            </Router>
        </div>
    )
}

export default App
