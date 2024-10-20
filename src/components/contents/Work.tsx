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
import { type IsHomeProp } from './IsHomeProp';

import { useState } from 'react';
import { Box, Button, Grid, Card, CardActionArea, CardContent, Modal, Chip, CardMedia, Typography, IconButton, Divider } from '@mui/material';
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
  otherTechnologies: string;
  github: string;
  articles: Array<{ title: string; link: string }>;
}

// カスタム矢印コンポーネント
interface ArrowProps {
  direction: 'left' | 'right'; // 左右の向きを指定
  onClick: () => void;         // クリック時の処理
}

const Arrow = ({ direction, onClick }: ArrowProps): JSX.Element => {
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

const WorkCard = ({ url, imageUrls, title, tags, date, overview, technology, infrastructure, description, otherTechnologies, github, articles }: WorkCardProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

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

          {/* タイトルセクション */}
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' }, mt: 5 }}>
            {title}
          </Typography>

          <Divider sx={{ borderBottomWidth: 2, width: "95%" }} />

          {/* 概要、使用技術、インフラ、その他技術 */}
          <Box sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: { xs: '0.875rem', md: '1.25rem' } }}>
                  概要
                </Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1.125rem' }, mt: { xs: -1.5, md: 0} }}>
                  {overview}
                </Typography>
              </Grid>

              <Grid item xs={12} md={3}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: { xs: '0.875rem', md: '1.25rem' } }}>
                  URL
                </Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1.125rem' }, mt: { xs: -1.5, md: 0} }}>
                  <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
                </Typography>
              </Grid>

              <Grid item xs={12} md={3}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: { xs: '0.875rem', md: '1.25rem' } }}>
                  使用言語
                </Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1.125rem' }, mt: { xs: -1.5, md: 0} }}>
                  {technology}
                </Typography>
              </Grid>

              <Grid item xs={12} md={3}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: { xs: '0.875rem', md: '1.25rem' } }}>
                  インフラ
                </Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1.125rem' }, mt: { xs: -1.5, md: 0} }}>
                  {infrastructure}
                </Typography>
              </Grid>

              <Grid item xs={12} md={3}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: { xs: '0.875rem', md: '1.25rem' } }}>
                  その他
                </Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1.125rem' }, mt: { xs: -1.5, md: 0} }}>
                  {otherTechnologies}
                </Typography>
              </Grid>
            </Grid>
          </Box>

          {/* 説明セクション */}
          <Box sx={{ mt: 5 }}>
            <Typography id="modal-modal-title" variant="h6" component="h3" sx={{ fontWeight: 'bold', fontSize: { xs: '1.25rem', md: '1.75rem' } }}>
              説明
            </Typography>
            <Divider sx={{ borderBottomWidth: 2, width: "95%", mb: 2 }} />
            <Typography variant="body1" component="p" sx={{ fontSize: { xs: '0.875rem', md: '1.125rem' }, mt: 1 }}>
              {description}
            </Typography>
          </Box>

          {/* 関連情報セクション */}
          <Box sx={{ mt: 5 }}>
            <Typography id="modal-modal-title" variant="h6" component="h3" sx={{ fontWeight: 'bold', fontSize: { xs: '1.25rem', md: '1.75rem' } }}>
              関連情報
            </Typography>
            <Divider sx={{ borderBottomWidth: 2, width: "95%", mb: 2 }} />
            <Grid container spacing={2}>
              {/* Github */}
              <Grid item xs={12} md={3}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: { xs: '0.875rem', md: '1.25rem' } }}>
                  Github
                </Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1.125rem' }, mt: { xs: -1.5, md: 0} }}>
                  <a href={github} target="_blank" rel="noopener noreferrer">{github}</a>
                </Typography>
              </Grid>

              {/* 記事リスト */}
              <Grid item xs={12} md={3}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: { xs: '0.875rem', md: '1.25rem' } }}>
                  記事
                </Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1.125rem' }, mt: { xs: -1.5, md: 0} }}>
                  <ul style={{ paddingLeft: '20px', marginTop: '0' }}> {/* スタイル調整 */}
                    {articles.map((article, index) => (
                      <li key={index} style={{ marginBottom: '8px' }}>
                        <a href={article.link} target="_blank" rel="noopener noreferrer">{article.title}</a>
                      </li>
                    ))}
                  </ul>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </>
  );
};



