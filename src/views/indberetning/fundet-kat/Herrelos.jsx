import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import BukseTrick from "./BukseTrick";

function Herrelos() {
  return (
    <Box
      as="section"
      bg="brand.lightGrey"
      display={"grid"}
      justifyContent="center"
    >
      <Flex
        justifyContent="center"
        gap={"2rem"}
        maxW="container.xxl"
        py="4rem"
        px={"1rem"}
        flexWrap="wrap"
        alignItems={"center"}
      >
        <Box display={"grid"} justifyContent="center">
          <Heading as="h2" size="heading3" mb={"1rem"}>
            Virker katten herreløs?
          </Heading>
          <Text maxW="70ch">
            Først og fremmest: Læg mærke til katten. Hvis det er første gang, du
            støder på den, og den er pæn i pelsen og i øvrigt ser ud til at
            trives, er det muligt, at det bare er en ny ejerkat i området. Hold
            øje med, om katten begynder at blive tyndere og mere nusset i
            pelsen. Det kan være tegn på, at den er blevet væk. <br /> <br />I
            ferieperioder skal man lige være lidt tålmodig, da kattens egen
            familie kan være på ferie. Derfor kan katten godt finde på at søge
            andet selskab i mellemtiden.
            <br />
            Hvis katten er tam nok til, at du kan komme til den, skal du først
            og fremmest tjekke om, om den er øremærket eller chippet.{" "}
          </Text>
          <Heading as="h3" size="heading4" mt={"4rem"} mb={"1rem"}>
            Er katten tilskadekommen eller død?
          </Heading>
          <Text maxW="70ch">
            Hvis du finder en tilskadekommen kat, f.eks. påkørt eller ved fald,
            skal du ringe til Dyrenes Vagtcentral på 1812. De har døgnåbent året
            rundt. <br /> <br />
            Hvis du finder en afdød kat, må du meget gerne sørge for at den er
            lagt ind til siden/et sted hvor den ikke er udsat for trafik, hvis
            muligt. Hvis den er øremærket kan du følge planen under punktet
            “Hvis katten er tam og har mærke/chip” der står længere nede på
            siden.
            <br />
            Hvis den ikke er synligt mærket, kan du forhøre dig i diverse
            facebook grupper, eller tage katten med til en dyrlæge eller et
            internat, så kan de hjælpe dig med at aflæse katten. Du kan også
            kontakte kommunen, da det er dem der samler trafikdræbte dyr op på
            vejene i Danmark.
          </Text>
        </Box>
        <Flex
          maxW={"30rem"}
          flexDir={"column"}
          bg="brand.white"
          boxShadow="md"
          p="2rem"
          mt={{ base: "4rem", lg: "0" }}
        >
          <BukseTrick />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Herrelos;
