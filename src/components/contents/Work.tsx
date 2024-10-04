/* eslint-disable react/react-in-jsx-scope */
// import React from 'react';

import './Work.css';
import strayBot from '../../assets/game/strayBot.png';
import shikakuReversi from '../../assets/game/shikakuReversi.png';

import { useState } from 'react';
import { Box, Card, CardActionArea, CardContent, Modal, Chip, CardMedia, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // バツボタン用アイコン
import { Heading } from '../Heading'; 

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)', // モーダルを中央揃え
  width: 500,
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
        <Box sx={modalStyle}>
          {/* バツボタン */}
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

          {/* モーダル内の画像 */}
          <CardMedia
            component="img"
            image={imageUrl}
            alt={title}
            sx={{ marginBottom: 2 }} // 画像に角丸なし
          />

          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title} - 詳細情報
          </Typography>
          <Box sx={{ mt: 2 }}>
            <table>
              <tbody>
                <tr>
                  <td><strong>概要:</strong></td>
                  <td>{overview}</td>
                </tr>
                <tr>
                  <td><strong>使用技術:</strong></td>
                  <td>{technology}</td>
                </tr>
                <tr>
                  <td><strong>インフラ:</strong></td>
                  <td>{infrastructure}</td>
                </tr>
              </tbody>
            </table>

            {/* 説明部分 */}
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" component="h3">
                説明
              </Typography>
              <Typography variant="body1" component="p" sx={{ marginTop: 1 }}>
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
      url: "https://example.com/work-a",
      imageUrl: strayBot, 
      title: 'プロジェクトA',
      tags: ['React', 'フロントエンド', 'TypeScript'],
      date: '2023-05-01',
      overview: 'Reactを使ったフロントエンド開発',
      technology: 'React, TypeScript',
      infrastructure: 'AWS, Docker',
      description: 'Webアプリケーションのフロントエンド部分を開発し、モバイル対応も実施しました。',
    },
    {
      url: "https://example.com/work-b",
      imageUrl: shikakuReversi,
      title: 'プロジェクトB',
      tags: ['Node.js', 'バックエンド', 'API開発'],
      date: '2024-01-15',
      overview: 'Node.jsを使ったAPI開発',
      technology: 'Node.js, Express',
      infrastructure: 'GCP, Kubernetes',
      description: '大規模APIを開発し、負荷分散とスケーラビリティの対応を行いました。',
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