export const Work = ({ isHome }: IsHomeProp ): JSX.Element => {
  const works = [
    {
      url: "https://kakutory.com",
      imageUrls: [ kakutory1, kakutory2, kakutory3 ],
      title: 'kakutory',
      tags: ['React', 'Typescript', 'AWS'],
      date: '2023-12-08',
      overview: 'ポートフォリオサイト『kakutory』の作成',
      technology: 'React, TypeScript',
      infrastructure: 'AWS S3 + CloudFront + Route53, Github Actions',
      otherTechnologies: 'Vite, GitHub Actions',
      github: "https://github.com/Suke-H/kakutory",
      articles: [
        { title: "このサイトの使用技術", link: "https://kakutory.com/#/diary/2023121002" },
      ],
      description: 'Webの勉強を主目的に、自分のポートフォリオサイトとして作成しました。フロントエンドはReactとTypescript、ホスティングはAWS S3とCloudfrontを使っています。今後、ゲームとWeb、2つの側面での制作物を公開したり、日記を書いていったり、自由に使っていきたいなと思ってます。',
    },
    {
      url: "https://kakutory.com/game_pages/MyWordleProject",
      imageUrls: [ wordle1, wordle2, wordle3 ],
      title: 'MyWordleProject',
      tags: ['ゲーム', 'React', 'TypeScript', 'AWS'],
      date: '2024-01-15',
      overview: '単語当てゲーム『Wordle』の模倣作成',
      technology: 'React, TypeScript',
      infrastructure: 'AWS S3 + CloudFront + Route53, Lambda + DynamoDB',
      otherTechnologies: 'Vite, GitHub Actions',
      github: "https://github.com/Suke-H/wordle-project",
      articles: [
        { title: "Wordle作りました！", link: "https://kakutory.com/#/diary/2024031101" },
        { title: "AWSでLambda, DynamoDBを使ってWordle構築してみた", link: "https://zenn.dev/kakuhito/articles/73f9f834812eee" },
      ],
      description: 'AWSを使ったバックエンド開発を学ぶために、Wordleを模倣作成しました。フロントエンドやホスティングはKakutoryと同じで、バックエンドにAWS LambdaとDynamoDBを使用しています。作者でさえも毎日遊べるシステムとして、これ以上シンプルで優れたゲームって中々無いのではないでしょうか...',
    },
    {
      url: "https://github.com/Suke-H/yuru-sprint/",
      imageUrls: [ yuruSprint1, yuruSprint2, yuruSprint3, yuruSprint4 ],
      title: 'ゆるスプリント',
      tags: ['SlackApp', 'Node.js', 'GoogleCloud'],
      date: '2024-09-22',
      overview: 'Slackでゆる～く1週間の目標を立てられるアプリ',
      technology: 'Node.js',
      infrastructure: 'Cloud Run + Cloud Scheduler',
      otherTechnologies: 'Docker, GitHub Actions, Workload Identity Federation',
      github: "https://github.com/Suke-H/yuru-sprint",
      articles: [
        { title: "Slack Appの公式Quickstartをローカルサーバーで試す", link: "https://zenn.dev/kakuhito/articles/667b00366f6626" },
        { title: "【OIDC認証】GitHub ActionsでCloud Run自動デプロイ", link: "https://zenn.dev/kakuhito/articles/565c5dda9082a3" },
      ],
      description: `バックエンドの練習としてSlack Appを作成しました。
      「今週の目標を立てる・できたタスクにはスタンプを押す・振り返りをする」を繰り返しができるアプリです。
      結果はNotionのDBに書き込んで、いつでも振り返りできるようにしています。`,
    }
  ];

  const homeworks = [
    {
      url: "https://kakutory.com",
      imageUrls: [ kakutory1, kakutory2, kakutory3 ],
      title: 'kakutory',
      tags: ['React', 'Typescript', 'AWS'],
      date: '2023-12-08',
      overview: 'ポートフォリオサイト『kakutory』の作成',
      technology: 'React, TypeScript',
      infrastructure: 'AWS S3 + CloudFront + Route53, Github Actions',
      otherTechnologies: 'Vite, GitHub Actions',
      github: "https://github.com/Suke-H/kakutory",
      articles: [
        { title: "このサイトの使用技術", link: "https://kakutory.com/#/diary/2023121002" },
      ],
      description: 'Webの勉強を主目的に、自分のポートフォリオサイトとして作成しました。フロントエンドはReactとTypescript、ホスティングはAWS S3とCloudfrontを使っています。今後、ゲームとWeb、2つの側面での制作物を公開したり、日記を書いていったり、自由に使っていきたいなと思ってます。',
    },
    {
      url: "https://kakutory.com/game_pages/MyWordleProject",
      imageUrls: [ wordle1, wordle2, wordle3 ],
      title: 'MyWordleProject',
      tags: ['ゲーム', 'React', 'TypeScript', 'AWS'],
      date: '2024-01-15',
      overview: '単語当てゲーム『Wordle』の模倣作成',
      technology: 'React, TypeScript',
      infrastructure: 'AWS S3 + CloudFront + Route53, Lambda + DynamoDB',
      otherTechnologies: 'Vite, GitHub Actions',
      github: "https://github.com/Suke-H/wordle-project",
      articles: [
        { title: "Wordle作りました！", link: "https://kakutory.com/#/diary/2024031101" },
        { title: "AWSでLambda, DynamoDBを使ってWordle構築してみた", link: "https://zenn.dev/kakuhito/articles/73f9f834812eee" },
      ],
      description: 'AWSを使ったバックエンド開発を学ぶために、Wordleを模倣作成しました。フロントエンドやホスティングはKakutoryと同じで、バックエンドにAWS LambdaとDynamoDBを使用しています。作者でさえも毎日遊べるシステムとして、これ以上シンプルで優れたゲームって中々無いのではないでしょうか...',
    },
    {
      url: "https://github.com/Suke-H/yuru-sprint/",
      imageUrls: [ yuruSprint1, yuruSprint2, yuruSprint3, yuruSprint4 ],
      title: 'ゆるスプリント',
      tags: ['SlackApp', 'Node.js', 'GoogleCloud'],
      date: '2024-09-22',
      overview: 'Slackでゆる～く1週間の目標を立てられるアプリ',
      technology: 'Node.js',
      infrastructure: 'Cloud Run + Cloud Scheduler',
      otherTechnologies: 'Docker, GitHub Actions, Workload Identity Federation',
      github: "https://github.com/Suke-H/yuru-sprint",
      articles: [
        { title: "Slack Appの公式Quickstartをローカルサーバーで試す", link: "https://zenn.dev/kakuhito/articles/667b00366f6626" },
        { title: "【OIDC認証】GitHub ActionsでCloud Run自動デプロイ", link: "https://zenn.dev/kakuhito/articles/565c5dda9082a3" },
      ],
      description: `バックエンドの練習としてSlack Appを作成しました。
      「今週の目標を立てる・できたタスクにはスタンプを押す・振り返りをする」を繰り返しができるアプリです。
      結果はNotionのDBに書き込んで、いつでも振り返りできるようにしています。`,
    }
  ];
  
    if (isHome) {
    
      return (
        <div className='work'>
          <Heading text={"WORK"} />
    
          <div className='imageWrapper'>
            {works.map((work, index) => (
              <WorkCard key={index} {...work} />
            ))}
          </div>

          <a href="/#/game/" className='read-more'>
            <Button 
              variant="contained"
              sx={{ 
                marginTop: { xs: '40px', md: '80px' },
                marginBottom: '50px',
                backgroundColor: '#585858',
                '&:hover': {
                  backgroundColor: '#585858',
                },
                fontSize: { xs: '16px', md: '20px' },
                padding: '5px 40px' 
              }}>
              &gt;&gt; READ MORE
            </Button>
          </a>
        </div>

        
        
      );
    }

    else {
      return (
        <div className='work'>
          <Heading text={"WORK"} />
    
          <div className='imageWrapper'>
            {homeworks.map((work, index) => (
              <WorkCard key={index} {...work} />
            ))}
          </div>
        </div>
      );
    }
  };
