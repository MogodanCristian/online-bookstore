import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
 const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDBmZTI2OTdkMGY2NmIzZjFmZDE0MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTAxNzExNSwiZXhwIjoxNjYxMjc2MzE1fQ.QFGJPXUgxKu_Qixfr445gOe5fzRj5T8C4wbKPtDINUc";


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});