import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

import Logo from "@/components/Logo";
import SearchBar from "@/components/SearchBar";
import GitHubLink from "@/components/GitHubLink";
import SearchResults, { Result } from "@/components/SearchResults";
import Footer from "@/components/Footer";

export default function Page({
  searchResults,
  indexSize
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="flex flex-col justify-center p-10">
      <Logo />
      <SearchBar />
      <SearchResults results={searchResults}/>
      <GitHubLink />
      <Footer indexSize={indexSize} />
    </div>
  );
}

export const getServerSideProps = (async (context: any) => {
  const { query } = context;
  const searchQuery = query.query?.replace(/^\"/, "").replace(/\"$/, "");

  const results = await fetch(
    `${process.env.SEARXIV_API}/search?query="${searchQuery}"`
  );
  if (!results.ok) {
    throw new Error(`Failed to fetch data from ${results.url}`);
  }
  const searchResults = await results.json();

  const size = await fetch(`${process.env.SEARXIV_API}/index-size`);
  if (!size.ok) {
    throw new Error(`Failed to fetch data from ${size.url}`);
  }
  const indexSize = await size.json();

  return {
    props: {
      searchResults,
      indexSize,
    },
  };
}) satisfies GetServerSideProps<{
  searchResults: Result[];
}>;
