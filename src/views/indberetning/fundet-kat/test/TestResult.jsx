import { Heading, Flex, Text, Icon, Button, Box } from "@chakra-ui/react";
import { BsTelephone, BsEnvelope } from "react-icons/bs";
import BukseTrick from "../BukseTrick";

function TestResult({ result, setCurrentStepIndex, setResult }) {
  function resetTest() {
    setCurrentStepIndex(0);
    setResult("");
  }

  function getResult() {
    if (result === 1) {
      return null;
    } else if (result === 2) {
      return null;
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
    }
  }

  return (
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
  );
}

export default TestResult;
