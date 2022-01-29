import { Button, Flex, Stack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "src/components/Form/Input";
import * as yup from "yup";

type FormInputs = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup
    .string()
    .email("Deve ser um email válido!")
    .required("Email é obrigatório!"),
  password: yup
    .string()
    .required("Senha é obrigatória!")
    .min(8, "Senha deve ter no mínimo 8 caracteres!")
    .max(20, "Senha deve ter no máximo 20 caracteres!"),
});

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const handleSignIn: SubmitHandler<FormInputs> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="Email"
            {...register("email")}
            error={errors?.email}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            {...register("password")}
            error={errors?.password}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
