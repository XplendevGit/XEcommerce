import {blockContent} from './schemaTypes/blockContent'
import {categoria} from './schemaTypes/categoria'
import {cliente} from './schemaTypes/cliente'
import {producto} from './schemaTypes/producto'

export const schema = {
  types: [producto, categoria, cliente, blockContent],
}
