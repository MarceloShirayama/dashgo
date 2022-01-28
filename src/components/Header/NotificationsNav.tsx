import { HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export function NotificationsNav() {
  return (
    <HStack
      spacing={["6", "8"]}
      marginX={["6", "8"]}
      marginY={"1"}
      paddingRight={["6", "8"]}
      color={"gray.300"}
      borderRightWidth={1}
      borderColor={"gray.500"}
    >
      <Icon as={RiNotificationLine} fontSize={"20"} />
      <Icon as={RiUserAddLine} fontSize={"20"} />
    </HStack>
  );
}
