import { useQuery } from "@tanstack/react-query";
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
    select: ({ data }) => data,
  });

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>An error has occurred:</h1>;

  return (
    <div>
      <h1>TODOS LIST</h1>
      {todoData?.map((el) => (
        <p key={el.id}>{el.title}</p>
      ))}
    </div>
  );
};

export { Todos };
