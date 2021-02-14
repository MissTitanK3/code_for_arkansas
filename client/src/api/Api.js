import axios from 'axios'

// async function GetPosts() {
//   const data = await axios({
//     url: 'http://localhost:5000/posts/',
//     method: 'GET'
//   })
//   return data
// }
// export default GetPosts

export const API_BASE_URL = "http://localhost:5000"

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
})

export default axiosInstance;

export const fetchPosts = async () => {
  const { data } = await axiosInstance.get("/posts");
  return data;
};

export const fetchUsers = async () => {
  const { data } = await axiosInstance.get("/users");
  return data;
};


