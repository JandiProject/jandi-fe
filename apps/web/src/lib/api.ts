import { createInstance } from "@jandi-fe/api";

const baseURL = import.meta.env.VITE_API_BASE_URL ?? "/api";

export const api = createInstance(baseURL);
