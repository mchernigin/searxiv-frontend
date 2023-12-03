import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

import Logo from "@/components/Logo";
import SearchBar from "@/components/SearchBar";
import GitHubLink from "@/components/GitHubLink";
import SearchResults, { Result } from "@/components/SearchResults";

export default function Page({
  searchResults,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="flex flex-col justify-center p-10">
      <Logo />
      <SearchBar />
      <SearchResults results={searchResults}/>
      <GitHubLink />
    </div>
  );
}

export const getServerSideProps = (async (context: any) => {
  const { query } = context;
  const searchQuery = query.query?.replace(/^\"/, "").replace(/\"$/, "");

  const res = await fetch(
    `${process.env.SEARXIV_API}/search?query="${searchQuery}"`
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
