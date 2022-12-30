import { useDisclosure, Button } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useState } from "react";

const KommuneDrawer = dynamic(() => import("./FindKommune"), {
  ssr: false,
});

function FindKommuneDrawer({ heading }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setIsLoaded(true);
          onOpen();
        }}
        variant="redBtn"
        mt={"1.5rem"}
      >
        {heading}
      </Button>
      {isLoaded && (
        <KommuneDrawer
          isOpen={isOpen}
          onClose={onClose}
          onCloseComplete={() => {
            setIsLoaded(false);
          }}
        />
      )}
    </>
  );
}

export default FindKommuneDrawer;
