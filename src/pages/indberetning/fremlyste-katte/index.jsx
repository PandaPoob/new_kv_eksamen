import url from "../../../api/url";
import EFKatte from "../../../components/efterlyst_fremlyst/EFKatte";

function FremlysteKattePage({ fremlystData, sideData }) {
  return (
    <EFKatte
      EFdata={fremlystData}
      sideData={sideData}
      url="/indberetning/fremlyste-katte/"
      type="fremlysning"
      imgMobilePos="20%"
    />
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://www.pandapoob.com/kea/18_mundtlig/new_kv_database/wp-json/wp/v2/fremlystekatte"
  );
  const fremlystData = await res.json();
  const res2 = await fetch(`${url}indholdsider/544`);
  const sideData = await res2.json();

  return {
    props: {
      fremlystData: fremlystData,
      sideData: sideData,
    },
  };
}

export default FremlysteKattePage;
