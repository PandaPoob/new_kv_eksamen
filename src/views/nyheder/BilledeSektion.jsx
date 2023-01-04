import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function BilledeSektion({sektionData}) {

    let imgChecker = () => {
        if (sektionData.img2 === "") return true
        else if (sektionData.img1 && sektionData.img2 !== "") return false;
    }
  return (
    <Box bg="brand.darkGrey" borderBottom={"3px solid"} borderColor="brand.redCta">
      {imgChecker() ? (
        <Box py={{ base: "3rem", md: "6rem" }} px="1rem" display={"grid"} maxW="container.xl" m="auto">
          <Box position={"relative"} minH="22rem" width={"100%"}>
            <Image src={sektionData.img1} alt="artikelbillede" layout="fill" objectFit="cover" />
          </Box>
        </Box>
      ) : (
        <Box
          py={{ base: "3rem", md: "6rem" }}
          px="1rem"
          display={"grid"}
          gridTemplateColumns={{ base: "auto", lg: "2fr 1fr" }}
          gridTemplateRows={{ base: "1fr", lg: "1fr 50fr 1fr" }}
          gap={{ base: "2rem", lg: "4rem" }}
          maxW="container.xl"
          m="auto"
        >
          <Box position={"relative"} minH="22rem" width={"100%"} gridRow={{ lg: "1/4" }}>
            <Image src={sektionData.img1} alt="artikelbillede" layout="fill" objectFit="cover" />
          </Box>
          <Box position={"relative"} minH="22rem" width={"100%"} gridRow={{ lg: "2/3" }}>
            <Image src={sektionData.img2} alt="artikelbillede" layout="fill" objectFit="cover" />
          </Box>
        </Box>
      )}
    </Box>
  );
}
