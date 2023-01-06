import { Box, Heading, Text, Flex, Select, Link } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";

function Medlemsblade({ data }) {
  console.log(data);
  const arstal = data.map((a) => {
    return a.acf.arstal;
  });
  const filterOpt = [...new Set(arstal)];
  const [arFilter, setArFilter] = useState(filterOpt[0]);

  console.log(arFilter);

  return (
    <Box
      bg={"brand.darkGrey"}
      borderBottom="1px solid"
      borderColor="brand.redCta"
      py="4rem"
    >
      <Flex justifyContent={"center"} alignItems="center" mb="2rem">
        <Heading as={"h3"} size="heading2" color="white">
          Medlemsbladet for
        </Heading>
        <Select
          variant={"filled"}
          focusBorderColor="blueKv"
          colorScheme={"blueKv"}
          icon={<BsChevronDown />}
          iconColor="brand.blue"
          iconSize="1rem"
          _hover={{ cursor: "pointer" }}
          onChange={(event) => setArFilter(event.target.value)}
        >
          {filterOpt.map((a) => {
            return (
              <option key={a} value={a}>
                {a}
              </option>
            );
          })}
        </Select>
      </Flex>
      <Flex justifyContent={"center"} alignItems="center" gap={"2rem"}>
        {data.map((blad) => {
          if (blad.acf.arstal === arFilter) {
            console.log(blad);
            return (
              <Link
                key={blad.id}
                isExternal
                minH={"18rem"}
                minW={"14rem"}
                href={blad.acf.link}
                transition="all .2s ease-in-out"
                _hover={{
                  transform: "translateY(-0.5rem) translateX(0.2rem)",
                }}
              >
                <Box position="relative" h={"18rem"} w={"14rem"}>
                  <Image
                    placeholder={"blur"}
                    blurDataURL={blad.acf.billede}
                    src={blad.acf.billede}
                    alt={blad.acf.id}
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
              </Link>
            );
          }
        })}
      </Flex>
    </Box>
  );
}

export default Medlemsblade;
