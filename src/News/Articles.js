import React from 'react'
import { Grid, List, Image } from 'semantic-ui-react'

const Articles = (props) => {
    console.log(props)
    const articleList = props.news.map((article, i) => {
        return <List key={i}>
        			<List.Item>
      					<Grid>
    						<Grid.Column width={9}>
    							<List.Header as='a'><a href={article.url}>{article.title}</a></List.Header>
      							<List.Content>{article.description}</List.Content>
    						</Grid.Column>
    						<Grid.Column width={5}>
    							<List.Content>
      							<List.Icon name='pencil'/>
      							by {article.author !== null ? article.author: 'unspecified author'}
      							</List.Content>
    						</Grid.Column>
  						</Grid>
    				</List.Item>
				</List>
    })

    return (
        <div>
          <h2>JavaScript News</h2>
          <ul>
            {articleList}
          </ul>
        </div>
    )
}

export default Articles