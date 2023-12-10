import fs from 'fs';
import path from 'path';
// import markdownToHtml from 'zenn-markdown-html';
import lib from "zenn-markdown-html";
const markdownToHtml = lib.default ? lib.default : lib;

// Markdownファイルが格納されているディレクトリ
const markdownDir = 'formatter/sources';
// HTMLファイルを書き出すディレクトリ
const outputDir = 'public/diaryContents';

// ディレクトリからMarkdownファイルのリストを取得
const files = fs.readdirSync(markdownDir);

files.forEach(file => {
    if (path.extname(file) === '.md') {
        // .mdを.htmlに置き換えて出力先のパスを生成
        const outputFilePath = path.join(outputDir, path.basename(file, '.md') + '.html');
        // プリント
        console.log(outputFilePath);

        // 対応するHTMLファイルが存在しない場合のみ変換を実行
        // if (!fs.existsSync(outputFilePath)) {
        //     // プリント
        //     console.log("変換を実行");

            const markdown = fs.readFileSync(path.join(markdownDir, file), 'utf8');
            const html = markdownToHtml(markdown);
            fs.writeFileSync(outputFilePath, html);
            console.log(`Converted ${file} to HTML.`);
        // }   

    
    }
});