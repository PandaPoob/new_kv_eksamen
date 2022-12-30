import { Text, Heading } from "@chakra-ui/react";
import StepTemplate from "./StepTemplate";

function Step4Test({ onCallback, onResultCallback }) {
  const onCallback_2 = () => {
    onResultCallback(4);
  };

  return (
    <StepTemplate
      heading={"Er katten herreløs?"}
      btnText_1="Ja"
      btnText_2={"Ved ikke"}
      onCallback_1={onCallback}
      onCallback_2={onCallback_2}
    >
      <>
        <Text variant="testtext">
          Vi ser katten som herreløs hvis den er vildtlevende{" "}
          <Text as="span" textDecor={"underline"}>
            eller
          </Text>{" "}
          er blevet væk fra sin ejer.
        </Text>
        <Heading as={"h2"} size="heading6" mt={"2rem"} alignSelf="flex-start">
          Hvis du er i tvivl:
        </Heading>
        <Text maxW="70ch">
          Først og fremmest læg mærke til katten. Hvis det er første gang, du
          støder på den, og den er pæn i pelsen og i øvrigt ser ud til at
          trives, er det muligt, at det bare er en ny ejerkat i området. Hold
          øje med, om katten begynder at blive tyndere og mere nusset i pelsen.
          Det kan være tegn på, at den er blevet væk.
          <br /> <br /> I ferieperioder skal man lige være lidt tålmodig, da
          kattens egen familie kan være på ferie. Derfor kan katten godt finde
          på at søge andet selskab i mellemtiden.
        </Text>
      </>
    </StepTemplate>
  );
}

export default Step4Test;
