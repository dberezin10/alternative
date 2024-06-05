import { BASE_URL } from "../shared/constants/baseUrl";
import { TUser } from "../shared/types/user";

export const receiveRandomUser = async (): Promise<TUser | null> => {
  const id = Math.floor(Math.random() * (10 - 1)) + 1;
  return fetch(`${BASE_URL}/users/${id}`).then((res) => res.json());
};
