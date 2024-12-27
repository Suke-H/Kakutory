/* eslint-disable react/react-in-jsx-scope */
// import { Link } from "react-router-dom";
// import React from 'react';
import { Routes, Route } from 'react-router-dom';

// import { Heading } from '../Heading';
import { PrivacyContent } from './PrivacyContent';

import './Privacy.css';
// import Button from '@mui/material/Button';

export const Privacy = (): JSX.Element => {
    return (
        <div className='privacy'>
            <Routes>
                <Route path="/:id" element={<PrivacyContent />} />
            </Routes>
        </div>
    );
}
