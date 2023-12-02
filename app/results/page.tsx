"use client";

import { useSearchParams } from "next/navigation";
import { SearchBar } from "../search_bar";

async function makeSearch(query: string) {
  const res = await fetch(`http://127.0.0.1:1818/search?query="${query}"`);

  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${res.url}`);
  }

  const json = await res.json();

  let htmlComponents: React.JSX.Element[] = [];
  json.forEach((result: any) => {
    htmlComponents.push(
      <div>
        <div>{result.title}</div>
        <div>{result.description}</div>
        <div>{result.url}</div>
      </div>
    );
  });

  return htmlComponents;
}

export default async function Results() {
  const searchParams = useSearchParams();
  const query = searchParams
    .get("query")
    ?.replace(/^\"/, "")
    .replace(/\"$/, "");

  const searchResults = await makeSearch(query || "");

  return (
    <div className="flex flex-col justify-center p-10">
      <a href="/">
        <h1 className="text-5xl mx-auto text-center text-neutral-900 dark:text-neutral-200 font-semibold drop-shadow-lg">
          Sear<span className=" text-red-800">X</span>iv
        </h1>
      </a>
      <SearchBar />
      <div>{searchResults}</div>
      <a
        href="https://github.com/mchernigin/searxiv"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-0 right-0 m-4 inline-flex items-center px-4 py-2 rounded-xl shadow-xl text-neutral-200 dark:text-neutral-900 bg-neutral-900 dark:bg-neutral-200 hover:-translate-y-1 transition-transform duration-200"
      >
        <div className="p-1">Project on GitHub</div>
      </a>
    </div>
  );
}
