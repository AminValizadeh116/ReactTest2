import aa from "./../../assets/edited-photo.png";

function Slogan() {
  return (
    <div className="bg-neutral-300 flex items-center justify-around p-4 rounded-2xl">
          <img src={aa} alt="2a" />
          <div>
            <h2 className="text-4xl font-sans font-black">Click. Smile. Repeat.</h2>
            <p className="font-mono">Shopping, Simplified. You, Amplified.</p>
          </div>
        </div>
  )
}

export default Slogan
