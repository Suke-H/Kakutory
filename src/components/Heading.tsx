/* eslint-disable react/react-in-jsx-scope */

import './Heading.css';
import emphasis_mark from '../assets/heading/emphasis_mark.png';

interface HeadingProps {
    text: string;
}

export const Heading = ( { text } : HeadingProps ): JSX.Element => {
    return (
        <div className='heading'>
            <div className='left-box'>
                <img src={emphasis_mark} alt='強調マーク' className="emphasis_mark"/>
            </div>
            <div className='center-box'>
                {text}
            </div>
            <div className='right-box'></div>
        </div>
    );
}
