// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogList extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogItems()
  }

  getBlogItems = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.id,
      topic: each.topic,
      author: each.author,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      title: each.title,
    }))

    this.setState({blogsList: updatedData, isLoading: false})
  }

  render() {
    const {blogsList, isLoading} = this.state
    return (
      <div>
        <ul className="list-container">
          {isLoading ? (
            <Loader
              type="TailSpin"
              data-testid="loader"
              color="#00BFFF"
              width={50}
              height={50}
            />
          ) : (
            blogsList.map(each => <BlogItem blogDetails={each} key={each.id} />)
          )}
        </ul>
      </div>
    )
  }
}

export default BlogList
