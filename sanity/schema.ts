import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { catrgory } from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, catrgory],
}
