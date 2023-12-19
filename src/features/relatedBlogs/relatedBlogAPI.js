import axios from '../../utils/axios'

export const getRelatedBlogs = async (id, tags) => {
  let querystring = '';
  const limit = 2;
  if (tags.length > 0) {
    querystring += tags?.map(tag => `tags_like=${tag}`).join("&")
  }

  querystring += `&id_ne=${id}&_limit=${limit}`
  console.log(querystring);

  const response = await axios.get(`/blogs/?${querystring}`);

  return response.data;
} 