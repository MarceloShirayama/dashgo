import { useQuery } from "react-query";
import { User } from "src/types/user";
import { api } from "../api";

export const getUsers = async (page: number) => {
  const { data, headers } = await api.get("users", { params: { page } });
  const totalCount = Number(headers["x-total-count"]);
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

  return { users, totalCount };
};

export const useUsers = (page: number) => {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};
