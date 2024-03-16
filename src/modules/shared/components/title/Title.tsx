import { StText } from './Title.styled'

import type { ReactNode } from 'react'
import type { StyleProp, ViewStyle } from 'react-native'

interface Props {
  style?: StyleProp<ViewStyle>
  children?: ReactNode
}

export const Title = ({ children, style }: Props) => {
  return <StText style={style}>{children}</StText>
}
