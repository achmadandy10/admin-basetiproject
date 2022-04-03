import Head from "next/head";
import { FC } from "react";

type SEOProps = {
  title: string,
  description: string,
}

export const SEO: FC<SEOProps> = ({title, description}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="app icon" href="./favicon.ico" type="image/x-icon" />
    </Head>
  )
}