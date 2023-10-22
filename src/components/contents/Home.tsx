// import { Link } from "react-router-dom";
import React from 'react';

const homeStyle: React.CSSProperties = {

    // 文字色
    color: '#585858',

}

export const Home = (): JSX.Element => {
    return (
        <div style={homeStyle}>
            <h2>GAMES</h2>
            {/* <Link to="/games"> */}
                {/* <img src="https://via.placeholder.com/150" alt="games" /> */}
            {/* </Link> */}

            <h2>DIARY</h2>

            <h2>ABOUT ME</h2>

            <h2>CONTACT</h2>
        </div>
    );
}
