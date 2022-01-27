import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChackraInputProps,
} from "@chakra-ui/react";

type InputProps = ChackraInputProps & {
  name: string;
  label?: string;
};

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{ bgColor: "gray.700" }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}
