import { Heading, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

function BukseTrick() {
  return (
    <>
      <Heading as="h3" size="heading5" mb={"1rem"}>
        Prøv bukseelastik-tricket
      </Heading>
      <Text maxW="70ch">
        {`Hvis du ser katten ofte og er i tvivl om den er blevet væk, kan du
          sætte en løs bukseelastik om halsen på katten med teksten: "Hvem ejer
          mig/Hvem tager sig af mig" og så dit telefonnummer. Det burde få
          enhver katteejer til at reagere og melde tilbage, og derved kan du
          finde ud af om nogen passer den.`}
        <br /> <br />
        Det er vigtigt, at du fjerner elastikken igen, når du næste gang ser
        katten, så derfor skal du være sikker på, at du let kan komme til den og
        ser den ofte, før du prøver tricket. Det er også vigtigt, at
        bukseelastikken sidder meget løst, så katten ikke kommer til at sidde
        fast i den.
        <br /> <br />
        Har du ingen bukseelastik, kan du hos vores internater låne et halsbånd
        til formålet.
      </Text>
      <NextLink href={`/om-os/internater`} passHref prefetch={false}>
        <Link
          variant={"blueBtn"}
          textAlign={"center"}
          mt={"2rem"}
          mb={"1rem"}
          justifyContent="center"
        >
          Kontakt internat
        </Link>
      </NextLink>
    </>
  );
}
export default BukseTrick;
