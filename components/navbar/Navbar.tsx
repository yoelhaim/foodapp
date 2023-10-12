"use client";

import { RiLoginBoxLine } from "react-icons/ri";

const Navbar = () => {





    const nav =[
        {
            name:'Why Fudo?',
            path: '#whyfudo'
        },
        {
            name:'Services',
            path: '#services'
        },
        {
            name:'Menu',
            path: '#menu'
        },
        {
            name:'Contact',
            path: '#contact'
        }
    ]

    return(
        <nav className="h-20 flex  justify-between items-center px-3 md:px-20 fixed inset-0 bg-main z-10">
            <div className="font-semibold text-2xl">Food</div>
        
            <nav>
                <ul className="md:flex gap-5 hidden">
                    {
                        nav.map((item, index) =>(
                            <li key={index} className="hover:text-primary cursor-pointer"><a href={item.path}>{item.name}</a></li>
                        ))
                    }
                </ul>



            </nav>

            <div>

                <button className=" transition-all duration-500 ease-in-out border bg-primary py-2 rounded-3xl px-6 capitalize text-main hover:bg-main hover:border-primary hover:text-primary  flex justify-center items-center gap-2"><RiLoginBoxLine />Login</button>

            </div>
       
    </nav>
    )

}
export default Navbar;