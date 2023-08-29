import httpClient from "../utils/httpClient";
import { ICreateTodo, ITodoResponse } from "../components/Todos";
import { AxiosResponse } from "axios";

interface ITodosServices {
  getAllIdTodos: () => Promise<AxiosResponse<ITodoResponse[]>>;
  getById: (id: number) => Promise<ITodoResponse>;
  create: () => Promise<string[]>;
}

class TodosServices implements ITodosServices {
  async getAllIdTodos(): Promise<AxiosResponse<ITodoResponse[]>> {
    return httpClient.get("/todos?_start=0&_limit=5");
  }
  async getById(id: number): Promise<ITodoResponse> {
    return httpClient.get(`/todos/${id}`).then((res) => res.data);
  }

  async create(): Promise<string[]> {
    return httpClient
      .post("todos", {
        title: "11",
        completed: false,
        userId: 1,
      })
      .then((data) => data.data);
  }
}

export default new TodosServices();
