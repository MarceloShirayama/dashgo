import { Flex } from "@chakra-ui/react";
import { Header } from "src/components/Header";
import { Sidebar } from "src/components/Sidebar";

export default function Dashboard() {
  return (
    <Flex direction={"column"} height={"100vh"}>
      <Header />
      <Flex width={"100%"} mx={"auto"} my={"6"} paddingX={"6"} maxWidth={1480}>
        <Sidebar />
      </Flex>
    </Flex>
  );
}
