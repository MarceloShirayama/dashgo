import { Box, Stack, Text } from "@chakra-ui/react";

type NavSectionProps = {
  title: string;
  children: React.ReactNode;
};

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight={"bold"} color={"gray.400"} fontSize={"small"}>
        {title}
      </Text>
      <Stack spacing={"4"} marginTop={"8"} alignItems={"stretch"}>
        {children}
      </Stack>
    </Box>
  );
}
