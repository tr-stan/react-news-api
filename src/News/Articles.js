import React from 'react'
import { Grid, List, Segment } from 'semantic-ui-react'

const Articles = (props) => {
    console.log(props)
    const articleList = props.news.map((article, i) => {
        return <List key={i}>
        			<List.Item>
      					<Grid stackable columns={2}>
    						<Grid.Column>
    								<List.Header><a href={article.url}>{article.title}</a></List.Header>
      								<List.Content>{article.description}</List.Content>
    						</Grid.Column>
    						<Grid.Column>
    								<List.Content>
      								<List.Icon name='pencil'/>
      								by {article.author !== null ? article.author: 'unspecified author'}
      								</List.Content>
      								<List.Content>
      								<List.Icon name='users'/>
      								source {article.source.name}
      								</List.Content>
      								<List.Content>
      								<List.Icon name='calendar alternate outline'/>
      								{new Date(article.publishedAt).toLocaleDateString()}
      								</List.Content>
    						</Grid.Column>
  						</Grid>
    				</List.Item>
				</List>
    })

    return (
        <div>
          <ul>
            {articleList}
          </ul>
        </div>
    )
}

export default Articles