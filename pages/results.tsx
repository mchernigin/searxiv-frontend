import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

import Logo from "@/components/Logo";
import SearchBar from "@/components/SearchBar";
import GitHubLink from "@/components/GitHubLink";

type Result = {
  title: string;
  body: string;
  url: string;
};

function renderResults(results: any) {
  return results.map((result: any, index: number) => (
    <div key={index}>
      <div>{result.title}</div>
      <div>{result.description}</div>
    </div>
  ));
}

export default function Page({
  searchResults,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const results = renderResults(searchResults);
  return (
    <div className="flex flex-col justify-center p-10">
      <Logo />
      <SearchBar />
      <div>{results}</div>
      <GitHubLink />
    </div>
  );
}

export const getServerSideProps = (async (context: any) => {
  const { query } = context;
  const searchQuery = query.query?.replace(/^\"/, "").replace(/\"$/, "");

  const res = await fetch(
    `http://127.0.0.1:1818/search?query="${searchQuery}"`
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${res.url}`);
  }

  const searchResults = await res.json();

  return {
    props: {
      searchResults,
    },
  };
}) satisfies GetServerSideProps<{
  searchResults: Result[];
}>;
