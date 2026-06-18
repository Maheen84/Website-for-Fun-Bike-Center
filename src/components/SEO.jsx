import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description }) => {
  const siteName = "Fun Bike Center";
  return (
    <Helmet>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || "San Diego's Trusted Powersports Dealer Since Day One. New and pre-owned motorcycles, ATVs, UTVs, and watercraft from the brands you trust."} />
    </Helmet>
  );
};

export default SEO;
