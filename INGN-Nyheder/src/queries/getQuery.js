export const Article = `
query MyQuery ($ArticleId: ID!){
  article(where: {id:$ArticleId}) {
    title
    subtitle
    image {
      url
    }
    date
    content
  }
}
`;

