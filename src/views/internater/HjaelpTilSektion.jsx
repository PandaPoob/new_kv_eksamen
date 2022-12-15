import { Box, Heading } from "@chakra-ui/react";
import BlivArticle from "./BlivArticle";

export default function HjaelpTilSektion({ data }) {
  const hjaelptilData = data;
  const hjaelptilDataArr = Object.entries(hjaelptilData).map((e) => ({
    id: e[0],
    item: e[1],
  }));
  //remove empty entries (false)
  const cleanhjaelptilDataArr = hjaelptilDataArr.filter(
    (t) => t.item !== false
  );

  return (
    <Box
      id="blivfrivillig"
      as="section"
      bg={"brand.lightGrey"}
      display="grid"
      placeContent={"center"}
      py={{ base: "3rem", lg: "6rem" }}
      px="1rem"
    >
      <Box maxW={{base:"70ch", lg:"container.lg"}}>
        <Heading as="h2" size="heading2" textAlign={"center"}>
          Giv en hjælpende pote
        </Heading>
        <Box
          as="section"
          display="grid"
          gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap="3rem"
          alignItems={"start"}
          py="3rem"
        >
          {cleanhjaelptilDataArr.map((a) => (
            <BlivArticle key={a.id} {...a} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
