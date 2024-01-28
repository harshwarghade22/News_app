import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,url,date,author,source} = this.props
    return (
      <div>
        <div className="card">
          <img src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsss6eRmnmSG_KPYkJSMns367yoq-D4bVZnbeUqcWhBQ&s":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <p>Published by {!author ? "Unknown":author} on {new Date(date).toGMTString()}</p>
              <h5 className="card-title">{title}</h5>
              <span class="badge text-bg-danger">{source}</span>
              <p className="card-text">{description}</p>
              <a href={url} className="btn btn-dark">Read More about news</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
