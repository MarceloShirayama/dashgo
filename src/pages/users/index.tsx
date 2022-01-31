import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
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
import { useQuery } from "react-query";
import { Header } from "src/components/Header";
import Pagination from "src/components/Pagination";
import { Sidebar } from "src/components/Sidebar";
import useBreakpointValue from "src/hooks/useBreakpointValue";

export default function UserList() {
  const { data, isLoading, error } = useQuery(
    "users",
    async () => {
      const response = await fetch("http://localhost:3000/api/users");
      const data = await response.json();
      const users = data.users.map((user) => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          created_at: new Date(user.created_at).toLocaleString("pt-BR", {
            timeZone: "America/Sao_Paulo",
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
      });

      return users;
    },
    {
      staleTime: 1000 * 5, // 5 seconds,
    }
  );

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
          {isLoading ? (
            <Flex justifyContent={"center"}>
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justifyContent={"center"}>
              <Text>Falha ao obter dados dos usuários</Text>
            </Flex>
          ) : (
            <>
              {/* TODO: fix responsiveness on mobile  */}
              <Table colorScheme={"whiteAlpha"}>
                <Thead>
                  <Tr>
                    <Th
                      paddingX={["4", "4", "6"]}
                      color={"gray.300"}
                      width={"8"}
                    >
                      <Checkbox colorScheme={"pink"} />
                    </Th>
                    <Th>Usuário</Th>
                    {isWideVersion && <Th>Data de Cadastro</Th>}
                    <Th width={"8"}></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((user) => {
                    return (
                      <Tr key={user.id}>
                        <Td paddingX={["4", "4", "6"]}>
                          <Checkbox colorScheme={"pink"} />
                        </Td>
                        <Td paddingX={["4", "4", "6"]}>
                          <Box>
                            <Text fontWeight={"bold"}>{user.name}</Text>
                            <Text fontSize={"small"} color={"gray.300"}>
                              {user.email}
                            </Text>
                          </Box>
                        </Td>
                        {isWideVersion && (
                          <Td paddingX={["4", "4", "6"]}>{user.created_at}</Td>
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
                    );
                  })}
                </Tbody>
              </Table>
              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
