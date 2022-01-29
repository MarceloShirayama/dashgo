import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

type ProfileProps = {
  showProfileData?: boolean;
};

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex alignItems={"center"}>
      {showProfileData && (
        <Box marginRight={["2", "4"]} textAlign={"right"}>
          <Text>Marcelo</Text>
          <Text color={"gray.300"} fontSize={"sm"}>
            marcelo@mail.com
          </Text>
        </Box>
      )}
      <Avatar
        size={showProfileData ? "lg" : "md"}
        marginRight={showProfileData ? "" : "2"}
        name="Marcelo Shirayama"
        src="https://avatars.githubusercontent.com/u/57074646?v=4"
      />
    </Flex>
  );
}
