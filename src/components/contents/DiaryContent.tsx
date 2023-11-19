/* eslint-disable react/react-in-jsx-scope */
// import React from 'react';

import 'zenn-content-css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const DiaryContent = (): JSX.Element => {
    const [htmlContent, setHtmlContent] = useState<string>('');
    const { id } = useParams();

    useEffect(() => {
      const filePath = `/src/components/contents/diarys/${id}.html`;
      fetch(filePath)
      .then(async response => await response.text())
      .then(html => {
          setHtmlContent(html);
      })
      .catch(error => {
          console.error('Error fetching HTML:', error);
      });
    }, []);

    return (
        <div className="znc" style={{
             width: "70%",
             margin: "0 auto",
             maxWidth: "800px",
             }}>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    );
}
