/* eslint-disable react/react-in-jsx-scope */
// import React from 'react';

import './Work.css';
import kakutory1 from '../../assets/work/kakutory/icon1.png';
import kakutory2 from '../../assets/work/kakutory/2.png';
import kakutory3 from '../../assets/work/kakutory/3.png';
import wordle1 from '../../assets/work/wordle/1.png';
import wordle2 from '../../assets/work/wordle/2.png';
import wordle3 from '../../assets/work/wordle/3.png';
import yuruSprint1 from '../../assets/work/yuruSprint/1.png';
import yuruSprint2 from '../../assets/work/yuruSprint/2.png';
import yuruSprint3 from '../../assets/work/yuruSprint/3.png';
import yuruSprint4 from '../../assets/work/yuruSprint/4.png';

import { useState } from 'react';
import { Box, Grid, Card, CardActionArea, CardContent, Modal, Chip, CardMedia, Typography, IconButton, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Heading } from '../Heading'; 
import Slider from "react-slick";


const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px',
  outline: 'none',
  color: '#585858',
  maxHeight: '80vh',
  overflowY: 'auto',
  paddingRight: '17px',
};

interface WorkCardProps {
  url: string;
  imageUrls: string[];
  title: string;
  tags: string[];
  date: string;
  overview: string;
  technology: string;
  infrastructure: string;
  description: string;
}

// カスタム矢印コンポーネント
interface ArrowProps {
  direction: 'left' | 'right'; // 左右の向きを指定
  onClick: () => void;         // クリック時の処理
}

const Arrow = ({ direction, onClick }: ArrowProps) => {
  return (
    <IconButton
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '50%',
        [direction === 'left' ? 'left' : 'right']: '10px', // 左右に配置
        transform: 'translateY(-50%)',
        zIndex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      {direction === 'left' ? (
        <ArrowBackIosNewIcon sx={{ color: 'white' }} />
      ) : (
        <ArrowForwardIosIcon sx={{ color: 'white' }} />
      )}
    </IconButton>
  );
};

const WorkCard = ({ url, imageUrls, title, tags, date, overview, technology, infrastructure, description }: WorkCardProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  // スライダーの設定
  const sliderSettings = {
    dots: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow direction="right" onClick={() => {}} />, 
    prevArrow: <Arrow direction="left" onClick={() => {}} />,
  };

  return (
    <>
      <Card sx={{ width: '100%' }}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            image={imageUrls[0]}
            alt={title}
            // sx={{ borderBottom: '4px solid #585858' }}
          />

          <CardContent sx={{ textAlign: 'left' }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
              {title}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {date}
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, alignItems: 'center', marginTop: 1 }}>
              {tags.map((tag, index) => (
                <Chip key={index} label={tag} 
                  sx={{ 
                    fontSize: { xs: '0.75rem',  md: '0.85rem' }, 
                    height: { xs: 24, md: 32 },
                    marginRight: { xs: 0, md: 0.5 }, 
                    marginBottom:{ xs: 0.5, md: 1}, 
                  }} />
              ))}
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={{
          ...modalStyle,
          width: { xs: '80%', md: '50%' }
        }}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: '#585858',
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* 画像スライダー */}
          <Slider {...sliderSettings}>
            {imageUrls.map((imageUrl, index) => (
              <div key={index}>
                <CardMedia
                  component="img"
                  image={imageUrl}
                  alt={`${title} - Image ${index + 1}`}
                  sx={{ mt: 5, mb: 2 }}
                />
              </div>
            ))}
          </Slider>

          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' }, mt: 5 }}>
            {title}
          </Typography>

          <Divider sx={{ 
            borderBottomWidth: 2,
            width: "95%",
          }}/>

          <Box sx={{ mt: 2 }}>
            <Box sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                    <Typography
                        variant="body1"
                        sx={{ fontWeight: 'bold', fontSize: { xs: '0.875rem', md: '1.25rem' } }}
                    >
                        概要
                    </Typography>
                    </Grid>
                    <Grid item xs={12} md={9}>
                    <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1.125rem' }, mt: { xs: -1.5, md: 0} }}>
                        {overview}
                    </Typography>
                    </Grid>

                    <Grid item xs={12} md={3}>
                    <Typography
                        variant="body1"
                        sx={{ fontWeight: 'bold', fontSize: { xs: '0.875rem', md: '1.25rem' } }}
                    >
                        使用技術
                    </Typography>
                    </Grid>
                    <Grid item xs={12} md={9}>
                    <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1.125rem' }, mt: { xs: -1.5, md: 0} }}>
                        {technology}
                    </Typography>
                    </Grid>

                    <Grid item xs={12} md={3}>
                    <Typography
                        variant="body1"
                        sx={{ fontWeight: 'bold', fontSize: { xs: '0.875rem', md: '1.25rem' } }}
                    >
                        インフラ
                    </Typography>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        
                    <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1.125rem' }, mt: { xs: -1.5, md: 0} }}>
                        {infrastructure}
                    </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ mt: 5 }}>
              <Typography id="modal-modal-title" variant="h6" component="h3" sx={{ fontWeight: 'bold', fontSize: { xs: '1.25rem', md: '1.75rem' } }}>
                説明
              </Typography>

              <Divider sx={{ 
                  borderBottomWidth: 2,
                  width: "95%",
                  mb: 2,
              }}/>

              <Typography variant="body1" component="p" sx={{ fontSize: { xs: '0.875rem', md: '1.125rem' }, mt: 1 }}>
                {description}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export const Work = (): JSX.Element => {
    const works = [
      {
        url: "https://kakutory.com",
        imageUrls: [ kakutory1, kakutory2, kakutory3 ],
        title: 'kakutory',
        tags: ['React', 'Typescript', 'AWS'],
        date: '2023-05-01',
        overview: 'ポートフォリオサイト『kakutory』の作成',
        technology: 'Vite, React, TypeScript',
        infrastructure: 'AWS S3 + CloudFront + Route53, Github Actions',
        description: 'ポートフォリオかつ自分の作品を公開する場としてつくりました。Webならではの作品をこれから公開したいなと思ってます。',
      },
      {
        url: "https://kakutory.com/game_pages/MyWordleProject",
        imageUrls: [ wordle1, wordle2, wordle3 ],
        title: 'MyWordleProject',
        tags: ['ゲーム', 'React', 'TypeScript', 'AWS'],
        date: '2024-01-15',
        overview: '単語当てゲーム『Wordle』の模倣作成',
        technology: 'Vite, React, TypeScript',
        infrastructure: 'AWS S3 + CloudFront + Route53, Lambda + DynamoDB',
        description: 'AWSを使ったバックエンド開発を学ぶためにWordleを模倣作成しました。',
      },
      {
        url: "https://github.com/Suke-H/yuru-sprint/",
        imageUrls: [ yuruSprint1, yuruSprint2, yuruSprint3, yuruSprint4 ],
        title: 'ゆるスプリント',
        tags: ['SlackApp', 'Node.js', 'GoogleCloud'],
        date: '2024-01-15',
        overview: 'Slackでゆる～く1週間の目標を立てられるアプリ',
        technology: 'Node.js, Docker',
        infrastructure: 'Cloud Run + Cloud Scheduler',
        description: 'Slackでゆる～く1週間の目標を立てられるアプリ',
      },
    ];
  
    return (
      <div className='work'>
        <Heading text={"WORK"} />
  
        <div className='imageWrapper'>
          {works.map((work, index) => (
            <WorkCard key={index} {...work} />
          ))}
        </div>
      </div>
    );
  };
