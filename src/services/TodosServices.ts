import httpClient from "../utils/httpClient";
import { ITodoResponse } from "../components/Todos";
import { AxiosResponse } from "axios";

interface ITodosServices {
  getAllIdTodos: () => Promise<AxiosResponse>;
  getById: (id: number) => Promise<ITodoResponse>;
  createTodosTitle: (title: string) => Promise<ITodoResponse[]>;
}

class TodosServices implements ITodosServices {
  async getAllIdTodos(): Promise<AxiosResponse> {
    return httpClient.get<ITodoResponse[]>("/todos?_start=0&_limit=5");
  }
  async getById(id: number): Promise<ITodoResponse> {
    return httpClient.get(`/todos/${id}`).then((res) => res.data);
  }
  async createTodosTitle(title: string) {
    return httpClient.post();
  }
}

export default new TodosServices();
