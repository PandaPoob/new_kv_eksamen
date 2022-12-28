import { Box, Heading, Text, Button } from "@chakra-ui/react";

function Step1Test({ setCurrentStepIndex, currenStepIndex }) {
  return (
    <Box>
      <Heading as="h1" size="heading2">
        Hvad skal du gøre?
      </Heading>
      <Text variant="testtext">
        Hvis du er i tvivl om hvad du skal gøre hvis du har fundet en kat så
        besvar spørgsmålene og få svaret her.
      </Text>
      <Button
        variant="testBtn"
        onClick={() => setCurrentStepIndex(currenStepIndex + 1)}
      >
        Start
      </Button>
    </Box>
  );
}

export default Step1Test;
