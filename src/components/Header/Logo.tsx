import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize="3xl"
      fontWeight="bold"
      letterSpacing="tight"
      width="64"
      color="gray.500"
    >
      dashgo
      <Text as="span" marginLeft="1" color="pink.500">
        .
      </Text>
    </Text>
  );
}
