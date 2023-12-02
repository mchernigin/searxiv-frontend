import React from "react";
import { SearchBar } from "./search_bar"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <a href="/">
        <h1 className="text-5xl text-neutral-900 dark:text-neutral-200 font-semibold drop-shadow-lg">
          Sear<span className=" text-red-800">X</span>iv
        </h1>
      </a>
      <SearchBar />
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
