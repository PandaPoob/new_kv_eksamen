import { Box, Heading, Button, Flex } from "@chakra-ui/react";

function Step2Test() {
  return (
    <Box>
      <Heading as="h1" size="heading2">
        Er katten i live?
      </Heading>
      <Flex gap={"2rem"}>
        <Button
          variant="testBtn"
          onClick={() => setCurrentStepIndex(currenStepIndex + 1)}
        >
          Ja
        </Button>
        <Button
          variant="testBtn"
          onClick={() => setCurrentStepIndex(currenStepIndex + 1)}
        >
          Nej
        </Button>
      </Flex>
    </Box>
  );
}

export default Step2Test;
