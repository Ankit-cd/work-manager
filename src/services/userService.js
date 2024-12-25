import { httpAxios } from "@/helper/httpHelper";

export async function signUp(data) {
    const response = await httpAxios.post("/api/users", data)
    const result = await response.data;
    return result;
}
export async function logIn(data) {
    const response = await httpAxios.post("/api/login", data)
    const result = await response.data;
    return result;
}

export async function current() {
    const response = await httpAxios.get("/api/current")
    const result = await response.data;
    return result;
}