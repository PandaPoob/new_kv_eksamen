import {
  Text,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

function OremarkeAccorItem() {
  return (
    <AccordionItem>
      <AccordionButton
        borderTopRadius="0.2rem"
        justifyContent={"space-between"}
        fontSize={"smallH"}
        bg={"brand.darkGrey"}
        color="brand.white"
        px="1.5rem"
        py="1.2rem"
        _hover={{ bg: "brand.blue" }}
        _focus={{ bg: "brand.blue" }}
      >
        Find øremærket
        <AccordionIcon as={BsChevronDown} color="brand.white" w={6} h={6} />
      </AccordionButton>

      <AccordionPanel p="2rem">
        <Text maxW="70ch">
          Øremærket burde du kunne se med det blotte øje og består typisk af tre
          bogstaver og tre tal.
          <br /> <br />
          Hvis der er et øremærke, men du har svært ved at tyde det, kan du
          prøve at smøre lidt fedtstof som smør, madolie eller læbepomade i øret
          på katten. Det burde få tatoveringen til at træde tydeligere frem.
          Hvis tatoveringen er lavet korrekt vil den være vendt modsat i hvert
          øre. Det vil sige, at det, der kan være svært at tyde i det ene øre,
          sandsynligvis er bevaret i det andet. Du kan også prøve at slukke
          lyset og lyse igennem kattens øre, fra bagsiden, med en lommelygte,
          for at få tatoveringen til at træde tydeligere frem.
          <br />
          <br />
          <Text as="span" fontSize={"xxs"}>
            *Hvis øremærket er usædvanligt er der højst sandsynligt tale om en
            udenlandsk kat. I dette tilfælde kan du prøve at tjekke om katten er
            efterlyst på Europetnet
          </Text>
        </Text>
      </AccordionPanel>
    </AccordionItem>
  );
}

export default OremarkeAccorItem;
