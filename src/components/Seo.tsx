import { Helmet } from "react-helmet";

type SeoProps = {
  title: string;
  description: string;
  lang?: string;
  ogImage?: string;
  ogTitle?: string;
  keywordsKey?: string; 
  ogDescription?: string;
};

export default function Seo({
  title,
  description,
  lang = "fr",
  ogImage,
  ogTitle,
  keywordsKey,
  ogDescription,
}: SeoProps) {
  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {keywordsKey && <meta name="keywords" content={keywordsKey} />}

      {/* Optional Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
