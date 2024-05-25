import Button from "./Button"

const Header = () => {
  return (
    <>
    <div className="flex justify-between mx-[135px]">
        <img className="mt-[27px]" src="./ipdcLogo.png"></img>
        <Button text={'CONTACT US'} customStyle={'mt-[35px]'}/>
    </div>
    </>

  )
}

export default Header