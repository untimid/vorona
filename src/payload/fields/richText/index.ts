import { slateEditor } from '@payloadcms/richtext-slate'
import type {
  AdapterArguments,
  RichTextElement,
  RichTextLeaf,
} from '@payloadcms/richtext-slate/dist/types'
import type { RichTextField } from 'payload/dist/fields/config/types'

import deepMerge from '../../utilities/deepMerge'
import link from '../link'
import elements from './elements'
import leaves from './leaves'

type RichText = (
  overrides?: Partial<RichTextField> & {
    admin?: AdapterArguments['admin']
  },
  additions?: {
    elements?: RichTextElement[]
    leaves?: RichTextLeaf[]
  },
) => RichTextField

const richText: RichText = (
  overrides,
  additions = {
    elements: [],
    leaves: [],
  },
) => {
  const slateOptions = deepMerge<AdapterArguments['admin'], AdapterArguments['admin']>(
    overrides?.admin || {},
    {
      upload: {
        collections: {
          media: {
            fields: [
              {
                type: 'richText',
                name: 'caption',
                label: {
                  en: 'Caption',
                  ru: 'Подпись',
                },
                editor: slateEditor({
                  admin: {
                    elements: [...elements],
                    leaves: [...leaves],
                  },
                }),
              },
              {
                type: 'radio',
                name: 'alignment',
                label: {
                  en: 'Alignment',
                  ru: 'Расположение',
                },
                options: [
                  {
                    label: {
                      en: 'Left',
                      ru: 'Слева',
                    },
                    value: 'left',
                  },
                  {
                    label: {
                      en: 'Center',
                      ru: 'По центру',
                    },
                    value: 'center',
                  },
                  {
                    label: {
                      en: 'Right',
                      ru: 'Справа',
                    },
                    value: 'right',
                  },
                ],
              },
              {
                name: 'enableLink',
                type: 'checkbox',
                label: {
                  en: 'Enable Link',
                  ru: 'Добавить CTA ссылку',
                },
              },
              link({
                appearances: false,
                disableLabel: true,
                overrides: {
                  admin: {
                    condition: (_, data) => Boolean(data?.enableLink),
                  },
                },
              }),
            ],
          },
        },
      },
      elements: [...elements, ...(additions.elements || [])],
      leaves: [...leaves, ...(additions.leaves || [])],
    },
  )

  const fieldOverrides = {
    ...(overrides || {}),
  }

  delete fieldOverrides.admin

  return deepMerge<RichTextField, Partial<RichTextField>>(
    {
      name: 'richText',
      type: 'richText',
      required: true,
      editor: slateEditor({
        admin: slateOptions,
      }),
    },
    fieldOverrides || {},
  )
}

export default richText
