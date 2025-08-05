import aa from "./../../assets/edited-photo.png";

function Slogan() {
  return (
    <div className="bg-neutral-300 flex items-center justify-around p-4 rounded-2xl">
          <img src={aa} alt="2a" className="mr-15"/>
          <div>
            <h2 className="max-md:text-lg max-lg:text-2xl text-4xl font-sans font-black">Click. Smile. Repeat.</h2>
            <p className="font-mono max-lg:text-xs">Shopping, Simplified. You, Amplified.</p>
          </div>
        </div>
  )
}

export default Slogan
