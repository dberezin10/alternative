import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import httpClient from "../utils/httpClient";
import TodosServices from "../services/TodosServices";

export interface ITodoResponse {
  id: number;
}

const todoId = 5;

const Todos = (): JSX.Element => {
  const {
    isLoading,
    isSuccess,
    error,
    data: todoData,
  } = useQuery<AxiosResponse<ITodoResponse[]>>({
    queryKey: ["todos"],
    queryFn: TodosServices.getAllIdTodos,
    select: (res: AxiosResponse) => {
      return res?.data;
    },
  });

  if (isLoading) return <h1>Loading...</h1>;

  console.log("todoData", todoData);

  if (error) return <h1>An error has occurred: + {error.message}</h1>;
  return (
    <div>
      <h1>TODOS LIST</h1>
      <h1>{todoData?.title}</h1>
      {isSuccess ? todoData?.title : ""}
      <p>{todoData?.id}</p>
    </div>
  );
};

export default Todos;
