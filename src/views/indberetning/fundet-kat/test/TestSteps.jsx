import { Box } from "@chakra-ui/react";
import { useState } from "react";
import TestResult from "./TestResult";
import Step1Test from "./Step1Test";
import Step2Test from "./Step2Test";
import Step3Test from "./Step3Test";

function TestSteps() {
  const [currenStepIndex, setCurrentStepIndex] = useState(0);
  const [result, setResult] = useState("");

  const onCallback = () => {
    setCurrentStepIndex(currenStepIndex + 1);
  };

  const onResultCallback = (value) => {
    setResult(value);
  };

  const steps = [
    {
      component: <Step1Test onCallback={onCallback} />,
    },
    {
      component: (
        <Step2Test
          setCurrentStepIndex={setCurrentStepIndex}
          onCallback={onCallback}
        />
      ),
    },
    {
      component: (
        <Step3Test
          onCallback={onCallback}
          onResultCallback={onResultCallback}
        />
      ),
    },
  ];
  return (
    <Box
      display={"grid"}
      justifyContent="center"
      mt="-6rem"
      alignItems={"center"}
      mx="1rem"
    >
      {result ? (
        <TestResult
          result={result}
          setCurrentStepIndex={setCurrentStepIndex}
          setResult={setResult}
        />
      ) : (
        steps[currenStepIndex].component
      )}
    </Box>
  );
}

export default TestSteps;
