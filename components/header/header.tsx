import Image from "next/image";
import { PiPlayCircleThin } from "react-icons/pi";
export default function Header() {
  return (
    <header className="mt-20" id="whyfudo">
      <div className="flex gap-5  justify-center items-center">
        <div className="flex flex-col gap-8">
          <div className=" bg-secondary text-primary text-center text-sm p-4 rounded-3xl w-56">
            <p>More than Faster</p>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-5xl font-bold">Be The Fastest In Delivering Your <strong className="text-primary">Food</strong></h1>

            <p >Our job is to filling your tummy with delicious food and  with fast and free delivery.</p>


            <div className="flex justify-evenly gap-1 md:gap-3 text-xs md:text-mdßß">

                <button className=" transition-all duration-500 ease-in-out border bg-primary py-2 rounded-3xl px-10 capitalize text-main hover:bg-main hover:border-primary hover:text-primary">get start</button>
                <button className=" bg-main py-2 rounded-2xl px-5 capitalize text-black flex justify-center items-center gap-2">  
                
                <PiPlayCircleThin size={35} className="text-yellow"/>
                
                Watch Video </button>

            </div>

          </div>
        </div>

        <div className="w-full md:block hidden ">
            <Image src="/img/ban.svg" width={500} height={500} alt="food" />

        
        </div>
      </div>
    </header>
  );
}
