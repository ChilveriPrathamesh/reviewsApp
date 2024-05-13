// Write your code here

import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  updatedReview = reviewsList => {
    const {activeReviewIndex} = this.state
    const {imgUrl, username, companyName, description} =
      reviewsList[activeReviewIndex]
    return (
      <li className="list-container">
        <img src={imgUrl} alt={username} className="img" />
        <p className="user-name">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="review">{description}</p>
      </li>
    )
  }

  updateReviewToLeft = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
    console.log('leftclick')
  }

  updateReviewToRight = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props
    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
    console.log('rightClick')
  }

  render() {
    const {reviewsList} = this.props
    return (
      <div className="bg-container">
        <h1 className="head-title">Reviews</h1>
        <div className="updation-container">
          <div className="prev-next-container">
            <button
              type="button"
              data-testid="leftArrow"
              className="btn"
              onClick={this.updateReviewToLeft}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow-btn"
              />
            </button>
            {this.updatedReview(reviewsList)}
            <button
              type="button"
              data-testid="rightArrow"
              className="btn"
              onClick={this.updateReviewToRight}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow-btn"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
