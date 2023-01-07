import url from "../../api/url";
import Samarbejdspartnere from "../../views/samarbejdspartnere";

function SamarbejdspartnerePage({ data, sideData }) {
  return <Samarbejdspartnere sideData={sideData} data={data} />;
}
export async function getStaticProps() {
  const res = await fetch(`${url}samarbejdspartnere?per_page`);
  const data = await res.json();
  const res2 = await fetch(`${url}indholdsider/1749`);
  const sideData = await res2.json();

  return { props: { data: data, sideData: sideData } };
}

export default SamarbejdspartnerePage;
