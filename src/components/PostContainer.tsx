import { IPost } from '../models/IPost'
import { PostAPI } from '../services/PostService'

export const PostContainer = () => {
  const { data: posts } = PostAPI.useFetchAllPostsQuery(100)
  const [createPost, {}] = PostAPI.useCreatePostMutation()
  const [updatePost, {}] = PostAPI.useUpdatePostMutation()
  const [deletePost, {}] = PostAPI.useDeletePostMutation()
  const handleCreate = async () => {
    const title = prompt('Title')
    const body = prompt('Body')
    await createPost({ title, body } as IPost)
  }
  return (
    <div>
      <button onClick={handleCreate}>Add Post</button>
      {posts?.map(post => (
        <div key={post.id}>
          <span
            onClick={() => {
              const title = prompt() || ''
              updatePost({ ...post, title })
            }}>
            {post.id} {post.title} {post.body}
          </span>
          <button onClick={() => deletePost(post)}>Delete</button>
        </div>
      ))}
    </div>
  )
}
