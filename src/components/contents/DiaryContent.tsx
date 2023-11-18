/* eslint-disable react/react-in-jsx-scope */
// import React from 'react';

import 'zenn-content-css';
import { useState, useEffect } from 'react';

export const DiaryContent = (): JSX.Element => {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
      fetch('/src/components/contents/diarys/test2.html')
      .then(async response => await response.text())
      .then(html => {
          setHtmlContent(html);
      })
      .catch(error => {
          console.error('Error fetching HTML:', error);
      });
    }, []);

    return (
        <div className="znc">
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    );
}