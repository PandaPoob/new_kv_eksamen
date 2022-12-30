import { Text, Accordion } from "@chakra-ui/react";
import StepTemplate from "./StepTemplate";
import OremarkeAccorItem from "../OremarkeAccorItem";

function Step6Test({ onResultCallback, skipped }) {
  const onCallback_1 = () => {
    const result = skipped ? 1 : 6;

    onResultCallback(result);
  };
  const onCallback_2 = () => {
    const result = skipped ? 2 : 7;

    onResultCallback(result);
  };

  return (
    <StepTemplate
      heading={"Har katten øremærke?"}
      btnText_1="Ja"
      btnText_2={"Nej"}
      onCallback_1={onCallback_1}
      onCallback_2={onCallback_2}
    >
      <>
        <Text variant="testtext">
          Hvis du ikke kan aflæse det skal du stadig trykke ja.
        </Text>
        <Accordion
          minW={{ base: "95vw", md: "28rem" }}
          maxW={{ md: "28rem" }}
          display={"grid"}
          allowToggle
          bg={"brand.white"}
          color="brand.blue"
          boxShadow={"1px 2px 6px 1px #B8B8B8"}
          borderRadius="0.2rem"
        >
          <OremarkeAccorItem />
        </Accordion>
      </>
    </StepTemplate>
  );
}

export default Step6Test;
