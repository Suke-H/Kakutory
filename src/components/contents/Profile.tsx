/* eslint-disable react/react-in-jsx-scope */
// import { Link } from "react-router-dom";
// import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import kakuhito from '../../assets/about/kakuhito.png';
import x from '../../assets/about/SNS/x-logo-black.png';
import github from '../../assets/about/SNS/github-mark.png';
import zenn from '../../assets/about/SNS/zenn-logo-only.svg';
import note from '../../assets/about/SNS/note-icon.png';

import './Profile.css';

export const Profile = (): JSX.Element => {
    // return (
    //     <div className="container">
    //         <div className="logo">
    //             <img src={kakuhito} alt="かくひと" />

    //             <div className="icons">
    //                 <a href="https://twitter.com/kakuhito_66">
    //                     <img src={x}  alt="X" />
    //                 </a>
    //                 <a href="https://github.com/Suke-H/">
    //                     <img src={github} alt="GitHub" />
    //                 </a>
    //                 <a href='https://zenn.dev/kakuhito'>
    //                     <img src={zenn} alt="Zenn" />
    //                 </a>

    //                 <a href='https://note.com/kaku_suke_33'>
    //                     <img src={note} alt="note" />
    //                 </a>
    //             </div>
    //         </div>
    //         <div className="titles">
    //             <p>かくひと</p>
    //             <ul>
    //                 <li>おもいつきゲーム制作者</li>
    //                 <li>かけだしWebエンジニア</li>
    //             </ul>
    //         </div>

    //     </div>
    // );

    return (
        <Card sx={{ 
            display: 'flex', 
            maxWidth: 600, 
            backgroundColor: "#E9E9E9",
            border: '1px solid #e0e0e0', // ここでボーダーラインを指定
            borderRadius: '16px', // 角丸の大きさも指定できます
            overflow: 'hidden' // 角丸のスタイルを適用するために必要
        }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
            <Box
              component="img"
              sx={{
                height: 140,
                width: 140,
                borderRadius: '50%',
              }}
              alt="Character Image"
              src={kakuhito}
            />
            <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={x}
                  alt="Twitter"
                  style={{ width: 24, height: 24, marginRight: 8 }}
                />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={github}
                  alt="Facebook"
                  style={{ width: 24, height: 24, marginRight: 8 }}
                />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={zenn}
                  alt="LinkedIn"
                  style={{ width: 24, height: 24, marginRight: 8 }}
                />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={note}
                  alt="Instagram"
                  style={{ width: 24, height: 24, marginRight: 8 }}
                />
              </a>
            </Box>
          </Box>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography gutterBottom variant="h5" component="div" 
                sx={{
                    color: "#585858",
                    marginLeft: "0px",

                    }}>
              かくひと
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color: "#585858"}}>
                <span className="list-style">おもいつきゲーム制作者</span>
                <span className="list-style">かけだしWebエンジニア</span>
            </Typography>
          </CardContent>
        </Card>
      );
};