import React from 'react';
import { Link, graphql } from 'gatsby'

const Articles = ({ data }) => {
    const articles = data.allMarkdownRemark.edges.map(({ node }) =>
        <article key={node.id}>
            <Link to={node.fields.slug}>
            <h2>{node.frontmatter.title}</h2>
            </Link>
            <p>Published: {node.frontmatter.date}</p>
            <p>Time to Read: {node.timeToRead}</p>
            <p>{node.excerpt}</p>
        </article>
    ); 

    return(
        <div>
            <h1>Latest Projects</h1>
            { articles }
        </div>
    );
}

export const query = graphql`
query {
    allMarkdownRemark {
      edges {
          node {
              frontmatter {
                  title
                  date(formatString: "MM DD YYYY")
                }
                fields {
                    slug
                }
                timeToRead
                excerpt
                id
        }
      }
    }
  }
  
`;

export default Articles;