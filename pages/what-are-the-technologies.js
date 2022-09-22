import Layout from './components/Layout';

const WhatAreTheTechnologies = () => (
  <div style={{ textAlign: "center" }}>
    These are Service Workers, Manifests, and Other Web API
  </div>
);

WhatAreTheTechnologies.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default WhatAreTheTechnologies;