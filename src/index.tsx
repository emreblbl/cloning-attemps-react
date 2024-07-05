import React from 'react';
import './index.css';
import HomePage from "../src/pages/HomePage/HomePage";
import {createRoot} from "react-dom/client";

const container = document.getElementById('root');
const root = createRoot(container!); // Use the new API from React 18

root.render(
    <React.StrictMode>
        <HomePage/>
    </React.StrictMode>
);

