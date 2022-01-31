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
import { useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "src/components/Header";
import Pagination from "src/components/Pagination";
import { Sidebar } from "src/components/Sidebar";
import useBreakpointValue from "src/services/hooks/useBreakpointValue";
import { useUsers } from "src/services/hooks/useUsers";

export default function UserList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error } = useUsers(page);

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
              {!isLoading && isFetching && (
                <Spinner size={"sm"} color="gray.500" marginLeft={"4"} />
              )}
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
                  {data.users.map((user) => {
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
              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
