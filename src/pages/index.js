import url from "../api/url";
import ForsideIndhold from "../views/forside/ForsideIndhold";
import { useEffect } from "react";

function Home({ sideData, katteData, nyhedsData }) {
  useEffect(() => {
    alert("Dette er et eksamensprojekt. Det er ikke en officiel hjemmeside.");
  }, []);

  return (
    <ForsideIndhold
      sideData={sideData}
      katteData={katteData}
      nyhedsData={nyhedsData}
    />
  );
}

export async function getStaticProps() {
  const res = await fetch(`${url}indholdsider/165`);
  const sideData = await res.json();
  const res2 = await fetch(`${url}adoptionskatte?per_page`);
  const katteData = await res2.json();
  const res3 = await fetch(`${url}nyhedsartikler`);
  const nyhedsData = await res3.json();

  return {
    props: {
      sideData: sideData,
      katteData: katteData,
      nyhedsData: nyhedsData,
    },
  };
}

export default Home;
