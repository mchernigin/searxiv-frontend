"use client";

import { useRouter, NextRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SearchBar() {
  const router: NextRouter = useRouter();
  const { query: rawQuery } = router.query;
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const resolvedQuery = Array.isArray(rawQuery) ? rawQuery[0] : rawQuery;
      setQuery(resolvedQuery?.replace(/^\"/, "").replace(/\"$/, "") ?? "");
    };
    fetchData();
  }, [rawQuery]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = formData.get("query");
    router.push(`/results?query="${query}"`);
  };

  return (
    <div
      id="search"
      className="relative flex flex-row max-w-[75%] my-12  h-14 mx-auto border-2 border-neutral-900 dark:border-neutral-100 rounded-xl shadow-xl bg-neutral-100 dark:bg-neutral-900 overflow-hidden"
    >
      <form onSubmit={onSubmit} className="flex w-full">
        <input
          className="h-full w-[40em] flex-grow outline-none p-4 pr-0 text-lg text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-900 placeholder-neutral-400"
          type="text"
          id="search"
          name="query"
          autoComplete="off"
          defaultValue={query}
          placeholder="Search for computer science papers on arxiv.org..."
        />
        <button
          className="w-[10%] min-w-[4em] h-full bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 text-sm font-semibold flex items-center justify-center"
          type="submit"
        >
          <svg
            className="dark:fill-neutral-900 fill-neutral-100 scale-[.60]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </button>
      </form>
    </div>
  );
}
