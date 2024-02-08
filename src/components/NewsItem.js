import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
  static propTypes = {

  }

  render() {
   let {title,discription,imageurl,newsurl}= this.props;
    return (
      <div className='my-3'>
       <div className="card" style={{width: "18rem"}}>
     <img src={imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{discription}</p>
    <a rel='noreferrer' href={newsurl} className="btn btn-sm btn-dark">Read More</a>
  </div>
  </div>
      </div>
    )
  }
}

export default NewsItem
