/* eslint-disable react/react-in-jsx-scope */
// import React from 'react';

import './Work.css';
import kakutory from '../../assets/work/kakutory.png'
import wordle from '../../assets/work/wordle.png'

import { useState } from 'react';
import { Box, Grid, Card, CardActionArea, CardContent, Modal, Chip, CardMedia, Typography, IconButton, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // バツボタン用アイコン
import { Heading } from '../Heading'; 

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)', // モーダルを中央揃え
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px', // モーダルに角丸を適用
  outline: 'none', // 枠線を無効化
  color: '#585858', // 文字色を#585858に指定
  maxHeight: '80vh', // モーダルの最大高さを制限
  overflowY: 'auto', // コンテンツが多いときにスクロールバーを表示
};

interface WorkCardProps {
  url: string;
  imageUrl: string;
  title: string;
  tags: string[];
  date: string;
  overview: string;
  technology: string;
  infrastructure: string;
  description: string;
}

const WorkCard = ({ url, imageUrl, title, tags, date, overview, technology, infrastructure, description }: WorkCardProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <Card sx={{ width: '100%' }}>
        <CardActionArea onClick={handleOpen}>

            <CardMedia
                component="img"
                image={imageUrl}
                alt={title}
            />

          <CardContent sx={{ textAlign: 'left' }}> {/* 左揃えに設定 */}
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
              {title}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {date}
            </Typography>

            {/* タグ表示部分 */}
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

      {/* モーダル */}
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

          <CardMedia
            component="img"
            image={imageUrl}
            alt={title}
            sx={{ marginBottom: 2 }}
          />

          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' } }}>
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
                        sx={{ fontWeight: 'bold', fontSize: { xs: '0.875rem', md: '1.25rem' } }} // フォントサイズをレスポンシブに
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
                        sx={{ fontWeight: 'bold', fontSize: { xs: '0.875rem', md: '1.25rem' } }} // フォントサイズをレスポンシブに
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
                        sx={{ fontWeight: 'bold', fontSize: { xs: '0.875rem', md: '1.25rem' } }} // フォントサイズをレスポンシブに
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

            {/* 説明部分 */}
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
      imageUrl: kakutory, 
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
      imageUrl: wordle,
      title: 'MyWordleProject',
      tags: ['ゲーム', 'React', 'TypeScript', 'AWS'],
      date: '2024-01-15',
      overview: '単語当てゲーム『Wordle』の模倣作成',
      technology: 'Vite, React, TypeScript',
      infrastructure: 'AWS S3 + CloudFront + Route53, Lambda + DynamoDB',
      description: 'AWSを使ったバックエンド開発を学ぶためにWordleを模倣作成しました。',
    },
  ];

  return (
    <div className='work'>
      <Heading text={"WORK"} />  {/* ここはHeadingに変更 */}

      <div className='imageWrapper'>
        {works.map((work, index) => (
          <WorkCard key={index} {...work} />
        ))}
      </div>
    </div>
  );
};
