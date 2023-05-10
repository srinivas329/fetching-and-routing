// Write your JS code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogItem: {}, isLoading: true}

  componentDidMount() {
    this.getItemDetails()
  }

  getItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      topic: data.avatar,
      content: data.content,
      title: data.title,
      author: data.author,
    }
    this.setState({blogItem: updatedData, isLoading: false})
  }

  getRenderedBlogItem = () => {
    const {blogItem} = this.state
    const {imageUrl, avatarUrl, content, title, author} = blogItem
    return (
      <div className="card">
        <div className="item-card">
          <h1>{title}</h1>
          <div className="avatar-content">
            <img className="avatar-pic" src={avatarUrl} alt="avatar" />
            <p>{author}</p>
          </div>
          <img src={imageUrl} alt="title" className="card-pc" />
          <p className="content">{content}</p>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <Loader
            type="TailSpin"
            data-testid="loader"
            color="#00BFFF"
            height={50}
            width={50}
          />
        ) : (
          this.getRenderedBlogItem()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
