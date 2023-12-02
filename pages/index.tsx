import React from "react";
import SearchBar from "@/components/SearchBar";
import Logo from "@/components/Logo";
import GitHubLink from "@/components/GitHubLink";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Logo />
      <SearchBar />
      <GitHubLink />
    </div>
  );
}
