import { Box, Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
  return (
    <Box as={"aside"} width={"64"} marginRight={"8"}>
      <Stack spacing={"12"} alignItems={"flex-start"}>
        <NavSection title="GERAL">
          <NavLink title={"Dashboard"} icon={RiDashboardLine} />
          <NavLink title={"Usuários"} icon={RiContactsLine} />
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
          <NavLink title={"Formulário"} icon={RiInputMethodLine} />
          <NavLink title={"Automação"} icon={RiGitMergeLine} />
        </NavSection>
      </Stack>
    </Box>
  );
}
