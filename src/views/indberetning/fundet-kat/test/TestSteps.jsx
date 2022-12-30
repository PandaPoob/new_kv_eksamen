import { Box } from "@chakra-ui/react";
import { useState } from "react";
import TestResult from "./TestResult";
import Step1Test from "./Step1Test";
import Step2Test from "./Step2Test";
import Step3Test from "./Step3Test";
import Step4Test from "./Step4Test";
import Step5Test from "./Step5Test";
import Step6Test from "./Step6Test";

function TestSteps() {
  const [currenStepIndex, setCurrentStepIndex] = useState(0);
  const [skipped, setSkipped] = useState(false);
  const [result, setResult] = useState("");

  const onCallback = () => {
    setCurrentStepIndex(currenStepIndex + 1);
  };

  const onResultCallback = (value) => {
    window.scrollTo(0, 0);
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
          setSkipped={setSkipped}
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
    {
      component: (
        <Step4Test
          onCallback={onCallback}
          onResultCallback={onResultCallback}
        />
      ),
    },
    {
      component: (
        <Step5Test
          onCallback={onCallback}
          onResultCallback={onResultCallback}
        />
      ),
    },
    {
      component: (
        <Step6Test onResultCallback={onResultCallback} skipped={skipped} />
      ),
    },
  ];
  return (
    <Box
      display={"grid"}
      justifyContent="center"
      my={"2rem"}
      alignItems={"center"}
      mx="1rem"
    >
      {result ? (
        <TestResult
          result={result}
          setCurrentStepIndex={setCurrentStepIndex}
          setSkipped={setSkipped}
          setResult={setResult}
        />
      ) : (
        <Box>{steps[currenStepIndex].component}</Box>
      )}
    </Box>
  );
}

export default TestSteps;
