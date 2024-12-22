import { httpAxios } from "@/helper/httpHelper";

export async function addTask(task) {
  const response = await httpAxios.post("/api/tasks", task)
  const result = await response.data;
  return result;
}