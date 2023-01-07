import { Box, Heading, Text, Flex, Divider, Icon } from "@chakra-ui/react";
import PageLayout from "../../components/layout/PageLayout";
import PageHead from "../../components/layout/PageHead";
import SplashHeader from "../../components/generics/SplashHeader";
import { BsEnvelope } from "react-icons/bs";
import SamarbejdspartnereListe from "./SamarbejdspartnereListe";

function Samarbejdspartnere({ data, sideData }) {
  const dyrlaegeData = data.filter((s) => {
    console.log(s.acf.type);
    return s.acf.type === "dyrlaege";
  });
  const internatData = data.filter((s) => {
    console.log(s.acf.type);
    return s.acf.type === "internat";
  });

  return (
    <PageLayout>
      <PageHead {...sideData} />
      <SplashHeader
        h1mobsize={"heading2"}
        imgMobPos={"25%"}
        h1WordBreak={"break-all"}
        {...sideData}
      />
      <Flex
        mx={"auto"}
        alignItems={"center"}
        justifyContent={{ base: "center", navbp: "space-between" }}
        minH={"50vh"}
        flexWrap="wrap"
        py="4rem"
        maxW={"container.xl"}
        px="1rem"
      >
        <Box mb={"2rem"} maxW={"35rem"}>
          <Heading
            as="h2"
            fontSize={{ base: "lg", lg: "xl" }}
            fontFamily={"heading"}
            mb={{ base: "1rem", lg: "2rem" }}
          >
            Vores samarbejdspartnere
          </Heading>
          <Text maxW={"70ch"}>
            I forbindelse med vores arbejde for at hjælpe de vilde katte har vi
            en række samarbejdspartnere. Disse partnere hjælper os til at kunne
            udføre vores arbejde og hjælpe kattene bedst muligt. Se listen over
            vores forskellige samarbejdspartnere nedenunder.
          </Text>
        </Box>

        <Box
          borderRadius={"0.2rem"}
          maxW={"35rem"}
          p="2rem"
          bg={"white"}
          boxShadow={"1px 2px 6px 1px #B8B8B8"}
        >
          <Heading as="h3" size="heading4" mb={"1rem"}>
            Ønsker du at blive samarbejdspartner?
          </Heading>
          <Text mb={"1.5rem"}>
            Ønsker du at blive samarbejdspartner skal du venligst kontakte
            direktør Mogens Wilbert via mail
          </Text>
          <Divider borderColor={"brand.borderGrey"} />
          <Flex mt={"1.5rem"} alignItems="center" gap={"1rem"}>
            <Icon
              as={BsEnvelope}
              color="brand.redCta"
              width="1.5rem"
              height="1.5rem"
            />
            <Text>mw@kattens-vaern.dk</Text>
          </Flex>
        </Box>
      </Flex>

      <Box bg={"brand.lightGrey"} px="1rem">
        <Flex
          mx={"auto"}
          alignItems="flex-start"
          justify="center"
          flexWrap={"wrap"}
          py={{ base: "4rem", lg: "6rem" }}
          maxW={"container.xl"}
          gap={{ base: "4rem", xl: "2rem" }}
          //px="4rem"
        >
          <SamarbejdspartnereListe
            heading={
              "Dyrlæger der samarbejder med Kattens Værns katteinspektører"
            }
            data={dyrlaegeData}
          />
          <SamarbejdspartnereListe
            heading={
              "Internater/pasningsordninger der samarbejder med Kattens Værn om pleje og pasning af katte"
            }
            data={internatData}
          />
        </Flex>
      </Box>
    </PageLayout>
  );
}

export default Samarbejdspartnere;
