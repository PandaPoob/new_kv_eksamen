import { InputControl } from "formik-chakra-ui";
import * as Yup from "yup";

const FullNameFieldInitialValue = (formState) => {
  return {
    fullName: formState?.fullName || "",
  };
};

const FullNameFieldValidation = () => {
  return {
    fullName: Yup.string().required("*Navn er påkrævet"),
  };
};

function FullNameField({ label }) {
  return (
    <InputControl
      minH="6rem"
      name="fullName"
      label={label}
      inputProps={{ autoComplete: "off" }}
      labelProps={{ pb: 1 }}
      mt={4}
    />
  );
}

export { FullNameFieldInitialValue, FullNameFieldValidation, FullNameField };
