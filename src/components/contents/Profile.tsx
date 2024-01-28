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

export const Profile = (): JSX.Element => {
    return (
      <>
      <a href="/#/about">
        <Card sx={{ 
            display: 'flex', 
            
            maxWidth: 800, 
            backgroundColor: "#E9E9E9",
            border: '1px solid #e0e0e0', 
            borderRadius: '16px', 
            overflow: 'hidden', 

        }}>
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              p: {xs: 0 , md:  2 },
              marginTop: {xs: "20px" , md: 0 },
              marginLeft: {xs: "20px" , md: 0 },
              }}
            >
            <Box
              component="img"
              sx={{
                width:{ xs: "100px", md: "150px" } ,
                
              }}
              alt="Character Image"
              src={kakuhito}
            />
            <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
              <a href="https://twitter.com/kakuhito_66" target="_blank" rel="noopener noreferrer">
                <img
                  src={x}
                  alt="x"
                  style={{ width: 20, marginRight: 8 }}
                />
              </a>
              <a href="https://github.com/Suke-H/" target="_blank" rel="noopener noreferrer">
                <img
                  src={github}
                  alt="github"
                  style={{ width: 20, marginRight: 8 }}
                />
              </a>
              <a href="https://zenn.dev/kakuhito" target="_blank" rel="noopener noreferrer">
                <img
                  src={zenn}
                  alt="zenn"
                  style={{ width: 20, marginRight: 8 }}
                />
              </a>
              <a href="https://note.com/kaku_suke_33" target="_blank" rel="noopener noreferrer">
                <img
                  src={note}
                  alt="note"
                  style={{ width: 20, marginRight: 8 }}
                />
              </a>
            </Box>
          </Box>
          <CardContent 
            sx={{ 
              // flex: '1 0 auto' ,
              marginRight: {xs: 0, md: "20px"},
              padding: {xs: "16px 16px 24px 8px", md: "16px 16px 24px 16px"},
              }}>
            <Typography gutterBottom variant="h5" component="div"
                sx={{
                    fontWeight: "bold",
                    color: "#585858",
                    fontSize: {xs: "28px", md: "36px"},
                    margin: {xs: "0 0 20px 10px", md: "10px 0 20px 20px"},
                    textAlign: "left",
                    fontFamily: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"].join(','), 
                    }}>
              かくひと
            </Typography>
            <Typography variant="body2" color="text.secondary" 
              sx={{
                fontWeight: "bold",
                color: "#585858",
                fontSize: {xs: "14px", md: "18px"},
                margin: {xs:  "0 0 10px 5px", md: "0 0 10px 20px"},
                textAlign: "left",
                fontFamily: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"].join(','), 

                display: "list-item",
                listStyleType: "disc",
                listStylePosition: "inside",
                marginBottom: "10px",
              }}
              >
                おもいつきゲーム制作者
            </Typography>

            <Typography variant="body2" color="text.secondary" 
              sx={{
                fontWeight: "bold",
                color: "#585858",
                fontSize: {xs: "14px", md: "18px"},
                margin: {xs:  "0 0 10px 5px", md: "0 0 10px 20px"},
                textAlign: "left",
                fontFamily: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"].join(','), 

                display: "list-item",
                listStyleType: "disc",
                listStylePosition: "inside",
                marginBottom: "10px",
              }}
              >
                かけだしWebエンジニア
            </Typography>
          </CardContent>
        </Card>
      </a>
      </>
    );

    
};