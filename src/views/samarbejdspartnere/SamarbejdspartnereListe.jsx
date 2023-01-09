import { Box, Heading, Text, Flex } from "@chakra-ui/react";

function SamarbejdspartnereListe({ heading, data }) {
  console.log(data);

  return (
    <Box
      borderRadius={"0.2rem"}
      boxShadow={"md"}
      maxW="38.5rem"
      bg={"white"}
      p="2.5rem"
      display={"grid"}
      gridTemplateColumns={{ lg: "1fr 1fr" }}
      gridGap="1rem"
      rowGap="2rem"
    >
      <Heading
        as={"h2"}
        size="heading4"
        gridColumn={{ lg: " 1/3" }}
        borderBottom="1px solid"
        borderColor={"brand.borderGrey"}
        pb={"2rem"}
      >
        {heading}
      </Heading>

      {data.map((s) => {
        return (
          <Box key={s.id}>
            <Heading as={"h3"} size="heading6" mb={"0.5rem"}>
              {s.acf.navn}
            </Heading>
            <Text>{s.acf.adresse}</Text>
            <Text>{s.acf.by}</Text>
            <Flex as="dl">
              <Text as="dt">Telefonnummer:</Text>
              <Text as="dd" ml={"0.5rem"}>
                {s.acf.tlf}
              </Text>
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
}

export default SamarbejdspartnereListe;
