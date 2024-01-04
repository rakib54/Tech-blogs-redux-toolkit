import axios from '../../utils/axios'

export const getBlogs = async (filterStatus, sortStatus) => {
  let queryString = "";
  if (sortStatus === "default") {
    queryString += `_sort=id&`
  }
  else if (sortStatus === "newest") {
    queryString += `_sort=createdAt&_order=desc&`
  }
  else if (sortStatus === "most_liked") {
    queryString += `_sort=likes&_order=desc&`
  }

  if (filterStatus === "saved") {
    queryString += `isSaved=true`
  }
  const response = await axios.get(`/blogs/?${queryString}`)

  return response.data;
}