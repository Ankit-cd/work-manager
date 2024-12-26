import { httpAxios } from "@/helper/httpHelper";

export async function addTask(task) {
  const response = await httpAxios.post("/api/tasks", task)
  const result = await response.data;
  return result;
}

export async function getTasksofUser(userId) {
  const response = await httpAxios.get(`/api/users/${userId}/tasks`);
  const result = await response.data;
  return result;
}

export async function deleteTask(taskId) {
  const response = await httpAxios.delete(`/api/tasks/${taskId}`);
  const result = await response.data;
  return result;
}