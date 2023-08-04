// import React from 'react';
// import ReactMarkdown from 'react-markdown';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

// const MarkdownRenderer = ({ markdownContent }) => {
//   const renderers = {
//     code: ({ language, value }) => {
//       return (
//         <SyntaxHighlighter style={darcula} language={language}>
//           {value}
//         </SyntaxHighlighter>
//       );
//     },
//   };

//   return <ReactMarkdown renderers={renderers} children={markdownContent} />;
// };

// export default MarkdownRenderer;

import Markdown from "react-markdown";
// @ts-expect-error https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/407
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
// @ts-expect-error https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/407
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const markdownSource = `
# header

* list
* items


\`\`\`js
function () {}
\`\`\`

# Spotify Genre Classification

## References
- https://www.kaggle.com/code/muhammedtausif/top-songs-eda
- https://www.kaggle.com/datasets/mrmorj/dataset-of-songs-in-spotify

## Step 1: Import necessary libraries
\`\`\`python
import pandas as pd
import matplotlib.pyplot as plt
import warnings 
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler
from sklearn import preprocessing
from tensorflow import keras
warnings.simplefilter("ignore")
\`\`\`
`;

const TutorialMarkdown = ({ markdownContent }) => {
  console.log(markdownContent.replaceAll('```', '\`\`\`'))

  return (
    <Markdown
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");

          return !inline && match ? (
            <SyntaxHighlighter
              style={materialDark}
              PreTag="div"
              language={match[1]}
              children={String(children).replace(/\n$/, "")}
              {...props}
            />
          ) : (
            <code className={className ? className : ""} {...props}>
              {children}
            </code>
          );
        }
      }}
    >
      {markdownContent}
      {/* {markdownSource} */}
    </Markdown>
  );
}

export default TutorialMarkdown