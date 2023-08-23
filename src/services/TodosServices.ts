import httpClient from "../utils/httpClient";
import { ITodoResponse } from "../components/Todos";
import { AxiosResponse } from "axios";

interface ITodosServices {
  getAllIdTodos: () => Promise<ITodoResponse[]>;
  getById: (id: number) => Promise<ITodoResponse>;
}

class TodosServices implements ITodosServices {
  async getAllIdTodos(): Promise<ITodoResponse[]> {
    return httpClient.get<ITodoResponse[]>("/todos").then((res) => res.data);
  }
  async getById(id: number): Promise<ITodoResponse> {
    return httpClient.get(`/todos/${id}`).then((res) => res.data);
  }
}

export default new TodosServices();
