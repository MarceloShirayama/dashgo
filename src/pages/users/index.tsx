import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "src/components/Header";
import Pagination from "src/components/Pagination";
import { Sidebar } from "src/components/Sidebar";
import useBreakpointValue from "src/hooks/useBreakpointValue";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />
      <Flex
        width={"100%"}
        mx={"auto"}
        my={"6"}
        paddingX={"6"}
        maxWidth={1480}
        minWidth={480}
      >
        <Sidebar />
        <Box flex={1} borderRadius={"8"} bg={"gray.800"} padding={"8"}>
          <Flex
            marginBottom={"8"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Heading size={"lg"} fontWeight={"normal"}>
              Usuários
            </Heading>
            <Link href={"/users/create"} passHref>
              <Button
                as="a"
                size={"sm"}
                fontSize={"sm"}
                colorScheme={"pink"}
                leftIcon={<Icon as={RiAddLine} fontSize={"20"} />}
              >
                Criar novo usuário
              </Button>
            </Link>
          </Flex>
          <Table colorScheme={"whiteAlpha"}>
            <Thead>
              <Tr>
                <Th paddingX={["4", "4", "6"]} color={"gray.300"} width={"8"}>
                  <Checkbox colorScheme={"pink"} />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de Cadastro</Th>}
                <Th width={"8"}></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td paddingX={["4", "4", "6"]}>
                  <Checkbox colorScheme={"pink"} />
                </Td>
                <Td paddingX={["4", "4", "6"]}>
                  <Box>
                    <Text fontWeight={"bold"}>Marcelo Shirayama</Text>
                    <Text fontSize={"small"} color={"gray.300"}>
                      marcelo@mail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && (
                  <Td paddingX={["4", "4", "6"]}>02 de Janeiro, 2022</Td>
                )}
                <Td paddingX={["4", "4", "6"]}>
                  <Button
                    as="a"
                    size={"sm"}
                    fontSize={["small", "small", "sm"]}
                    colorScheme={"purple"}
                    leftIcon={
                      <Icon as={RiPencilLine} fontSize={["14", "16"]} />
                    }
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td paddingX={["4", "4", "6"]}>
                  <Checkbox colorScheme={"pink"} />
                </Td>
                <Td paddingX={["4", "4", "6"]}>
                  <Box>
                    <Text fontWeight={"bold"}>Marcelo Shirayama</Text>
                    <Text fontSize={"small"} color={"gray.300"}>
                      marcelo@mail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && (
                  <Td paddingX={["4", "4", "6"]}>02 de Janeiro, 2022</Td>
                )}
                <Td paddingX={["4", "4", "6"]}>
                  <Button
                    as="a"
                    size={"sm"}
                    fontSize={["small", "small", "sm"]}
                    colorScheme={"purple"}
                    leftIcon={
                      <Icon as={RiPencilLine} fontSize={["14", "16"]} />
                    }
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td paddingX={["4", "4", "6"]}>
                  <Checkbox colorScheme={"pink"} />
                </Td>
                <Td paddingX={["4", "4", "6"]}>
                  <Box>
                    <Text fontWeight={"bold"}>Marcelo Shirayama</Text>
                    <Text fontSize={"small"} color={"gray.300"}>
                      marcelo@mail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && (
                  <Td paddingX={["4", "4", "6"]}>02 de Janeiro, 2022</Td>
                )}
                <Td paddingX={["4", "4", "6"]}>
                  <Button
                    as="a"
                    size={"sm"}
                    fontSize={["small", "small", "sm"]}
                    colorScheme={"purple"}
                    leftIcon={
                      <Icon as={RiPencilLine} fontSize={["14", "16"]} />
                    }
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td paddingX={["4", "4", "6"]}>
                  <Checkbox colorScheme={"pink"} />
                </Td>
                <Td paddingX={["4", "4", "6"]}>
                  <Box>
                    <Text fontWeight={"bold"}>Marcelo Shirayama</Text>
                    <Text fontSize={"small"} color={"gray.300"}>
                      marcelo@mail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && (
                  <Td paddingX={["4", "4", "6"]}>02 de Janeiro, 2022</Td>
                )}
                <Td paddingX={["4", "4", "6"]}>
                  <Button
                    as="a"
                    size={"sm"}
                    fontSize={["small", "small", "sm"]}
                    colorScheme={"purple"}
                    leftIcon={
                      <Icon as={RiPencilLine} fontSize={["14", "16"]} />
                    }
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
