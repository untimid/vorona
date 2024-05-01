import React, { FC, useEffect, useMemo, useState } from 'react'
import { SelectInput, useField } from 'payload/components/forms'

import {
  ALL_COLORS,
  COLOR_GRADES,
  ColorGradesType,
  ColorPrefixType,
  DEFAULT_COLORS_MAP,
  DEFAULT_COLORS_SIMPLE,
  DefaultColorsNamesType,
} from '../constantValues/colorsMap'

const COLOR_OPTIONS = ALL_COLORS.map(color => ({ label: color, value: color }))
const GRADE_OPTIONS = COLOR_GRADES.map(grade => ({ label: grade, value: grade }))
const getColor = (color, grade) => {
  if (DEFAULT_COLORS_SIMPLE.includes(color)) {
    return DEFAULT_COLORS_MAP[color]
  }
  return DEFAULT_COLORS_MAP[color][grade]
}
interface CustomColorSelectProps {
  path: string
  label: { ru: string } // TODO: should use some common label type which can respect localization
}
export interface ColorSelectComponentProps extends CustomColorSelectProps {
  prefix?: ColorPrefixType
}

// Color value is used for tailwind so should be like 'bg-amber-400'
export const ColorSelectComponent: FC<ColorSelectComponentProps> = ({
  path,
  label,
  prefix = 'bg-',
}) => {
  const { value, setValue } = useField<string>({ path })
  const [color, setColor] = useState<DefaultColorsNamesType>('gray')
  const [grade, setGrade] = useState<ColorGradesType>('400')
  const isSimpleColor = useMemo(() => DEFAULT_COLORS_SIMPLE.includes(color), [color])

  useEffect(() => {
    setColor((value?.split('-')[1] as DefaultColorsNamesType) || 'gray')
    setGrade((value?.split('-')[2] as ColorGradesType) || '400')
  }, [value])
  const updateValue = (newColor: DefaultColorsNamesType, newGrade?: ColorGradesType) => {
    if (DEFAULT_COLORS_SIMPLE.includes(newColor)) {
      setValue(`${prefix}${newColor}`)
    } else {
      setValue(`${prefix}${newColor}-${newGrade}`)
    }
  }

  return (
    <div>
      <label className="field-label">{label?.ru || 'Выбор цвета'}</label>
      <div
        style={{
          display: 'flex',
        }}
      >
        <div
          style={{
            alignSelf: 'stretch',
            border: '1px solid grey',
            width: '50px',
            height: '70px',
            marginBlockStart: '8px',
            marginInlineEnd: '8px',
            backgroundColor: getColor(color, grade),
          }}
        />
        <label
          style={{
            marginInlineEnd: '8px',
          }}
        >
          Цвет
          <SelectInput
            path={path}
            name={path}
            options={COLOR_OPTIONS}
            value={color}
            onChange={e => updateValue(e.value as DefaultColorsNamesType, grade)}
          />
        </label>
        {!isSimpleColor && (
          <label>
            Градация
            <SelectInput
              path={path}
              name={path}
              options={GRADE_OPTIONS}
              value={grade}
              onChange={e => updateValue(color, e.value as ColorGradesType)}
            />
          </label>
        )}
      </div>
    </div>
  )
}

export const BgColorSelectComponent: FC<CustomColorSelectProps> = props => (
  <ColorSelectComponent {...props} prefix="bg-" />
)
export const TextColorSelectComponent: FC<CustomColorSelectProps> = props => (
  <ColorSelectComponent {...props} prefix="text-" />
)
export const FromColorSelectComponent: FC<CustomColorSelectProps> = props => (
  <ColorSelectComponent {...props} prefix="from-" />
)
export const ToColorSelectComponent: FC<CustomColorSelectProps> = props => (
  <ColorSelectComponent {...props} prefix="to-" />
)
