import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 20,
    category : 'general'

  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category:PropTypes.string
  }
  

constructor(){
  super();
  
  this.state = {
    articles:[],
    loading: false,
    page:1
  }
}

async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=49e6a52fec79481d8ca4b71570d4d6b0&page=1&pageSize=${this.props.pageSize}&`
    let data=await fetch(url)
    let parsedData=await data.json()
    this.setState({articles:parsedData.articles})
}

handlePrevClick = async () => {

    console.log("Previous")
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=49e6a52fec79481d8ca4b71570d4d6b0&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`
    let data=await fetch(url)
    let parsedData=await data.json()
    this.setState({page:this.state.page - 1,articles:parsedData.articles})

}


handleNextClick = async () => {

    if(this.state.page + 1 > Math.ceil(38/this.props.page)) {

    }

    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=49e6a52fec79481d8ca4b71570d4d6b0&page=${this.state.page+1}&pageSize=${this.state.pageSize}`
    let data=await fetch(url)
    let parsedData=await data.json()
    this.setState({page:this.state.page + 1,
        articles:parsedData.articles})
}



  render() {
    return (
      <div className='container my-3'>

        <h1 className="text-center"  >NewsMonkey Top headlines in <span  style={{color:'red'}}>{this.props.category}</span></h1>
        
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4 my-5" key={element.url}>
                    <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                  </div>
        })}
       
        </div>

        <div className="conatiner d-flex justify-content-between">
        {<button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick} >Previous</button>}
        <button disabled={this.state.page+1 > Math.ceil(38/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
        </div>
        
      </div>
    )
  }
}



export default News
