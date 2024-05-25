import {buttonText} from "../../types"

const Button = ({text,customStyle}:buttonText) => {
  return (
    <div>
        <button className={`bg-primary text-white text-[12px] font-Inter py-[8px] px-[20px] rounded ${customStyle}`}>{text}</button>
    </div>
  )
}

export default Button