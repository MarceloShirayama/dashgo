import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { ActiveLink } from "../ActiveLink";

type NavSectionProps = LinkProps & {
  title: string;
  icon: IconType;
  href: string;
};

export function NavLink({ title, icon, href, ...rest }: NavSectionProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display={"flex"} alignItems={"center"} {...rest}>
        <Icon as={icon} />
        <Text marginLeft={"4"} fontWeight={"medium"}>
          {title}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
