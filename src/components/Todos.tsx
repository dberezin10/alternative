import { useMutation, useQuery } from "@tanstack/react-query";
import TodosServices from "../services/TodosServices";
import { SyntheticEvent, useState } from "react";

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
    mutationFn: (value: string) => TodosServices.create(value),
  });

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>An error has occurred:</h1>;

  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    console.log("value", value);
    mutate(value);
  };

  return (
    <div style={{ padding: "10px", border: "1px solid #ccc" }}>
      <h1>TODOS LIST!!TODOS LIST!!!TODOS LIST!!!TODOS LIST!!!TODOS LIST!!!!</h1>
      {todoData?.map((el) => (
        <ul key={el.id}>
          <li>{el.title}</li>
        </ul>
      ))}

      <h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button>submit</button>
        </form>
      </h2>
      <h3> Result input: {value}</h3>
    </div>
  );
};

export { Todos };
