import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react";
import Link from "next/link";
import { IconType } from "react-icons";

type NavSectionProps = LinkProps & {
  title: string;
  icon: IconType;
  href: string;
};

export function NavLink({ title, icon, href, ...rest }: NavSectionProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display={"flex"} alignItems={"center"} {...rest}>
        <Icon as={icon} />
        <Text marginLeft={"4"} fontWeight={"medium"}>
          {title}
        </Text>
      </ChakraLink>
    </Link>
  );
}
