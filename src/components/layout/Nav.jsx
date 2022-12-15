import NextLink from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import NavGroup from "./NavGroup";
import { BsList } from "react-icons/bs";
import {
  useDisclosure,
  Flex,
  Box,
  Link,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";

const MobileMenuDrawer = dynamic(() => import("./NavDrawer"), {
  ssr: false,
});

function Nav({ children }) {
  const navData = [
    {
      titel: "Adopter",
      subTitel: [
        { navn: "Se kattene", link: "/adopter/adoptionskatte" },
        { navn: "Praktisk info", link: "/adopter/praktisk-info" },
      ],
    },
    {
      titel: "Gør en forskel",
      subTitel: [
        { navn: "Doner", link: "/gor-en-forskel/doner" },
        { navn: "Støt fast", link: "/gor-en-forskel/stot-fast" },
        { navn: "Bliv medlem", link: "/gor-en-forskel/bliv-medlem" },
        {
          navn: "Bliv plejefamilie",
          link: "/gor-en-forskel/bliv-plejefamilie",
        },
        { navn: "Sponsorer", link: "/gor-en-forskel/sponsorer" },
        {
          navn: "Kattene i testamentet",
          link: "/gor-en-forskel/kattene-i-testamentet",
        },
      ],
    },
    {
      titel: "Efterlysning",
      subTitel: [
        { navn: "Jeg har mistet min kat", link: "/efterlysning/mistet-kat" },
        { navn: "Efterlys en kat", link: "/efterlysning/efterlys-kat" },
        { navn: "Efterlyste katte", link: "/efterlysning/efterlyste-katte" },
      ],
    },
    {
      titel: "Indberetning",
      subTitel: [
        { navn: "Jeg har fundet en kat", link: "/indberetning/fundet-kat" },
        { navn: "Fremlys kat", link: "/indberetning/fremlys-kat" },
        { navn: "Fremlyste katte", link: "/indberetning/fremlyste-katte" },
      ],
    },
    {
      titel: "Katteklinikker",
      subTitel: [
        { navn: "Aalborg", link: "/katteklinikker/1258" },
        { navn: "Billund", link: "/katteklinikker/1253" },
        { navn: "Brøndby", link: "/katteklinikker/1169" },
        { navn: "Slagelse", link: "/katteklinikker/1203" },
      ],
    },
    {
      titel: "Om os",
      subTitel: [
        { navn: "Internater og åbningstider", link: "/om-os/internater" },
        { navn: "Vores arbejde", link: "/om-os/vores-arbejde" },
        { navn: "Hvad går pengene til?", link: "/om-os/penge-til" },
        { navn: "Medarbejderne", link: "/om-os/medarbejderne" },
      ],
    },
  ];
  const isMobile = useBreakpointValue({ base: true, navbp: false });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMenuLoaded, setIsMenuLoaded] = useState(false);
  const [oldScrollPosition, setOldScrollPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState("default");

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setOldScrollPosition(position);
      if (oldScrollPosition > window.scrollY) {
        setIsScrolling("true");
      } else {
        setIsScrolling("false");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [oldScrollPosition]);

  function getTopValue() {
    // hvis vi ruller op eller lige er loaded eller basketchanged set nav til at blive vist
    if (isScrolling === "true" || isScrolling === "default") {
      // setBasketChanged(false)
      return "0";
    } else {
      return "-5.1rem";
    }
  }

  return (
    <>
      <Box
        as={"header"}
        boxShadow="0 1px 8px -4px #737373"
        px={{ base: "1rem", md: "2rem" }}
        py="0.6rem"
        bg={"brand.white"}
        zIndex={"10"}
        position={"fixed"}
        w={"100%"}
        top={getTopValue()}
        left={0}
        transition={"top 0.3s"}
      >
        {isMobile ? (
          <Flex as={"nav"} justifyContent="space-between">
            <NextLink href={`/`} passHref prefetch={false}>
              <Link>
                <Image src={"/logo.svg"} alt={"logo"} height={50} width={50} />
              </Link>
            </NextLink>

            <Flex alignItems={"center"} gap="1rem">
              <NextLink href={`/stottemuligheder`} passHref prefetch={false}>
                <Link variant={"redBtn"}>Støt kattene</Link>
              </NextLink>

              <IconButton
                onClick={() => {
                  setIsMenuLoaded(true);
                  onOpen();
                }}
                aria-label="Open menu"
                color={"brand.blue"}
                bg="none"
                _hover={{ bg: "none" }}
                _focus={{ bg: "none" }}
                icon={<BsList size={45} />}
              />
              {isMenuLoaded && (
                <MobileMenuDrawer
                  navData={navData}
                  isOpen={isOpen}
                  onClose={onClose}
                  onCloseMenu={() => {
                    setIsMenuLoaded(false);
                  }}
                />
              )}
            </Flex>
          </Flex>
        ) : (
          <Flex as={"nav"} justifyContent="space-between" alignItems={"center"}>
            <Flex gap="1rem">
              <Box pr={"1rem"} py="0.2rem">
                <NextLink href={`/`} passHref prefetch={false}>
                  <Link>
                    <Image
                      src={"/logo.svg"}
                      alt={"logo"}
                      height={50}
                      width={50}
                    />
                  </Link>
                </NextLink>
              </Box>

              <Flex gap={"2.5rem"}>
                {navData.map((li) => (
                  <NavGroup key={li.titel} {...li} />
                ))}
              </Flex>
            </Flex>

            <Flex gap={"1rem"}>
              <NextLink
                href={"https://kattens-vaern-butik.dk/"}
                passHref
                prefetch={false}
              >
                <Link
                  isExternal
                  target="_blank"
                  alignSelf={"center"}
                  alignItems="center"
                  gap="0.2rem"
                  display="flex"
                  variant="exLink"
                >
                  Webshop
                </Link>
              </NextLink>

              <NextLink href={`/stottemuligheder`} passHref prefetch={false}>
                <Link variant={"redBtn"}>Støt kattene</Link>
              </NextLink>
            </Flex>
          </Flex>
        )}
      </Box>

      {children}
    </>
  );
}

export default Nav;
