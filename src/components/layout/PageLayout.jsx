import { Container } from "@chakra-ui/react";

function PageLayout({ children }) {
  return (
    <>
      <Container
        overflowX={"hidden"}
        maxW={"none"}
        mx={0}
        p={0}
        mt={{ base: "4.5rem", navbp: "5rem" }}
        minH={"100vh"}
      >
        {children}
      </Container>
    </>
  );
}

export default PageLayout;
