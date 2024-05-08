import { DefinedUseQueryResult, useQuery } from "@tanstack/react-query";
import TodosServices from "../services/TodosServices";
import { ITodoResponse } from "../components/Todos";
import { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const todoData: AxiosResponse<ITodoResponse[]> = {
  config: undefined,
  headers: undefined,
  status: 0,
  statusText: "",
  data: [
    {
      id: 1,
      title: "",
      completed: false,
    },
  ],
};

export const useTodos = (): DefinedUseQueryResult<ITodoResponse[]> => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: TodosServices.getAllIdTodos,
    select: ({ data }: { data: ITodoResponse[] }) => data,
    initialData() {
      return todoData;
    },
  });
};
