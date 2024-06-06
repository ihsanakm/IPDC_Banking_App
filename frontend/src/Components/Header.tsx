import Button from "./Button"

const Header = () => {
  return (
    <>
    <div className="flex justify-between mx-[8.5rem]">
        <img className="mt-[1.7rem]" src="./ipdcLogo.png"></img>
        <Button text={'CONTACT US'} customStyle={'mt-[2.2rem]'}/>
    </div>
    </>

  )
}

export default Header