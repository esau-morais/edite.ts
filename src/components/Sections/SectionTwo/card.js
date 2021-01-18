// Components (styles)
import { Description, HeadingSix } from "../../index";

function Card({ children, toolName, toolDescription }) {
  return (
    <div className="card__container">
      <div>{children}</div>
      <HeadingSix>{toolName}</HeadingSix>
      <Description>{toolDescription}</Description>
    </div>
  );
}

export default Card;
