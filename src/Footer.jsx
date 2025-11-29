import Logo from '../public/img/logo-white.png'
import Insta from '../public/img/Instagram_logo_2022.svg.webp'
import Face from '../public/img/facebook (2)_1.png'
import Linked from '../public/img/linked.png'
import Googel from '../public/img/تنزيل.png'
import { MdPlayArrow } from "react-icons/md";

function Footer() {
    const data1=["Laptops & Computers","Smart Phones & Tablets","TV & Audio"
        ,"Appliances","Jewelry & Watches"
    ]
    const data2 = ["Your Account","Returns & Exchanges","Shipping & Delivery","Estimated Delivery Time","Purchase Hisotry"]
    const data3 = ["Support Center","Term & Conditions","Privacy Policy","Help","FAQS"]
    return (
        <footer className="bg-[#171717] pt-14">
            <div className="collect flex gap-10 justify-between flex-wrap">
                <div className="flex flex-col gap-6 w-[350px] text-sm/relaxed">
                    <img src={Logo} alt={"logo"} width={200}/>
                    <p className="text-[#d2d2d2]">Lorem ipsum dolor sit amet consectetur adipisicing elit Temporibus deleniti odit.</p>
                    <div className="flex gap-4 up">
                        <a href={"#"}><img src={Insta} alt="media" width={35} className="rounded-md"/></a>
                        <a href={"#"}><img src={Linked} alt="media" width={35} className="rounded-md"/></a>
                        <a href={"#"}><img src={Face} alt="media" width={35} className="rounded-md"/></a>
                        <a href={"#"}><img src={Googel} alt="media" width={35} className="rounded-md"/></a>
                    </div>
                </div>
                <div className='w-[180px]'>
                    <h3 className="text-2xl font-bold text-white mb-6">Find It Fast</h3>
                    <ul>
                        {data1.map((text,idx)=>(
                            <li key={idx} className="flex gap-2 mt-2 text-[#c6c6c6] cursor-pointer transition-all hover:text-white
                            hover:pl-1">
                                <MdPlayArrow className="text_color w-fit" /> 
                                <span className=" text-sm">{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='w-[180px]'> 
                    <h3 className="text-2xl font-bold text-white mb-6">Quick Links</h3>
                    <ul>
                        {data2.map((text,idx)=>(
                            <li key={idx} className="flex gap-2 mt-2 text-[#c6c6c6] cursor-pointer transition-all hover:text-white
                            hover:pl-1">
                                <MdPlayArrow className="text_color w-fit" /> 
                                <span className=" text-sm">{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className=" w-[180px] max-sm:hidden">
                    <h3 className="text-2xl font-bold mb-6 text-white">Service us</h3>
                    <ul>
                        {data3.map((text,idx)=>(
                            <li key={idx} className="flex gap-2 mt-2 text-[#c6c6c6] cursor-pointer transition-all hover:text-white
                            hover:pl-1">
                                <MdPlayArrow className="text_color w-fit" /> 
                                <span className="text-sm">{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className=" bg-[#292929] flex gap-1 py-6 text-xl max-sm:text-sm text-white mt-8 ">
                <div className="collect">
                    <p className="text-center">© <span className="text_color">  Ahmed Hassan.</span> All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer  