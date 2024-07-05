import React from 'react';
import Header from "../../components/Header/Header";

const MainLayout = ({children}:{children: React.ReactNode}) => {
    return (
        <div className="main-layout">
            <Header/>
            <main>{children}</main>
        </div>
    );
};

export default MainLayout;