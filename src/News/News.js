import React, { Component } from 'react'
import Articles from './Articles'

class News extends Component {
	constructor(props) {
		super(props)

		this.state = {
			news: []
		}
	}

	getNews = async () => {
	    try {
	        const news = await fetch('https://newsapi.org/v2/everything?q=javascript&apiKey=87eb12bd1bf24ea1bb0002dbd3f32e04');
	        const newsJson = wait news.json()
	        this.setState({ news: newsJson.articles })
	    } catch (err) {
	        console.log(err, 'error in catch block')
	        return err
	    }
	}

	componentDidMount() {
	    this.getNews().then((data) => console.log(data, ' JavaScript Headlines from NEWS API'))
	}

	render() {
	return (
	  <div className="News">
	    <p>Hi {this.props.username}!</p>
	    <Articles news={this.state.news} />
	  </div>
	)
	}

}

export default News