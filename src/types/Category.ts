import { GatsbyImageProps } from "gatsby-image"

export interface ICategory {
  category: string
  slug: string
  id: string
  image: GatsbyImageProps
}

export interface ICategoryNode {
  node: ICategory
}
