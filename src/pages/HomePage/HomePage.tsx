import React from 'react';
import MainLayout from "../../layouts/MainLayout/MainLayout";
import modelY from "../../assets/Homepage-Model-Y-Desktop-Global.png";
import Button from "../../components/Button/Button";
import './HomePage.css';

const HomePage = () => {
    return (
        <MainLayout>
            <div className="home-page">
                <h1 className="model-y-title">Model Y</h1>
                <img src={modelY} alt="Model Y" className="model-y-image" />
                <div className="button-group">
                    <Button text="Simdi Siparis Et" onClick={() => {}} type="primary" />
                    <Button text="Test Surusu" onClick={() => {}} type="secondary" />
                </div>
            </div>
        </MainLayout>
    );
};

export default HomePage;
