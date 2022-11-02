import Head from "next/head";

const HeadPage = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property={title} content={description} key={title} />
    </Head>
  );
};

export default HeadPage;
