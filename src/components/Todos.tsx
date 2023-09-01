import { useTodos } from "../hooks/useTodos";
import { useState } from "react";
import { set } from "mobx";

export interface ITodoResponse {
  id: number;
  title: string;
  completed: boolean;
}

const Todos = (): JSX.Element => {
  const { isLoading, error, data: todoData } = useTodos();

  const [title, setTitle] = useState("123");

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>An error has occurred:</h1>;

  const handleSubmit = (e, data: any) => {
    e.preventDefault();
    console.log("title", title);
  };

  return (
    <div>
      <h1>TODOS LIST</h1>
      {todoData?.map((el) => (
        <p key={el.id}>{el.title}</p>
      ))}
      <h2>FORM TODOS</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Post form</button>
      </form>
    </div>
  );
};

export { Todos };
