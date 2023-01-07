import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import BilledeSektion from "./BilledeSektion";
import Sektion from "./Sektion";


function ArtikelSide({ nyhedsData }) {
const acf = nyhedsData.acf;
  return (
    <Box>
      <Box
        position="relative"
        display={"grid"}
        gridTemplateColumns="1fr 1fr"
        gridTemplateRows="repeat(3, 1fr)"
        height={"60vh"}
        width={"100vw"}
        overflow="hidden"
        backgroundImage={acf.featuredimage}
        bgPosition={{ base: "center", lg: "center" }}
        bgSize="cover"
      >
        <Box position="absolute" top={"0"} width="100%" height={"100%"} bgColor="brand.darkGrey" opacity={"50%"}></Box>
        <Flex gridRow="2/3" gridColumn={{ base: "1/3", lg: "2/3" }} zIndex={"1"} align={"left"} justifyContent="center" direction={"column"} color="brand.white" gap="1rem" py={"2rem"} px={{ base: "2rem", lg: "4rem" }}>
          <Text>{acf.dato}</Text>
          <Heading as={"h1"} size={{ base: "heading2", lg: "heading2" }}>
            {acf.titel}
          </Heading>
          {acf.undertitel === "" ? <></> : <Text>{acf.undertitel}</Text>}
        </Flex>
      </Box>
      <Sektion sektionData={acf.sektionet} eksternlink={acf.eksternlink} linkurl={acf.linkurl} />
      {acf.sektionto_tf === true ? <Sektion type={acf.sektionto_tf} sektionData={acf.sektionto} /> : null}
      {acf.sektiontre_tf === true ? <Sektion sektionData={acf.sektiontre} /> : null}
      {acf.ekstra_billeder === true ? <BilledeSektion sektionData={acf.billedesektion} /> : null}
    </Box>
  );
}

export default ArtikelSide;
