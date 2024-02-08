import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'


export class News extends Component {
 /* articles=[
    {
      "source": { "id": "news-com-au", "name": "News.com.au" },
      "author": null,
      "title": "Cricket storm erupts over ‘Bairstow’ appeal",
      "description": "A fresh stumping furore has rocked cricket with Indian keeper Ishan Kishan being slammed for attempting to stump West Indies batter Jason Holder under hugely controversial circumstances.",
      "url": "https://www.news.com.au/sport/cricket/cricket-furore-explodes-as-india-attempts-bairstow-stumping-dismissal/news-story/a79c20824ec5039bb9b760df932f710c",
      "urlToImage": "https://content.api.news/v3/images/bin/dafa5f59708c88d9a13e7bcefe020420",
      "publishedAt": "2023-07-15T04:23:00Z",
      "content": "A fresh stumping furore has rocked cricket with Indian keeper Ishan Kishan being slammed for attempting to stump West Indies batter Jason Holder under hugely controversial circumstances.\r\nKishan whip… [+3294 chars]"
    },
    {
      "source": { "id": "news24", "name": "News24" },
      "author": "Lynn Butler",
      "title": "It's Miller time! 26 South Africans in MLC as T20's big hitters go to the States",
      "description": "David Miller, among 26 South Africans in the Major League Cricket competition, was the first of the big hits in the augural T20 tournament in the United States.",
      "url": "https://www.news24.com/sport/cricket/its-miller-time-26-south-africans-in-mlc-as-t20s-big-hitters-go-to-the-states-20230714",
      "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/3485/046b298ad798429ab6316fff31178b08.jpg",
      "publishedAt": "2023-07-14T20:24:33+00:00",
      "content": "<ul><li>Cricket has finally broken into the United States with the start of Major League Cricket (MLC).</li><li>The 19-game tournament features six teams, including three co-owned Indian Premier Leag… [+3250 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]*/
  static defaultProps = {
  country: 'in',
  category : 'general',
  }
  static propTypes = {
    country : PropTypes.string,
    category : PropTypes.string,
  }
  constructor(){
    super();
    console.log("hello i am constructor")
    this.state ={
      /*articles:this.articles,*/ //prvious news 
      articles:[],
      loading:true,
      page:1

    }
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8fcdae8df89a4111be6e8eb3ea68d09c&page=1&pagesize=20 ";
    let data= await fetch(url);
    let parseddata = await data.json()
    this.setState(
      {articles:parseddata.articles, totalResults:parseddata.totalResults}
      )
  }
  handlenext= async ()=>{
    
   
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8fcdae8df89a4111be6e8eb3ea68d09c&page=${this.state.page + 1 }& pagesize=20`;
    let data= await fetch(url);
    let parseddata = await data.json()
    this.setState(
      {articles:parseddata.articles}
      )
    this.setState({
     
      page:this.state.page+1,
      articles:parseddata.articles
    })
  
  }

  handleprevious =async () =>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8fcdae8df89a4111be6e8eb3ea68d09c&page=${this.state.page-1}& pagesize=20`;
    let data= await fetch(url);
    let parseddata = await data.json()
    this.setState(
      {articles:parseddata.articles}
      )
    this.setState({
     
      page:this.state.page-1,
      articles:parseddata.articles
    })
  }
  
  render() {
    return (
      <div className="container my-3 ">
       <h2>NewsMonkey - Top Headlines</h2>
      
       <div className="row">
       {this.state.articles.map((element)=>{
         return  <div className="col-md-4">
           <NewsItem key={element.url} title={element.title?element.title:""} discription={element.description?element.description:""} imageurl={element.urlToImage} newsurl={element.url}/>
           </div>
       })}
       
       
        {/*<div className="col-md-4">
        <NewsItem title="my title" discription="my discription" imageurl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"/>
        </div>
        
        <div className="col-md-4">
        <NewsItem title="my title" discription="my discription" imageurl="https://content.api.news/v3/images/bin/dafa5f59708c88d9a13e7bcefe020420"/>
      </div>*/}
      </div>
       <div className="container d-flex justify-content-between">
       <button disabled={this.state.page<=1} type="button" class="btn btn-primary" onClick={this.handleprevious}>Previous</button>
       <button type="button" class="btn btn-primary" onClick={this.handlenext}>Next</button>
        </div> 
      </div>
    )
  }
}

export default News
