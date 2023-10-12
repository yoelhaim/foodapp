export default function Footer(){
    return(

        <div className=" mt-20 pt-20 p-3 flex flex-col md:flex-row gap-5 items-center justify-center w-full" id="contact">

            <div className="">
                <h5 className="text-2xl font-semibold">Food App</h5>
                <p>Our job is to filling your tummy with delicious food and  with fast and free delivery.</p>
            </div>


            <div className="flex glex-col gap-5">

                <ul className="flex flex-col gap-2">
                    <li className="text-2xl font-semibold">About</li>
                    <li>Our Story</li>
                    <li>Our Team</li>
                    <li>Brand Guidelines</li>
                    <li>Terms of Service</li>
                </ul>
                
            </div>

            <div className="flex glex-col gap-5">
                <ul className="flex flex-col gap-2">
                    <li className="text-2xl font-semibold">Videos</li>
                    <li>Submit Video</li>
                    <li>Ambassadors</li>
                    <li>Agency</li>
                    <li>Influencer</li>
                </ul>
                </div>

                <div>
                    <ul className="flex flex-col gap-2">
                        <li className="text-2xl font-semibold">Contact</li>
                        <li>Help & Support</li>
                        <li>Partner with Us</li>
                        <li>Donate</li>
                    </ul>
                </div>
          

        </div>
    )
}