const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    if(node.internal.type === 'MarkdownRemark') {
        const { createNodeField } = actions;
        slug =createFilePath({node, getNode, basePath: `src`});
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });
    };
};

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }    
    `);

    result.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/article.js`),
            context: {
                slug: node.fields.slug
            }
        });
    });
};