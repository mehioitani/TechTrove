import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To TechTrove",
  description: "We Sell The Best Tech Products",
  keywords: "electronics,buy electronics,most known, quality brands",
};

export default Meta;
