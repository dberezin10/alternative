import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import httpClient from "../utils/httpClient";
import TodosServices from "../services/TodosServices";

export interface ITodoResponse {
  id: number;
  title: string;
  completed: boolean;
}

const Todos = (): JSX.Element => {
  const {
    isLoading,
    error,
    data: todoData,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: TodosServices.getAllIdTodos,
  });

  if (isLoading) return <h1>Loading...</h1>;

  console.log(
    "todoData",
    todoData?.map((el) => el)
  );

  if (error) return <h1>An error has occurred: + {error.message}</h1>;
  return (
    <div>
      <h1>TODOS LIST</h1>
      {todoData?.map((el) => (
        <p key={el.id}>{el.title}</p>
      ))}
      {/*<h1>{todoData?.title}</h1>*/}
      {/*{isSuccess ? todoData?.title : ""}*/}
      {/*<p>{todoData?.id}</p>*/}
    </div>
  );
};

export default Todos;
