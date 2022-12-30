import { Heading, Flex, Text, Icon, Button } from "@chakra-ui/react";
import { BsTelephone } from "react-icons/bs";

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
    }
  }

  return (
    <Flex flexDir={"column"} justifyContent="center" gap="1rem">
      <Heading as="h1" size="heading2" alignSelf="center" mb="2rem">
        Vi foreslår...
      </Heading>
      {getResult()}

      <Flex alignItems={"center"} mt="3rem">
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
