/* eslint-disable react/react-in-jsx-scope */
// import React from 'react';
import 'zenn-content-css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PrivacyContent.css'

import { NotFound } from './NotFound';

export const PrivacyContent = (): JSX.Element => {
    const [htmlContent, setHtmlContent] = useState<string>('');
    const { id } = useParams();

    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const filePath = `/privacyContents/${id}.html`;
      fetch(filePath)
      .then(async response => {
        if (!response.ok) { // レスポンスのステータスが OK (200) でない場合
            throw new Error('Network response was not ok'); // 例外を投げる
        }
        return await response.text();
    })
      .then(html => {
          setHtmlContent(html);
          setError(false);
      })
      .catch(error => {
          console.error('Error fetching HTML:', error);
          console.log('path:', filePath);
          setError(true);
      });
    }, [id]);

    if (error) {
        return ( <NotFound /> );
    }

    return (
        <div className="znc">
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    );
}
