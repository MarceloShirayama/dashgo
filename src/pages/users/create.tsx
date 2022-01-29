import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "src/components/Form/Input";
import { Header } from "src/components/Header";
import { Sidebar } from "src/components/Sidebar";
import * as yup from "yup";

type FormInputs = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório!"),
  email: yup
    .string()
    .email("Deve ser um email válido!")
    .required("Email é obrigatório!"),
  password: yup
    .string()
    .required("Senha é obrigatória!")
    .min(8, "Senha deve ter no mínimo 8 caracteres!")
    .max(20, "Senha deve ter no máximo 20 caracteres!"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais!"),
});

export default function CreateUser() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const handleCreateUser: SubmitHandler<FormInputs> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Box>
      <Header />
      <Flex
        width={"100%"}
        mx={"auto"}
        my={["4", "6"]}
        paddingX={["4", "6"]}
        maxWidth={1480}
        minWidth={480}
      >
        <Sidebar />
        <Box
          as="form"
          flex={1}
          borderRadius={["6", "8"]}
          bg={"gray.800"}
          padding={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size={"lg"} fontWeight={"normal"}>
            Criar usuário
          </Heading>
          <Divider marginY={["4", "6"]} borderColor={"gray.700"} />
          <VStack spacing={["6", "8"]}>
            <SimpleGrid
              minChildWidth={"240px"}
              spacing={["6", "8"]}
              width={"100%"}
            >
              <Input
                name="name"
                label="Nome completo"
                {...register("name")}
                error={errors?.name}
              />
              <Input
                name="email"
                label="E-mail"
                type={"email"}
                {...register("email")}
                error={errors?.email}
              />
            </SimpleGrid>
            <SimpleGrid
              minChildWidth={"240px"}
              spacing={["6", "8"]}
              width={"100%"}
            >
              <Input
                name="password"
                label="Senha"
                type={"password"}
                {...register("password")}
                error={errors?.password}
              />
              <Input
                name="passworpassword
                password_confirmation"
                label="Confirmação da senha"
                type={"password"}
                {...register("password_confirmation")}
                error={errors?.password_confirmation}
              />
            </SimpleGrid>
          </VStack>
          <Flex marginTop={["6", "8"]} justifyContent={"flex-end"}>
            <HStack spacing={"4"}>
              <Link href={"/users"} passHref>
                <Button as="a" colorScheme={"whiteAlpha"}>
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                isLoading={isSubmitting}
                colorScheme={"pink"}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
