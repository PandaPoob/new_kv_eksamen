import url from "../../../api/url";
import EFKatte from "../../../components/efterlyst_fremlyst/EFKatte";

function EfterlysteKattePage({ efterlystData, sideData }) {
  return (
    <EFKatte
      EFdata={efterlystData}
      sideData={sideData}
      url="/efterlysning/efterlyste-katte/"
      type="efterlysning"
      imgMobilePos="10%"
    />
  );
}

export async function getStaticProps() {
  //const res = await fetch(`${url}efterlystekatte`);
  const res = await fetch(
    "https://www.pandapoob.com/kea/18_mundtlig/new_kv_database/wp-json/wp/v2/efterlystekatte"
  );
  const efterlystData = await res.json();
  const res2 = await fetch(`${url}indholdsider/328`);
  const sideData = await res2.json();

  return {
    props: {
      efterlystData: efterlystData,
      sideData: sideData,
    },
  };
}

export default EfterlysteKattePage;
