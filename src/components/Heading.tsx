/* eslint-disable react/react-in-jsx-scope */

import './Heading.css';
import emphasis_mark from '../assets/heading/emphasis_mark.png';

interface HeadingProps {
    text: string;
}

export const Heading = ( { text } : HeadingProps ): JSX.Element => {
    return (
        <div className='heading'>
            <div className='emphasis'>
                <img src={emphasis_mark} alt='強調マーク' className="emphasis_mark"/>
            </div>
            
            <div className='heading-text'>
                {text}
            </div>
        </div>
    );
}
