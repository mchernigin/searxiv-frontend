import "katex/dist/katex.min.css";
import Latex from "react-latex-next";

export type Result = {
  title: string;
  authors: string;
  description: string;
  url: string;
};

export default function SearchResults({ results }: { results: Result[] }) {
  const maxDescriptionWords = 50;
  return results.map((result, index) => (
    <div key={index} className="mx-auto mb-10 w-[95%] max-w-5xl">
      <a href={result.url} target="_blank" rel="noopener noreferrer">
        <div className="mb-2 text-lg underline underline-offset-4 text-red-700">
          <Latex>{result.title}</Latex>
        </div>
      </a>
      <div className="text-sm mb-2">By {result.authors}</div>
      <div className="text-sm">
        <Latex>
          {result.description.split(" ").length > maxDescriptionWords
            ? `${result.description
                .split(" ")
                .slice(0, maxDescriptionWords)
                .join(" ")
                .replace(/[,.!?:;]$/, "")}...`
            : result.description}
        </Latex>
      </div>
    </div>
  ));
}
