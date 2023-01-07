const Select = {
  variants: {
    outline: {
      field: {
        borderRadius: "0.2rem",
        border: "1px solid",
        borderColor: "brand.borderGrey",
        fontSize: "xs",
        _hover: {
          borderColor: "brand.borderGrey",
          boxShadow: "none",
        },
        _focus: {
          borderColor: "brand.borderGrey",
          // boxShadow: "none",
        },
        "> option, > optgroup": {
          borderRadius: 0,
        },
      },
    },

    filled: {
      fontFamily: "heading",
      field: {
        borderRadius: "0.2rem",
        border: "1px solid",
        borderColor: "brand.borderGrey",
        p: "0.5rem 1rem",
        px: "1rem",
        maxW: "12rem",
        bg: "white",
        color: "brand.redCta",
        height: "auto",
        fontSize: { base: "lg", lg: "xl" },
        fontFamily: "heading",
        _hover: {
          borderColor: "brand.borderGrey",
          boxShadow: "none",
          cursor: "pointer",
          bg: "white",
        },
        _focus: {
          bg: "white",
        },

        "> option, > optgroup": {
          borderRadius: 0,
          color: "brand.redCta",
          fontSize: "sm",
          fontFamily: "heading",
        },
      },
    },
  },
};
export default Select;
