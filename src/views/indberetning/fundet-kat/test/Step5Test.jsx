import { Text } from "@chakra-ui/react";
import StepTemplate from "./StepTemplate";

function Step5Test({ onCallback, onResultCallback }) {
  const onCallback_2 = () => {
    onResultCallback(5);
  };

  return (
    <StepTemplate
      heading={"Er den tam?"}
      btnText_1="Ja"
      btnText_2={"Nej"}
      onCallback_1={onCallback}
      onCallback_2={onCallback_2}
    >
      <Text variant="testtext">
        Hvis katten enten er aggresiv eller ikke er til at få fat på tryk ja
      </Text>
    </StepTemplate>
  );
}

export default Step5Test;
