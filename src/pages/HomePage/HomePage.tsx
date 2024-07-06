import React from 'react';
import MainLayout from "../../layouts/MainLayout/MainLayout";
import modelYDesktop from "../../assets/Homepage-Model-Y-Desktop-Global.png";
import modelYMobile from "../../assets/Homepage-Model-Y-Mobile-Global.jpg";
import Button from "../../components/Button/Button";
import './HomePage.css';
import {generateResponsivePicture} from "../../utils/responsivePicture";

const HomePage = () => {
    return (
        <MainLayout>
            <div className="home-page">
                {generateResponsivePicture(modelYDesktop, modelYMobile, "Model Y", "tcl-image__picture")}
                <h1 className="model-y-title">Model Y</h1>
                <div className="button-group">
                    <Button text="Şimdi Sipariş Et" onClick={() => {}} type="primary" />
                    <Button text="Test Sürüşü" onClick={() => {}} type="secondary" />
                </div>
            </div>
        </MainLayout>
    );
};

export default HomePage;
