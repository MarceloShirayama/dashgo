import { Icon, Link, LinkProps, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

type NavSectionProps = LinkProps & {
  title: string;
  icon: IconType;
};

export function NavLink({ title, icon, ...rest }: NavSectionProps) {
  return (
    <Link display={"flex"} alignItems={"center"} {...rest}>
      <Icon as={icon} />
      <Text marginLeft={"4"} fontWeight={"medium"}>
        {title}
      </Text>
    </Link>
  );
}
