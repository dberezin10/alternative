import httpClient from "../utils/httpClient";
import { ICreateTodo, ITodoResponse } from "../components/Todos";
import { AxiosResponse } from "axios";

interface ITodosServices {
  getAllIdTodos: () => Promise<AxiosResponse<ITodoResponse[]>>;
  getById: (id: number) => Promise<ITodoResponse>;
  create: (title: string) => Promise<AxiosResponse<ICreateTodo>>;
}

class TodosServices implements ITodosServices {
  async getAllIdTodos(): Promise<AxiosResponse<ITodoResponse[]>> {
    return httpClient.get("/todos?_start=0&_limit=5");
  }
  async getById(id: number): Promise<ITodoResponse> {
    return httpClient.get(`/todos/${id}`).then((res) => res.data);
  }

  async create(title: string): Promise<AxiosResponse<ICreateTodo>> {
    return httpClient.post("todos", {
      title,
      completed: false,
      userId: 1,
    });
  }
}

export default new TodosServices();
