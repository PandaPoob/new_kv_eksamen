import { Box, Heading } from "@chakra-ui/react";
import PageLayout from "../../components/layout/PageLayout";
import PageHead from "../../components/layout/PageHead";
import SplashHeader from "../../components/generics/SplashHeader";

function DokumenterFoldere({ sideData }) {
  return (
    <PageLayout>
      <PageHead {...sideData} />
      <SplashHeader imgMobPos={"35%"} {...sideData} />
      <Box py="4rem" px="1rem" display="grid" justifyContent="center">
        <Heading as="h2" size="heading2">
          Dokumenter og foldere kommer snart...
        </Heading>
      </Box>
    </PageLayout>
  );
}

export default DokumenterFoldere;
