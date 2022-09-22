import Layout from "./components/Layout";


const WhatIsPWA = () => (
  <div style={{ textAlign: "center" }}>
    A type of webpage/website - a web app
  </div>
);

WhatIsPWA.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default WhatIsPWA;
