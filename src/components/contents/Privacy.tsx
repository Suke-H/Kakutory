/* eslint-disable react/react-in-jsx-scope */
// import { Link } from "react-router-dom";
// import React from 'react';

// import { Heading } from '../Heading';
import { PrivacyContent } from './PrivacyContent';

import './Privacy.css';
// import Button from '@mui/material/Button';

export const Privacy = (): JSX.Element => {
    return (
        <div className='privacy'>
            {/* <Heading text={"STRAYBOT Privacy Policy"} /> */}
            
            <PrivacyContent />
        </div>
    );
}
