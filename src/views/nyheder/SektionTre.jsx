import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function SektionTre({ sektionData }) {
  return (
    <Box py={{ base: "3rem", md: "6rem" }} px="1rem" display={"grid"} gridTemplateColumns={{ lg: "1fr 1fr" }} gap={{ base: "2rem", lg: "4rem" }} maxW="container.xl" m="auto">
      <Box>
        <Heading pb="1rem" as="h2" size="heading3">
          {sektionData.sektiontitel}
        </Heading>
        <Text>{sektionData.brodtekst}</Text>
      </Box>
      <Box position={"relative"} minH="22rem" width={"100%"} borderRadius="0.2rem" overflow={"hidden"}>
        <Image src={sektionData.artikelbillede} alt="artikelbillede" layout="fill" objectFit="cover" />
        {sektionData.billedbeskrivelse_tf === true ? (
          <Box position={"absolute"} width="100%" bottom={"0"} bg="brand.white" p="1rem">
            <Text>{sektionData.beskrivelsen}</Text>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
