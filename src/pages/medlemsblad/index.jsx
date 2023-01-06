import url from "../../api/url";
import Medlemsblad from "../../views/medlemsblad/Medlemsblad";

function MedlemsbladPage({ sideData, data }) {
  return <Medlemsblad sideData={sideData} data={data} />;
}

export async function getStaticProps() {
  const res = await fetch(`${url}medlemsblade?per_page`);
  const data = await res.json();
  const res2 = await fetch(`${url}indholdsider/1754`);
  const sideData = await res2.json();

  return { props: { data: data, sideData: sideData } };
}

export default MedlemsbladPage;
