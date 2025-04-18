"use client";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("tsx", tsx);

export default function CodeHighlight({
  children,
  language,
}: {
  children: string;
  language?: string;
}) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      showTooltip();
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  const showTooltip = () => {
    const tooltip = document.getElementById("tooltip");
    if (tooltip) {
      tooltip.style.visibility = "visible";
      setTimeout(() => {
        tooltip.style.visibility = "hidden";
      }, 1500);
    }
  };

  return (
    <div className="w-full" style={{ position: "relative" }}>
      <SyntaxHighlighter
        language={language ? language : "jsx"}
        style={{
          ...prism,
          'pre[class*="language-"]': {
            ...prism['pre[class*="language-"]'],
            paddingRight: "4rem",
          },
        }}
      >
        {children}
      </SyntaxHighlighter>
      <button
        onClick={handleCopy}
        style={{
          position: "absolute",
          top: 15,
          right: 10,
        }}
      >
        📋
      </button>
      <div id="tooltip">Copied!</div>
    </div>
  );
}
