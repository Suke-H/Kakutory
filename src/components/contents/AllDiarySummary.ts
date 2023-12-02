import { type DiarySummary } from './DiaryList';

// 全日記のサマリ内容
export const AllDiarySummary: DiarySummary[] = [
    {
      id: 2023112002,
      title: 'G検定の勉強',
      // thumbnail: '/src/assets/diarySam/general.png',
      thumbnail: '/diarySam/general.png',
      date: '2023-11-20',
      tags: ['G検定', 'ディープラーニング'],
    },
    {
      id: 2023111701,
      title: 'ホームページつくりました！',
      thumbnail: '/diarySam/nikki.png',
      date: '2023-11-17',
      tags: ['Web開発', 'AWS'],
    },
    {
      id: 2023112001,
      title: '釣りに行った話',
      thumbnail: '/diarySam/tsuri.png',
      date: '2023-11-20',
      tags: ['日記'],
    },
  ];