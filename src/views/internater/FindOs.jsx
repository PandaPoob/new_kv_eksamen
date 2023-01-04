import { Box, Heading, Text, AspectRatio } from "@chakra-ui/react";
import Image from "next/image";

export default function FindOs({ data }) {
  return (
    <Box as="article" bg={"brand.white"} boxShadow="md" borderRadius="0.3rem" width={{ base: "100%", lg: "22rem" }} height={"auto"} overflow="hidden">
      <Box display={"grid"} gap="1rem" p="2rem">
        <Heading as="h4" size="heading4">
          {data.overskrift}
        </Heading>
        <Text>{data.adresse}</Text>
      </Box>
      <AspectRatio ratio={4 / 3}>
        <iframe src={data.maplink} />
      </AspectRatio>
    </Box>
  );
}
