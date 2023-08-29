import httpClient from "../utils/httpClient";
import { ITodoResponse } from "../components/Todos";
import { AxiosResponse } from "axios";

interface ITodosServices {
  getAllIdTodos: () => Promise<AxiosResponse<ITodoResponse[]>>;
  getById: (id: number) => Promise<ITodoResponse>;
}

class TodosServices implements ITodosServices {
  async getAllIdTodos(): Promise<AxiosResponse<ITodoResponse[]>> {
    return httpClient.get("/todos");
  }
  async getById(id: number): Promise<ITodoResponse> {
    return httpClient.get(`/todos/${id}`).then((res) => res.data);
  }
}

export default new TodosServices();
