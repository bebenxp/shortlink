import Head from "next/head";

export default function Metadata({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="keywords"
        content="9lapak, situs 9lapak, 9lapak gacor, slot 9lapak, togel 9lapak, bonus 9lapak"
      />
      <meta
        name="description"
        content={title}
      />
      <meta property="og:url" content="https://www.9lapakgacor.com/" />
      <meta name="author" content="9LAPAK" />
      <meta name="publisher" content="9LAPAK" />
      <meta name="page-type" content="productdetailpage-desktop" />
      <meta name="title" content={title}/>
      <meta name="description" content={description}/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      {/* <link rel="icon" href="/favicon.png" /> */}
    </Head>
  );
}
