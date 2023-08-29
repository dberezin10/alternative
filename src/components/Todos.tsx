import { useMutation, useQuery } from "@tanstack/react-query";
import TodosServices from "../services/TodosServices";
import { useState } from "react";

export interface ITodoResponse {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export type ICreateTodo = Omit<ITodoResponse, "id">;

const Todos = (): JSX.Element => {
  const {
    isLoading,
    error,
    data: todoData,
  } = useQuery({
    queryKey: ["t"],
    queryFn: TodosServices.getAllIdTodos,
    select: ({ data }) => data,
  });

  const [value, setValue] = useState("");

  const { mutate } = useMutation({
    mutationKey: ["create todo"],
    mutationFn: TodosServices.create(),
  });

  // console.log("createTodo", createTodo);

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>An error has occurred:</h1>;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("value", value);
    mutate(value);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 10,
        border: "1px solid black",
      }}
    >
      <h1>TODOS LIST</h1>
      {todoData?.map((el) => (
        <p key={el.id}>{el.title}</p>
      ))}

      <h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button>Clicked</button>
        </form>
      </h2>
    </div>
  );
};

export { Todos };
