import {buttonText} from "../../types"

const Button = ({text,customStyle}:buttonText) => {
  return (
    <div>
        <button className={`bg-primary text-white text-[0.75rem] font-Inter py-[0.7em] px-[1.67em] rounded ${customStyle}`}>{text}</button>
    </div>
  )
}

export default Button