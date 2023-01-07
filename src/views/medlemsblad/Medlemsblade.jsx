import { Box, Heading, Flex, Select, Link } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";

function Medlemsblade({ data }) {
  const arstal = data.map((a) => {
    return a.acf.arstal;
  });
  const filterOpt = [...new Set(arstal)];
  const [arFilter, setArFilter] = useState(filterOpt[0]);

  return (
    <Box
      bg={"brand.darkGrey"}
      borderBottom="1px solid"
      borderColor="brand.redCta"
      py="5rem"
      px="1rem"
    >
      <Flex
        justifyContent={"center"}
        alignItems="center"
        mb="2.5rem"
        gap={{ base: "0.5rem", md: "2rem" }}
        flexWrap="wrap"
      >
        <Heading as={"h3"} size="heading2" color="white">
          Medlemsbladet for
        </Heading>
        <Select
          maxW={"12rem"}
          flexShrink={1}
          variant={"filled"}
          focusBorderColor="blueKv"
          colorScheme={"blueKv"}
          icon={<BsChevronDown />}
          iconColor="brand.blue"
          iconSize="2rem"
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

      <Flex
        justifyContent={"center"}
        alignItems="center"
        gap={"2rem"}
        flexWrap="wrap"
      >
        {data.map((blad) => {
          if (blad.acf.arstal === arFilter) {
            console.log(blad);
            return (
              <AnimatePresence key={blad.id}>
                <Box
                  initial={{ opacity: 0, y: "10%" }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  key="medlemsblad"
                  exit={{ opacity: 0, y: "10%" }}
                  transition={{ duration: 40, ease: "linear" }}
                  as={m.div}
                >
                  <Link
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
                </Box>
              </AnimatePresence>
            );
          }
        })}
      </Flex>
    </Box>
  );
}

export default Medlemsblade;
