import React, { Component } from 'react'

class News extends Component {
	constructor() {
		super()

		this.state = {
			news: []
		}
	}

	getNews = async () => {

	    try {
	        const news = await fetch('https://newsapi.org/v2/everything?q=javascript&apiKey=87eb12bd1bf24ea1bb0002dbd3f32e04');
	        const newsJson = await news.json();
	        this.setState({ news: newsJson });
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
	    <h1>Welcome, {this.props.username}!</h1>
	    
	  </div>
	)
	}

}

export default News