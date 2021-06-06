import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Category, ICategoryNode } from '../../../../types/Category';

const getData = graphql`
  query {
    categories: allContentfulCategories(sort: { fields: createdAt, order: DESC }) {
      node {
        name
        slug
        id
        image {
          fluid(maxWidth: 800) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;

interface CategoriesData {
  categories: Array<ICategoryNode>;
}

const CategoryTiles: React.FC = (): JSX.Element => {
  const { categories: categoriesEdges }: CategoriesData = useStaticQuery(getData);

  const categories: Array<Category> = categoriesEdges.map(({ node }) => node);

  return (
    <div>
      <p>test</p>
    </div>
  );
};

export default CategoryTiles;
