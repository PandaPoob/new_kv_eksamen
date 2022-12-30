import { Heading, Button, Flex, Box } from "@chakra-ui/react";
import { m, AnimatePresence } from "framer-motion";

function StepTemplate({
  heading,
  children,
  btnText_1,
  onCallback_1,
  btnText_2,
  onCallback_2,
}) {
  return (
    <>
      <AnimatePresence>
        <Box
          as={m.div}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          key="resultat"
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "linear" }}
        >
          <Flex
            flexDir={"column"}
            justifyContent="center"
            alignItems="center"
            gap="1rem"
          >
            <Heading
              as="h1"
              size={btnText_2 ? "heading3" : "heading2"}
              textAlign="center"
            >
              {heading}
            </Heading>
            {children ? children : null}
            <Flex gap={{ base: "1rem", md: "2rem" }} flexWrap="wrap">
              <Button
                alignSelf="center"
                variant="testBtn"
                onClick={onCallback_1}
              >
                {btnText_1}
              </Button>
              {btnText_2 && (
                <Button variant="testBtn" onClick={onCallback_2}>
                  {btnText_2}
                </Button>
              )}
            </Flex>
          </Flex>
        </Box>
      </AnimatePresence>
    </>
  );
}

export default StepTemplate;
