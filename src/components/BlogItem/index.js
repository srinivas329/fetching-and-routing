// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, imageUrl, avatarUrl, title, author, topic} = blogDetails
  return (
    <Link to={`/blogs/${id}`} className="link-list">
      <li className="list-item link-list1">
        <img src={imageUrl} alt="title" className="main-card" />
        <div className="data-container">
          <p className="topic-text">{topic}</p>
          <h1 className="title-text">{title}</h1>
          <div className="avatar-author">
            <img src={avatarUrl} alt="avatar" className="avatar" />
            <p>{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default BlogItem
