import type { Field } from 'payload/types'

import { BgColorSelectComponent } from './component'

export const BgColorSelectField: Field = {
  name: 'bgColorSelect',
  type: 'text',
  admin: {
    components: {
      Field: BgColorSelectComponent,
    },
  },
}
