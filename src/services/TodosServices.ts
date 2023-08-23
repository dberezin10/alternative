import httpClient from "../utils/httpClient";
import { ITodoResponse } from "../components/Todos";
import { AxiosResponse } from "axios";

interface ITodosServices {
  getAllIdTodos: () => Promise<AxiosResponse>;
  getById: (id: number) => Promise<ITodoResponse>;
}

class TodosServices implements ITodosServices {
  async getAllIdTodos(): Promise<AxiosResponse> {
    return httpClient.get("/todos");
  }
  async getById(id: number): Promise<ITodoResponse> {
    return httpClient.get(`/todos/${id}`);
  }
}

export default new TodosServices();
