import { Heading, Text, Flex, Icon } from "@chakra-ui/react";
import { BsEnvelope } from "react-icons/bs";
import PageLayout from "../../components/layout/PageLayout";
import PageHead from "../../components/layout/PageHead";
import SplashHeader from "../../components/generics/SplashHeader";
import Medlemsblade from "./Medlemsblade";

function Medlemsblad({ sideData, data }) {
  return (
    <PageLayout>
      <PageHead {...sideData} />
      <SplashHeader imgMobPos={"35%"} {...sideData} btnVariant={"redBtn"} />
      <Flex
        flexDir={"column"}
        justify="center"
        px="1rem"
        minH="50vh"
        alignItems={"center"}
      >
        <Heading as="h2" size="heading3" textAlign={"center"}>
          Her finder du medlemsbladet Kattens Venner
        </Heading>
        <Text textAlign={"center"} mt="1rem">
          Ønsker din virksomhed at annoncere i Kattens Venner så kontakt os
          gerne.
        </Text>
        <Flex
          alignItems={"center"}
          gap={"0.5rem"}
          mt="1rem"
          flexWrap={"wrap"}
          justify="center"
        >
          <Icon
            as={BsEnvelope}
            aria-label="Email"
            color="brand.blueCta"
            w={"2rem"}
            h={"1.8rem"}
          />
          <Text textAlign={"center"} fontWeight={"bold"} fontSize="smallH">
            marketing@kattens-vaern.dk
          </Text>
        </Flex>
      </Flex>
      <Medlemsblade data={data} />
    </PageLayout>
  );
}

export default Medlemsblad;
