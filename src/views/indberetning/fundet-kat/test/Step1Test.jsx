import { Text } from "@chakra-ui/react";
import StepTemplate from "./StepTemplate";

function Step1Test({ onCallback }) {
  return (
    <StepTemplate
      heading={"Hvad skal du gøre?"}
      btnText_1="Start"
      onCallback_1={onCallback}
    >
      <Text variant="testtext">
        Hvis du er i tvivl om hvad du skal gøre hvis du har fundet en kat så
        besvar spørgsmålene og få svaret her.
      </Text>
    </StepTemplate>
  );
}

export default Step1Test;
