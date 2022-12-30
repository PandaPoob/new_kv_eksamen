import PageLayout from "../../../../components/layout/PageLayout";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import TestSteps from "./TestSteps";

function IndberetningTest() {
  return (
    <PageLayout>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <title>Fundet kat test</title>
        <meta
          name="description"
          content="Har du fundet en kat og er ikke sikker på hvad du skal gøre så tjek det her"
        />
      </Head>
      <Box display={"grid"} justifyContent="center" minH="100vh">
        <TestSteps />
      </Box>
    </PageLayout>
  );
}

export default IndberetningTest;
