// Components (styles)
import { PropsWithChildren } from 'react'

import { Description, HeadingSix } from '../../index'

type CardProps = {
  toolName: string
  toolDescription: string
}

const Card = ({ children, toolName, toolDescription }: PropsWithChildren<CardProps>) => {
  return (
    <div className="card__container">
      <div>{children}</div>
      <HeadingSix>{toolName}</HeadingSix>
      <Description>{toolDescription}</Description>
    </div>
  )
}

export default Card
