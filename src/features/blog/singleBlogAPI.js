import axios from '../../utils/axios'

export const getSingleBlog = async (id) => {
  const response = await axios.get(`/blogs/${id}`);

  return response.data;
}
export const updateSingleBlog = async (id, isSaved) => {
  const response = await axios.patch(`/blogs/${id}`, {
    isSaved: !isSaved
  });
  response.data.headers['Content-type']

}
export const updateSingleBlogLike = async (id, likes) => {
  const response = await axios.patch(`/blogs/${id}`, {
    likes: likes + 1
  });
  response.data.headers['Content-type']

  // return response.data;
} 