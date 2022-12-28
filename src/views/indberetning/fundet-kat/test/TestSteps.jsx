import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Step1Test from "./Step1Test";
import Step2Test from "./Step2Test";

function TestSteps() {
  const [currenStepIndex, setCurrentStepIndex] = useState(0);

  const steps = [
    {
      component: (
        <Step1Test
          setCurrentStepIndex={setCurrentStepIndex}
          currenStepIndex={currenStepIndex}
        />
      ),
    },
    {
      component: <Step2Test setCurrentStepIndex={setCurrentStepIndex} />,
    },
  ];
  return (
    <Box
      display={"grid"}
      justifyContent="center"
      my={"4rem"}
      minW={{ base: "100vw", lg: "50vw" }}
      bg="brand.white"
      p="2rem"
    >
      {steps[currenStepIndex].component}
    </Box>
  );
}

export default TestSteps;
