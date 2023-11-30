import React from 'react';
import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

// 日記サマリ
export interface DiarySummary {
    id: number;
    title: string;
    thumbnail: string;
    tags: string[];
    date: string;
}

interface DiaryListProps {
    allDiarySummary: DiarySummary[];
}

export const DiaryList: React.FC<DiaryListProps> = ({ allDiarySummary }) => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <h1 className="column">DIARY</h1>
      
        {allDiarySummary.map((diary) => (
          <Link to={`/diary/${diary.id}`} key={diary.id} style={{ width: "100%" }}>
          <Card key={diary.id} sx={{ 
            display: 'flex', 
            marginBottom: 2 , 
            width: { xs: "95%", md: "70%" } ,
            mx: "auto",
          }}>

            {/* サムネイル */}
            <CardMedia
              component="img"
              sx={{ 
                height: { xs: 100, md: 140 }, 
                width: { xs: 100, md: 140 },
                objectFit: 'cover', 
                margin: { xs: 'auto 10px',  md: 'auto 20px' } 
              }}
              image={diary.thumbnail}
              alt={diary.title}
            />

            {/* 日記の内容 */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left',flexGrow: 1, }}>
              <CardContent sx={{ 
                // flex: '1 0 auto', 
                }}>

                {/* タイトル */}
                <Typography gutterBottom variant="h5" component="div" align='left'
                  sx={{ 
                    fontSize: { xs: '1.2rem', md: '1.5rem' },
                    
                    // 3行以上の時に...を表示
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3, // 3行を最大行数とする
                    textOverflow: 'ellipsis', // 末尾に"..."を表示
                  }}>
                  {diary.title}
                </Typography>

                {/* 区切り線 */}
                <Divider sx={{ 
                  marginTop: -1,
                  borderBottomWidth: 3,
                  width: "95%",
                  }}/>

                {/* 日付 */}
                <Typography variant="subtitle1" color="text.secondary" component="div" align='left'
                  sx={{ 
                    fontSize: { xs: '0.8rem', md: '1rem' },
                  }}>
                  {diary.date}
                </Typography>

                {/* タグ */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, alignItems: 'center', marginTop: 1 }}>
                  {diary.tags.map((tag, index) => (
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
            </Box>
          </Card>
        </Link>

        ))}
      </Box>
    );
  }
