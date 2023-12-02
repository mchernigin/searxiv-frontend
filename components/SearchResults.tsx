export type Result = {
  title: string;
  description: string;
  url: string;
};

export default function SearchResults({ results }: { results: Result[] }) {
  const maxDescriptionWords = 50;
  return results.map((result, index) => (
    <div key={index} className="mx-auto mb-10 w-[95%] max-w-5xl">
      <a href={result.url} target="_blank" rel="noopener noreferrer">
        <div className="mb-3 text-lg underline underline-offset-4 text-red-700">
          {result.title}
        </div>
      </a>
      <div className="text-sm">
        {result.description.split(" ").length > maxDescriptionWords
          ? `${result.description
              .split(" ")
              .slice(0, maxDescriptionWords)
              .join(" ")
              .replace(/[,.!?:;]$/, "")}...`
          : result.description}
      </div>
    </div>
  ));
}
