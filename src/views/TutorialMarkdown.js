import Markdown from "react-markdown";
// @ts-expect-error https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/407
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
// @ts-expect-error https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/407
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";


const TutorialMarkdown = ({ markdownContent }) => {
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