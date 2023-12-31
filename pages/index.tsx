import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

import React from "react";

import SearchBar from "@/components/SearchBar";
import Logo from "@/components/Logo";
import GitHubLink from "@/components/GitHubLink";
import Footer from "@/components/Footer";

export default function Page({
  indexSize,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Logo />
      <SearchBar />
      <GitHubLink />
      <Footer indexSize={indexSize} />
    </div>
  );
}

export const getServerSideProps = (async (context: any) => {
  const res = await fetch(`${process.env.SEARXIV_API}/index-size`);
  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${res.url}`);
  }
  const indexSize = await res.json();

  return {
    props: {
      indexSize,
    },
  };
}) satisfies GetServerSideProps<{
  indexSize: string;
}>;
