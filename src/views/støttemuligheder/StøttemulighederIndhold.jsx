import PageLayout from "../../components/layout/PageLayout";
import PageHead from "../../components/layout/PageHead";
import SplashHeader from "../../components/generics/SplashHeader";
import SArticleMenu from "./SArticleMenu";

export default function StøttemulighederIndhold({ sideData }) {
  return (
    <PageLayout>
      <PageHead {...sideData} />
      <SplashHeader {...sideData} h1mobsize="heading2" />
      <SArticleMenu />
    </PageLayout>
  );
}
