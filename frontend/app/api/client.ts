import { Configuration, PostersApi } from "./generated";


const apiBasePath = (
  import.meta.env.VITE_API_URL ?? "http://localhost:8000"
).replace(/\/+$/, "");

export const postersApi = new PostersApi(
  new Configuration({ basePath: apiBasePath }),
);
