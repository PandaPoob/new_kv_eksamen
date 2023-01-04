import { Box, Heading, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import Image from "next/image";
import { ImDiamonds } from "react-icons/im";

export default function SektionTo({sektionData}) {
   
const undersektion = sektionData.undersektion;

const listData = undersektion.liste_group;
 
const listDataArr = Object.entries(listData).map((e) => ({
  id: e[0],
  item: e[1],
}));

//remove empty entries (false)
const cleanlistDataArr = listDataArr.filter((t) => t.item !== false && t.item !== "");


  return (
    <Box bg="brand.lightGrey">
      <Box py={{ base: "3rem", md: "6rem" }} px="1rem" display={"grid"} gridTemplateColumns={{ lg: "1fr 1fr" }} gap={{ base: "2rem", lg: "4rem" }} maxW="container.xl" m="auto">
        <Box position={"relative"} minH="22rem" width={"100%"} borderRadius="0.2rem" overflow="hidden">
          <Image src={sektionData.artikelbillede} alt="artikelbillede" layout="fill" objectFit="cover" />
          {sektionData.billedbeskrivelse_tf === true ? (
            <Box position={"absolute"} width="100%" bottom={"0"} bg="brand.white" p="1rem">
              <Text>{sektionData.beskrivelsen}</Text>
            </Box>
          ) : null}
        </Box>
        <Box>
          <Heading pb="1rem" as="h2" size="heading3">
            {sektionData.sektiontitel}
          </Heading>
          <Text>{sektionData.brodtekst}</Text>
          {sektionData.undersektion_tf === true ? (
            <Box pt="1.5rem">
              <Heading as="h3" size={"heading4"}>
                {undersektion.overskrift}
              </Heading>
              <Text pt="1rem">{undersektion.brodtekst}</Text>
              {undersektion.listepunkter_tf === true ? (
                <List pt="0.75rem" display={"grid"} gap="0.5rem">
                  {cleanlistDataArr.map((list) => (
                    <ListItem key={list.id} display={"flex"} alignItems="center">
                      <ListIcon as={ImDiamonds} color="brand.redCta" />
                      {list.item}
                    </ListItem>
                  ))}
                </List>
              ) : null}
            </Box>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
}
