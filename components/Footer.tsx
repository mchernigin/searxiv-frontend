import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

export default function Footer({
  indexSize,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="mx-auto p-4 text-sm text-neutral-400">
      <p>Currently in index: {indexSize} papers all from computer science topic</p>
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
