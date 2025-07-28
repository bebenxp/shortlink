import Head from "next/head";

export default function Metadata({ title }) {
  return (
    <Head>
      <title>{title ? `Shortlink - ${title}` : "Shortlink"}</title>
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      {/* <link rel="icon" href="/favicon.png" /> */}
    </Head>
  );
}
