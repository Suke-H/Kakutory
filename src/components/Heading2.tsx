/* eslint-disable react/react-in-jsx-scope */

import './Heading2.css';

interface Heading2Props {
    text: string;
}

export const Heading2 = ({ text }: Heading2Props): JSX.Element => {
    return (
        <div className='heading2'>
            {text}
        </div>
    );
}
