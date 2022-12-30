import {
  Heading,
  Flex,
  Text,
  Icon,
  Button,
  Box,
  Link,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { BsTelephone, BsEnvelope } from "react-icons/bs";
import { ImDiamonds } from "react-icons/im";
import { m, AnimatePresence } from "framer-motion";
import NextLink from "next/link";
import BukseTrick from "../BukseTrick";
import FindKommuneDrawer from "../../../../components/features/FindKommuneDrawer";

function TestResult({ result, setCurrentStepIndex, setSkipped, setResult }) {
  function resetTest() {
    setCurrentStepIndex(0);
    setSkipped(false);
    setResult("");
  }

  function getResult() {
    if (result === 1) {
      return (
        <>
          <Text variant={"testtext"}>
            Når du finder en afdød kat, må du meget gerne sørge for at den er
            lagt ind til siden/et sted hvor den ikke er udsat for trafik, hvis
            muligt.
          </Text>
          <Text mt={"2rem"}>
            Hvis katten er død men øremærket burde det ikke være svært at
            identificere ejeren:
          </Text>
          <List
            display={"grid"}
            gap={{ base: "2.5rem", lg: "1.5rem" }}
            mt={{ base: "1rem", lg: "1rem" }}
          >
            <ListItem
              display={"flex"}
              flexDir={{ base: "column", lg: "row" }}
              gap={{ base: "1rem", lg: "0" }}
              alignItems="center"
              maxW="70ch"
            >
              <ListIcon
                as={ImDiamonds}
                fontSize={{ base: "md", lg: "xs" }}
                color="brand.redCta"
              />
              <Text fontSize={"xxs"}>
                Du kan kontakte Det Danske Katteregister tlf. 70 27 04 47 eller
                på{" "}
                <NextLink
                  href="https://www.katteregister.dk/"
                  passHref
                  prefetch={false}
                >
                  <Link isExternal variant="exLink">
                    www.katteregister.dk
                  </Link>
                </NextLink>
                , da de kan hjælpe med at identificere ejer.
              </Text>
            </ListItem>
            <ListItem
              display={"flex"}
              flexDir={{ base: "column", lg: "row" }}
              gap={{ base: "1rem", lg: "0" }}
              alignItems="center"
              maxW="70ch"
            >
              <ListIcon
                as={ImDiamonds}
                fontSize={{ base: "md", lg: "xs" }}
                color="brand.redCta"
              />
              <Text fontSize={"xxs"}>
                Hvis katten ikke findes i Det Danske Katteregister, kan man
                prøve hos{" "}
                <NextLink
                  href="https://www.dansk-katteregister.dk/catmissing/search"
                  passHref
                  prefetch={false}
                >
                  <Link isExternal variant="exLink">
                    Dansk Katteregister
                  </Link>
                </NextLink>
                . Her kan du søge på øremærke, også hvis ikke alle tegn er
                aflæselige.
              </Text>
            </ListItem>
            <ListItem
              display={"flex"}
              flexDir={{ base: "column", lg: "row" }}
              gap={{ base: "1rem", lg: "0" }}
              alignItems="center"
              maxW="70ch"
            >
              <ListIcon
                as={ImDiamonds}
                fontSize={{ base: "md", lg: "xs" }}
                color="brand.redCta"
              />
              <Text fontSize={"xxs"}>
                Hvis katten er øremærket, er den højst sandsynligt også chippet.
                Derfor kan du, hvis øremærket er ulæseligt, tage katten med til
                nærmeste dyrlæge eller internat, som kan aflæse chippen og finde
                ejeren.
              </Text>
            </ListItem>
            <ListItem
              display={"flex"}
              flexDir={{ base: "column", lg: "row" }}
              gap={{ base: "1rem", lg: "0" }}
              alignItems="center"
              maxW="70ch"
            >
              <ListIcon
                as={ImDiamonds}
                fontSize={{ base: "md", lg: "xs" }}
                color="brand.redCta"
              />
              <Text fontSize={"xxs"}>
                Du kan også kontakte din kommune, hvis katten er afgået ved
                døden på grund af trafik, da det er dem der samler trafikdræbte
                dyr op på vejene i Danmark.
              </Text>
            </ListItem>
          </List>
        </>
      );
    } else if (result === 2) {
      return (
        <>
          <Text variant={"testtext"}>
            Når du finder en afdød kat, må du meget gerne sørge for at den er
            lagt ind til siden/et sted hvor den ikke er udsat for trafik, hvis
            muligt.
          </Text>
          <Text mt={"2rem"} maxW="70ch">
            Det er desværre svært at identificere en kat og finde ejeren når
            katten ikke har øremærke. Dog er der stadig en række ting du kan
            forsøge:
          </Text>
          <List
            display={"grid"}
            gap={{ base: "2.5rem", lg: "1.5rem" }}
            mt={{ base: "1rem", lg: "1rem" }}
          >
            <ListItem
              display={"flex"}
              flexDir={{ base: "column", lg: "row" }}
              gap={{ base: "1rem", lg: "0" }}
              alignItems="center"
              maxW="70ch"
            >
              <ListIcon
                as={ImDiamonds}
                fontSize={{ base: "md", lg: "xs" }}
                color="brand.redCta"
              />
              <Text fontSize={"xxs"}>
                Du kan forhøre dig i diverse relevante Facebookgrupper om nogen
                mangler deres kat.
              </Text>
            </ListItem>
            <ListItem
              display={"flex"}
              flexDir={{ base: "column", lg: "row" }}
              gap={{ base: "1rem", lg: "0" }}
              alignItems="center"
              maxW="70ch"
            >
              <ListIcon
                as={ImDiamonds}
                fontSize={{ base: "md", lg: "xs" }}
                color="brand.redCta"
              />
              <Text fontSize={"xxs"}>
                Selvom katten ikke har øremærke kan den stadig være chippet.
                Derfor kan du, hvis muligt, tage katten med til nærmeste dyrlæge
                eller internat, som kan hjælpe med at aflæse dette og finde
                ejer.
              </Text>
            </ListItem>
            <ListItem
              display={"flex"}
              flexDir={{ base: "column", lg: "row" }}
              gap={{ base: "1rem", lg: "0" }}
              alignItems="center"
              maxW="70ch"
            >
              <ListIcon
                as={ImDiamonds}
                fontSize={{ base: "md", lg: "xs" }}
                color="brand.redCta"
              />
              <Text fontSize={"xxs"}>
                Hvis katten er afgået ved døden på grund af trafik, kan du
                kontakte din kommune, da det er dem der samler trafikdræbte dyr
                op på vejene i Danmark.
              </Text>
            </ListItem>
          </List>
        </>
      );
    } else if (result === 3) {
      return (
        <>
          <Text variant={"testtext"}>
            Hvis katten er alvorligt tilskadekommen skal du ringe til Dyrenes
            Vagtcentral.
          </Text>
          <Text maxW="70ch">
            Hvis du finder en tilskadekommen kat, f.eks. påkørt eller ved fald,
            skal du ringe til Dyrenes Vagtcentral er en landsdækkende service,
            som vejleder i sager om dyr i nød på 1812. De har døgnåbent året
            rundt.
          </Text>
          <Flex
            mt={"1rem"}
            bg={"white"}
            boxShadow={"1px 2px 6px 1px #B8B8B8"}
            p="2rem"
            justifyContent={"center"}
            alignItems="center"
            gap="1rem"
          >
            <Icon
              color="brand.redCta"
              w={{ base: 6, md: 8 }}
              h={{ base: 6, md: 8 }}
              as={BsTelephone}
            />
            <Text fontWeight={"bold"} fontSize="md">
              1812
            </Text>
          </Flex>
        </>
      );
    } else if (result === 4) {
      return (
        <>
          <Box
            maxW="container.xl"
            display={"grid"}
            gridTemplateColumns={{
              lg: "1.5fr 2fr 1.5fr",
              xl: "1.2fr 2fr 1.2fr",
            }}
            gap={{ base: "2rem", lg: "2rem" }}
          >
            <Text
              variant={"testtext"}
              gridColumn={{ lg: "1/4", xl: "2/3" }}
              justifySelf={"center"}
            >
              Nogle gange kan det være svært at gennemskue om katten rent
              faktisk er herreløs. Hvis du er i tvivl er du altid velkommen til
              at kontakte os:
            </Text>
            <Flex
              gridColumn={{ lg: "1/3", xl: "2/3" }}
              bg={"white"}
              boxShadow={"1px 2px 6px 1px #B8B8B8"}
              justifyContent="space-between"
              p="2rem"
              flexWrap={"wrap"}
              gap={{ base: "1rem" }}
            >
              <Flex alignItems="center" gap="1rem" as={"dl"}>
                <Flex as="dt" alignItems={"center"}>
                  <Icon
                    aria-label="Email"
                    color="brand.redCta"
                    w={"1.8rem"}
                    h={"1.8rem"}
                    as={BsEnvelope}
                  />
                </Flex>
                <Text as={"dd"} fontWeight={"bold"} fontSize="smallH">
                  kv@kattens-vaern.dk
                </Text>
              </Flex>
              <Flex
                justifyContent={"center"}
                alignItems="center"
                gap="1rem"
                as={"dl"}
              >
                <Flex as="dt" alignItems={"center"}>
                  <Icon
                    aria-label="Telefonnummer"
                    color="brand.redCta"
                    w={"1.8rem"}
                    h={"1.8rem"}
                    as={BsTelephone}
                  />
                </Flex>

                <Text as={"dd"} fontWeight={"bold"} fontSize="smallH">
                  38 88 12 00
                </Text>
              </Flex>
            </Flex>

            <Box
              bg="white"
              boxShadow={"1px 2px 6px 1px #B8B8B8"}
              px="2rem"
              py={"1rem"}
            >
              <Text fontSize={"heading5"} mb={"0.5rem"}>
                Telefontider
              </Text>
              <Box
                as={"dl"}
                display="grid"
                gridTemplateColumns={"repeat(2, 1fr)"}
                fontSize={"xxs"}
                justify="space-between"
              >
                <Text as="dt">Man-Tors:</Text>
                <Text as="dd" fontWeight={"bold"}>
                  10:00 - 15:00
                </Text>
                <Text as="dt">Fre:</Text>
                <Text as="dd" fontWeight={"bold"}>
                  10:00 - 14:00
                </Text>
              </Box>
            </Box>
            <Box
              gridColumn={{ lg: "1/3", xl: "2/3" }}
              bg="white"
              boxShadow={"1px 2px 6px 1px #B8B8B8"}
              p="2rem"
            >
              <BukseTrick />
            </Box>
          </Box>
        </>
      );
    } else if (result === 5) {
      return (
        <>
          <Text variant={"testtext"}>
            Det er højst sandsynligt en vildtlevende kat. Derfor anbefaler vi at
            du kontakter Kattens Værns administration for at oprette en
            indfangningssag.
          </Text>

          <Flex alignSelf={"center"} gap="1rem" mt={"1rem"}>
            <FindKommuneDrawer heading={"Opret sag"} />
            <NextLink
              href={`/indberetning/opret-en-sag`}
              passHref
              prefetch={false}
            >
              <Link
                //maxW={"10rem"}
                variant={"blueBtn"}
                textAlign={"center"}
                mt={"1.5rem"}
              >
                Læs mere
              </Link>
            </NextLink>
          </Flex>
        </>
      );
    } else if (result === 6) {
      return (
        <>
          <Text variant={"testtext"}>
            Hvis katten er tam og har mærke/chip, er der mange måder du kan
            identificere ejer på:
          </Text>

          <List
            display={"grid"}
            gap={{ base: "2.5rem", lg: "1.5rem" }}
            mt={{ base: "1rem", lg: "1rem" }}
          >
            <ListItem
              display={"flex"}
              flexDir={{ base: "column", lg: "row" }}
              gap={{ base: "1rem", lg: "0" }}
              alignItems="center"
              maxW="70ch"
            >
              <ListIcon
                as={ImDiamonds}
                fontSize={{ base: "md", lg: "xs" }}
                color="brand.redCta"
              />
              <Text fontSize={"xxs"}>
                Kontakt Det Danske Katteregister på tlf. 70 27 04 47 eller på{" "}
                <NextLink
                  href="https://www.katteregister.dk/"
                  passHref
                  prefetch={false}
                >
                  <Link isExternal variant="exLink">
                    www.katteregister.dk
                  </Link>
                </NextLink>
                , da de kan hjælpe med at identificere ejer.{" "}
              </Text>
            </ListItem>

            <ListItem
              display={"flex"}
              flexDir={{ base: "column", lg: "row" }}
              gap={{ base: "1rem", lg: "0" }}
              alignItems="center"
              maxW="70ch"
            >
              <ListIcon
                as={ImDiamonds}
                fontSize={{ base: "md", lg: "xs" }}
                color="brand.redCta"
              />
              <Text fontSize={"xxs"}>
                Hvis katten ikke findes i Det Danske Katteregister, kan du prøve
                hos{" "}
                <NextLink
                  href="https://www.dansk-katteregister.dk/catmissing/search"
                  passHref
                  prefetch={false}
                >
                  <Link isExternal variant="exLink">
                    {" "}
                    Dansk Katteregister
                  </Link>
                </NextLink>
                .
              </Text>
            </ListItem>
            <ListItem
              display={"flex"}
              flexDir={{ base: "column", lg: "row" }}
              gap={{ base: "1rem", lg: "0" }}
              alignItems="center"
              maxW="70ch"
            >
              <ListIcon
                as={ImDiamonds}
                fontSize={{ base: "md", lg: "xs" }}
                color="brand.redCta"
              />
              <Text fontSize={"xxs"}>
                Du kan også tage katten til nærmeste dyrelæge eller internat som
                kan hjælpe med at identificere ejer, hvis katten er chippet.
                Dette er den højst sandsynligt, hvis den også er øremærket.
              </Text>
            </ListItem>
          </List>
          <Text mt={"2rem"} fontSize={"xxs"} maxW="75ch">
            Kattens Værn tager som udgangspunkt ikke chippede eller mærkede
            katte ind, da vores arbejde primært fokuserer på de herreløse katte,
            og mærket/chippen betyder at de har en registreret ejer.
          </Text>
        </>
      );
    } else if (result === 7) {
      return (
        <>
          <Text variant={"testtext"}>
            Hvis katten er tam og ikke har mærke/chip, er der stadig måder at
            identificere ejer på:{" "}
          </Text>

          <List
            display={"grid"}
            gap={{ base: "2.5rem", lg: "1.5rem" }}
            mt={{ base: "1rem", lg: "1rem" }}
          >
            <ListItem
              display={"flex"}
              flexDir={{ base: "column", lg: "row" }}
              gap={{ base: "1rem", lg: "0" }}
              alignItems="center"
              maxW="70ch"
            >
              <ListIcon
                as={ImDiamonds}
                fontSize={{ base: "md", lg: "xs" }}
                color="brand.redCta"
              />
              <Text fontSize={"xxs"}>
                Tjek om katten er efterlyst hos os{" "}
                <NextLink
                  href="/efterlysning/efterlyste-katte"
                  passHref
                  prefetch={false}
                >
                  <Link variant="inLink" fontSize={"xxs"}>
                    her
                  </Link>
                </NextLink>
                .
              </Text>
            </ListItem>

            <ListItem
              display={"flex"}
              flexDir={{ base: "column", lg: "row" }}
              gap={{ base: "1rem", lg: "0" }}
              alignItems="center"
              maxW="70ch"
            >
              <ListIcon
                as={ImDiamonds}
                fontSize={{ base: "md", lg: "xs" }}
                color="brand.redCta"
              />
              <Text fontSize={"xxs"}>
                {" "}
                Hvis du ikke fandt en efterlysning der matchede den kat du har
                fundet så overvej at lave en fremlysning hos os{" "}
                <NextLink
                  href="/indberetning/fremlys-kat"
                  passHref
                  prefetch={false}
                >
                  <Link variant="inLink" fontSize={"xxs"}>
                    her
                  </Link>
                </NextLink>
                .
              </Text>
            </ListItem>

            <ListItem
              display={"flex"}
              flexDir={{ base: "column", lg: "row" }}
              gap={{ base: "1rem", lg: "0" }}
              alignItems="center"
              maxW="70ch"
            >
              <ListIcon
                as={ImDiamonds}
                fontSize={{ base: "md", lg: "xs" }}
                color="brand.redCta"
              />
              <Text fontSize={"xxs"}>
                Hæng opslag op i området, hvor du spørger om nogen kender
                katten. Hør eventuelt også dine naboer om der er nogen der
                genkender den.
              </Text>
            </ListItem>
            <ListItem
              display={"flex"}
              flexDir={{ base: "column", lg: "row" }}
              gap={{ base: "1rem", lg: "0" }}
              alignItems="center"
              maxW="70ch"
            >
              <ListIcon
                as={ImDiamonds}
                fontSize={{ base: "md", lg: "xs" }}
                color="brand.redCta"
              />
              <Text fontSize={"xxs"}>
                Brug internettet til at fremlyse katten. Bl.a. i diverse
                Facebook eller hjemmesider som{" "}
                <NextLink
                  href="https://kattegale.dk/"
                  passHref
                  prefetch={false}
                >
                  <Link isExternal variant="exLink">
                    kattegale.dk
                  </Link>
                </NextLink>
                , eller på{" "}
                <NextLink
                  href="https://www.dyrenesbeskyttelse.dk/fremlysning/opret"
                  passHref
                  prefetch={false}
                >
                  <Link isExternal variant="exLink">
                    Dyrenes beskyttelse
                  </Link>
                </NextLink>
              </Text>
            </ListItem>
          </List>
          <Text mt={"2rem"} fontSize={"xxs"} maxW="75ch">
            Hvis ingen reagerer, kan du vælge at tage katten til dig, eller du
            kan forhøre dig ad, om der er plads på et af vores eller andre
            dyreværnsorganisationers internater. Du kan også selv forsøge at
            finde et nyt hjem til den. <br />
            <br /> Du bør først tage katten til dig, når du har forsøgt at finde
            dens retmæssige ejer. Hvis det var din kat, der var løbet væk, ville
            du sandsynligvis også sætte pris på, at der blev gjort en indsats
            for at forene dig med din kat, inden den fik lov til at blive. De
            fleste internater og dyrlæger går efter tommelfingerreglen om, at
            man fremlyser alt hvad man kan i minimum én uge, før man må overtage
            katten eller overdrage den til andre.
          </Text>
        </>
      );
    }
  }

  return (
    <>
      <AnimatePresence>
        <Box
          as={m.div}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          key="resultat"
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "linear" }}
        >
          <Flex flexDir={"column"} justifyContent="center" mb={"4rem"}>
            <Heading as="h1" size="heading2" alignSelf="center" mb="1rem">
              Vi foreslår...
            </Heading>
            {getResult()}

            <Flex alignItems={"center"} mt="3rem" alignSelf={"center"}>
              <Text>
                Ikke sikker på det resultat du fik? Tag testen igen{" "}
                <Button
                  variant="clean"
                  fontSize="xs"
                  px="0"
                  verticalAlign="normal"
                  minW={"unset"}
                  h="unset"
                  onClick={() => resetTest()}
                >
                  her
                </Button>
                .
              </Text>
            </Flex>
          </Flex>
        </Box>
      </AnimatePresence>
    </>
  );
}

export default TestResult;
