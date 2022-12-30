import { Heading, Button, Flex } from "@chakra-ui/react";

function StepTemplate({
  heading,
  children,
  btnText_1,
  onCallback_1,
  btnText_2,
  onCallback_2,
}) {
  return (
    <Flex
      flexDir={"column"}
      justifyContent="center"
      alignItems="center"
      gap="1rem"
    >
      <Heading as="h1" size={btnText_2 ? "heading3" : "heading2"}>
        {heading}
      </Heading>
      {children ? children : null}
      <Flex gap={"2rem"}>
        <Button alignSelf="center" variant="testBtn" onClick={onCallback_1}>
          {btnText_1}
        </Button>
        {btnText_2 && (
          <Button variant="testBtn" onClick={onCallback_2}>
            {btnText_2}
          </Button>
        )}
      </Flex>
    </Flex>
  );
}

export default StepTemplate;
