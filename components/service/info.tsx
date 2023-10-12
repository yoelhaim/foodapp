import Image from 'next/image';
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';

export default function Info() {
  return (
    <div className="mt-20">
      <div className="flex flex-row-reverse gap-5  justify-center items-center md:px-20">
        <div className="flex flex-col gap-5">
          <div className="  text-primary ">
            <p>WHAT THEY SAY</p>
          </div>

          <div className="flex flex-col gap-5">
            <p>
              “Fudo is the best. Besides the many and delicious meals, the
              service is also very good, especially in the very fast delivey. I
              highly recommend Fudo to you”.
            </p>

            <div className="flex items-center  gap-3 md:gap-3 text-xs md:text-md">
              <div>
                <Image src="/img/girl.svg" width={50} height={50} alt="food" />
              </div>
              <div className='flex flex-col gap-1'>
                <p className=' font-semibold'>Theresa Jordan</p>
                <p className="text-black/50">Food Enthusiast</p>
              </div>
            </div>

            <div className='flex gap-2'>
                <AiTwotoneStar size={25} className="text-yellow"/>
                <AiTwotoneStar size={25} className="text-yellow"/>
                <AiTwotoneStar size={25} className="text-yellow"/>
                <AiTwotoneStar size={25} className="text-yellow"/>
                <AiOutlineStar size={25}/>

               <p> 4.0</p>
                
            </div>
          </div>
        </div>

        <div className="w-full md:block hidden ">
          <Image src="/img/chef.svg" width={500} height={500} alt="food" />
        </div>
      </div>
    </div>
  );
}
