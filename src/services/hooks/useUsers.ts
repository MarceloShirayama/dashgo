import { useQuery } from "react-query";
import { User } from "src/types/user";
import { api } from "../api";

export const getUsers = async () => {
  const { data } = await api.get("users");
  const users: User[] = data.users.map((user: User) => {
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
};

export const useUsers = () => {
  return useQuery("users", getUsers, {
    staleTime: 1000 * 5, // 5 seconds,
  });
};
