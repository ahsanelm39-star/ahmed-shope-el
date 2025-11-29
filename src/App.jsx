import './App.css'
//////improtant
import { useState } from "react";
import { useEffect } from 'react';
///////images
import Logo from '/img/363432af-90bb-47d8-9930-6df68ef86569.png'
import face from '/img/facebook (2)_1.png'
import insta from '/img/Instagram_logo_2022.svg.webp'
import linked from '/img/linked.png'
import gogle from '/img/تنزيل.png'
import HeroPhoto1 from '/img/banner_home1.png'
import HeroPhoto2 from '/img/banner_home2.png'
import HeroPhoto3 from '/img/banner_home3.png'
import Addsense3 from '/img/banner_box1.jpg'
import Addsense4 from '/img/banner_box2.jpg'
import Addsense5 from '/img/banner_box3.jpg'
import Addsense1 from '/img/banner_box4.jpg'
import Addsense2 from '/img/banner_box5.jpg'
import Prod1 from '/img/banner3_1.png'
import Prod2 from '/img/banner3_2.png'
import Prod3 from '/img/banner3_3.png'
import Prod4 from '/img/banner3_4.png'
//////
import prod0 from '/img/product/0.png'
import prod1 from '/img/product/1.png'
import prod2 from '/img/product/2.png'
import prod3 from '/img/product/3.png'
import prod4 from '/img/product/4.png'
import prod5 from '/img/product/5.png'
import prod6 from '/img/product/6.png'
import prod7 from '/img/product/7.png'
import prod8 from '/img/product/8.png'
import prod9 from '/img/product/9.png'
import prod10 from '/img/product/10.png'
import prod11 from '/img/product/11.png'
import prod12 from '/img/product/12.png'
import prod13 from '/img/product/13.png'
import prod14 from '/img/product/14.png'
import prod15 from '/img/product/15.png'
import prod16 from '/img/product/16.png'
import prod17 from '/img/product/17.png'
import prod18 from '/img/product/18.png'
import prod19 from '/img/product/19.png'
import prod20 from '/img/product/20.png'
import prod21 from '/img/product/21.png'
import prod22 from '/img/product/22.png'
import prod23 from '/img/product/23.png'
import prod24 from '/img/product/24.png'
/////icons
import { FaSearch,FaRegHeart,FaUserPlus } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { LuListCollapse } from 'react-icons/lu';
import { IoIosList,IoIosArrowDown,IoIosStar ,IoIosRemoveCircle} from "react-icons/io"; 
import { TiShoppingCart } from "react-icons/ti";
/////swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay,Pagination,FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
////compo
import Head from './Head';
import Footer from './Footer';
import { Link, Route,Routes } from 'react-router-dom';
// localStorage.clear()

function App() {
    const [icon,setIcon] = useState(false)
    function ListSearch(){
        if(icon){
            return (
                <div className="fixed top-0 left-0 w-1/1 h-screen bg-[#333333be] z-30 sm:hidden">
                    <span className=" absolute top-4 right-4 bg-red-500 font-bold text-white py-1 px-3 rounded-sm
                    text-xl cursor-pointer
                    " onClick={()=> setIcon(false)}>X</span>
                    <div>
                        <form className="flex w-[90%] mx-auto items-center h-[45px] mt-40 rounded-sm">
                            <input type="text" className="w-[90%] max-lg:w-[80%] bg-[#eee] pl-4 h-1/1 outline-0"  placeholder="Search for Products"/>
                            <div   className="color text-white w-[10%] max-lg:w-[20%] h-1/1 text-xl flex items-center justify-center mhover co_hover
                            ">
                                <FaSearch/>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
    }
    const menuEl = [
    { label: "Home", href: "/" },
    { label: "Products", href: "#products" },
    { label: "Accesories", href: "#products" },
    ];
    const menuItems = [
    { label: "Home", href: "/" },
    { label: "Product", href: "#products" },
    { label: "Accesories", href: "#products" },
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    function showMenuo() {
        const menuo = document.querySelector(".menuo") 
        menuo.classList.add("menuo-back")
    }
    useEffect(()=>{
        window.addEventListener("click",(e)=>{
        if (e.target) {
            if(e.target.classList.contains("menuo")){
            e.target.classList.remove("menuo-back")
            }
        }
        })
    },[])
    function remove() {
        const menuo = document.querySelector(".menuo") 
        menuo.classList.remove("menuo-back")
    }
    function Menuo() {

        return (
        <div className={`md:hidden fixed z-30 bg-[#eeeeee4b] w-[600%] h-[100vh]  -top-17 right-0
            flex justify-end  menuo transition-all duration-300 px-0`}>
            <div className=' bg-[#ffffff] h-[100vh] w-[250px] flex flex-col justify-evenly px-8 shadow-2xl -mr-4'>
                <span onClick={remove} className='text-2xl text-white color px-2 roundedfont-medium cursor-pointer absolute top-6 right-6 transition-all 
                hover:text-red-500'>X</span>
                <div>
                    <a href={'#hero'} >
                        <img src={Logo} alt='logo'/>
                    </a>
                </div>
                <ul className='flex flex-col gap-6 text-black font-medium items-center list-ul'>
                    {menuItems.map((item, idx) => (
                    <a href={item.href} key={item.label} onClick={() => { setActiveIndex(idx); }}>
                        <li className={`cursor-pointer transition-all hover:text-[#ffd76e] ${activeIndex === idx ? "on" : ""}`}>
                        {item.label}
                        </li>
                    </a>
                    ))}
                </ul>
                <div className='flex gap-2 justify-between'>
                    <img src={face} alt='social' width={30} height={30} className='cursor-pointer'/>
                    <img src={insta} alt='social' width={30} height={30} className='cursor-pointer'/>
                    <img src={linked} alt='social' width={30} height={30} className='cursor-pointer'/>
                    <img src={gogle} alt='social' width={30} height={30} className='cursor-pointer'/>
                </div>
            </div>
        </div>
        )
    }
    const [cat,setCat]=useState([])
    const [catMenuo,setCatMenuo]=useState(false)
    useEffect(()=>{
    
        fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then((res)=> setCat(res))
    },[])
    const categoryList = cat.map((cat)=>{
        return (
            <a href={"#"} key={cat.slug} className="block border-b-1 border-[#eee] py-1 pl-2 text-[#282828] text-sm font-normal">{cat.name}</a>
        )
    })
    const [actitive,setActive] = useState(0)

    //////////////////////header finish
    //////////////////////start hero
    const data =[Prod1,Prod2,Prod3,Prod4]
    const dataList = data.map((image,idx)=>{
        return ( 
            <div key={idx} className="w-[300px] flex gap-4 back p-4 mt-10 max-sm:w-1/1">
                <img src={image} alt="ptoduct" width={140} height={40}/>
                <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold">Break Disc deals on this</h3>
                    <div className="flex gap-2 items-center">
                        <span className="font-bold text-[#717171]">Up To</span>
                        <span className="text-2xl font-bold text_color">70%</span>
                    </div>
                    <a href={"#"} className="font-bold co_hover hover_text_color">Shop Now</a>
                </div>
            </div>
        )
    })
    //////////////////////hero finish
    /////////////////////start product section 1
    
    const data1 = [
        {
            img:prod0,
            title:"Lenovo Monitor Legion R27fc-30 Gaming",
            price:"220",
            isted:"300"
        },
        {
            img:prod1,
            title:"Infinix Smart (Galaxy White Ram 4GB 64GB",
            price:"220",
            isted:"300"
        }
        ,
        {
            img:prod24,
            title:"Lenovo Monitor Legion R27fc-30 Gaming",
            price:"80",
            isted:"100"
        },
    ]
    const data2 = [
        {
            img:prod2,
            title:"Dell Laptop Latitude 5530 Core i7-1255U 8GB SSD",
            price:"260",
            isted:"300"
        },
        {
            img:prod3,
            title:"Canon EOS RP Mirrorless Camera",
            price:"240",
            isted:"300"
        },
    ]
    
    const data3 = [
        {
            img:prod4,
            title:"Infinix Smart (Galaxy White Ram 4GB 64GB",
            price:"600",
            isted:"700"
        },
        {
            img:prod5,
            title:"Samsung 27-Inch G55C Odyssey QHD 4k",
            price:"280",
            isted:"340"
        },

    ]
    const data4 = [
        {
            img:prod6,
            title:"Infinix Smart (Galaxy White Ram 4GB 64GB",
            price:"350",
            isted:"410"
        },
        {
            img:prod7,
            title:"HP Victus Gaming Laptop 8RAM SSD",
            price:"350",
            isted:"410"
        },
    ]

    const dataList1 = data1.map((Box,idx)=>{ 
        return (
            <SwiperSlide key={idx} className='flex flex-col p-4 relative m-0'>
                    <img src={Box.img} alt='product' className='h-40 mt-4' />
                    <div className='flex gap-1 text_color my-4'>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                    </div>
                    <h4 className='text-lg/tight font-medium m3-4'>{Box.title}</h4>
                    <div className='flex gap-2 mb-4 text-lg'>
                        <span className='text_color font-bold price'>${Box.price}</span>
                        <del className='text-[#8e8e8e] '>${Box.isted}</del>
                    </div>
                    <div className=' flex items-center gap-4 justify-between'>
                        <div className="flex color co_hover items-center text-white rounded mhover">
                            <TiShoppingCart className='text-lg card ml-2'/>
                            <div className='card p-2'>Add To Card</div>
                        </div>
                            <FaRegHeart className='favorate p-2 text-4xl border-1 border-[#ccc] cursor-pointer'/>
                    </div>
                    <div className=' absolute bg-red-500 text-white font-bold top-3 right-3 p-2 rounded text-sm'>
                        <div>%20</div>
                    </div>
            </SwiperSlide>
        )
    })
    const dataList2 = data2.map((Box,idx)=>{
        return (
            <SwiperSlide key={idx} className='flex flex-col p-4 h-100  relative w-[270px]'>
                    <img src={Box.img} alt='product' className='h-40 mt-4' />
                    <div className='flex gap-1 text_color my-4'>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                    </div>
                    <h4 className='text-lg/tight font-medium m3-4'>{Box.title}</h4>
                    <div className='flex gap-2 mb-4 text-lg'>
                        <span className='text_color font-bold'>${Box.price}</span>
                        <del className='text-[#8e8e8e] '>${Box.isted}</del>
                    </div>
                    <div className='flex items-center gap-4 justify-between'>
                        <div className='flex color co_hover items-center text-white rounded mhover'>
                            <TiShoppingCart className='text-lg card ml-2'/>
                            <span className='card p-2'>Add To Card</span>
                        </div>
                        <FaRegHeart className='favorate p-2 text-4xl border-1 border-[#ccc] cursor-pointer'/>
                    </div>
                    <div className=' absolute bg-red-500 text-white font-bold top-3 right-3 p-2 rounded text-sm'>
                        <span>%20</span>
                    </div>
            </SwiperSlide>
        )
    })
    const dataList3 = data3.map((Box,idx)=>{
        return (
            <SwiperSlide key={idx} className='flex flex-col p-4 h-100  relative'>
                    <img src={Box.img} alt='product' className='h-40 mt-4' />
                    <div className='flex gap-1 text_color my-4'>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                    </div>
                    <h4 className='text-lg/tight font-medium m3-4'>{Box.title}</h4>
                    <div className='flex gap-2 mb-4 text-lg'>
                        <span className='text_color font-bold'>${Box.price}</span>
                        <del className='text-[#8e8e8e] '>${Box.isted}</del>
                    </div>
                    <div className='flex items-center gap-4 justify-between'>
                        <div className='flex color co_hover items-center text-white rounded mhover'>
                            <TiShoppingCart className='text-lg card ml-2'/>
                            <span className='card p-2'>Add To Card</span>
                        </div>
                        <FaRegHeart className='favorate p-2 text-4xl border-1 border-[#ccc] cursor-pointer'/>
                    </div>
                    <div className=' absolute bg-red-500 text-white font-bold top-3 right-3 p-2 rounded text-sm'>
                        <span>%20</span>
                    </div>
            </SwiperSlide>
        )
    })
    const dataList4 = data4.map((Box,idx)=>{
        return (
            <SwiperSlide key={idx} className='flex flex-col p-4 h-100  relative'>
                    <img src={Box.img} alt='product' className='h-40 mt-4' />
                    <div className='flex gap-1 text_color my-4'>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                    </div>
                    <h4 className='text-lg/tight font-medium m3-4'>{Box.title}</h4>
                    <div className='flex gap-2 mb-4 text-lg'>
                        <span className='text_color font-bold'>${Box.price}</span>
                        <del className='text-[#8e8e8e] '>${Box.isted}</del>
                    </div>
                    <div className='flex items-center gap-4 justify-between'>
                        <div className='flex color co_hover items-center text-white rounded mhover'>
                            <TiShoppingCart className='text-lg card ml-2'/>
                            <span className='card p-2'>Add To Card</span>
                        </div>
                        <FaRegHeart className='favorate p-2 text-4xl border-1 border-[#ccc] cursor-pointer'/>
                    </div>
                    <div className=' absolute bg-red-500 text-white font-bold top-3 right-3 p-2 rounded text-sm'>
                        <span>%20</span>
                    </div>
            </SwiperSlide>
        )
    })
    


    /////////////////////finsh product section 1
    /////////////////////start product section 2
    const data21 = [
        {
            img:prod8,
            title:"Infinix Smart (Galaxy White Ram 4GB 64GB",
            price:"220",
            isted:"300"
        },
        {
            img:prod9,
            title:"Handheld Barcode Sccaner 1D/2D/QR",
            price:"80",
            isted:"100"
        }
    ]
    const data22 = [
        {
            img:prod10,
            title:"Large Venue building mapping Projector",
            price:"260",
            isted:"300"
        },
        {
            img:prod11,
            title:"Infinix Hot 4oi (Ram: 4 + 4GB , 128GB)",
            price:"240",
            isted:"300"
        },
    ]
    const data23 = [
        {
            img:prod12,
            title:"HP DeskJet 2710 Printer, All-in-One",
            price:"600",
            isted:"700"
        },
        {
            img:prod13,
            title:"Zanussi Washing Machine 8 Kg 1200 RPM",
            price:"280",
            isted:"340"
        }
    ]
    const data24 = [
        {
            img:prod14,
            title:"Sencor STS 5070SS Electric Toaster for Four Slices",
            price:"350",
            isted:"410"
        },
        {
            img:prod15,
            title:"Infinix Hot 4oi (Ram: 4 + 4GB , 128GB)",
            price:"350",
            isted:"410"
        },
    ]
    

    const dataList5 = data21.map((Box,idx)=>{
        return (
            <SwiperSlide key={idx} className='flex flex-col p-4 relative m-0'>
                    <img src={Box.img} alt='product' className='h-40 mt-4' />
                    <div className='flex gap-1 text_color my-4'>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                    </div>
                    <h4 className='text-lg/tight font-medium m3-4'>{Box.title}</h4>
                    <div className='flex gap-2 mb-4 text-lg'>
                        <span className='text_color font-bold'>${Box.price}</span>
                        <del className='text-[#8e8e8e] '>${Box.isted}</del>
                    </div>
                    <div className='flex items-center gap-4 justify-between'>
                        <div className='flex color co_hover  items-center text-white  rounded mhover'>
                            <TiShoppingCart className='text-lg card ml-2'/>
                            <div className='card p-2'>Add To Card</div>
                        </div>
                        <FaRegHeart className='favorate p-2 text-4xl border-1 border-[#ccc] cursor-pointer'/>
                    </div>
                    <div className=' absolute bg-red-500 text-white font-bold top-3 right-3 p-2 rounded text-sm'>
                        <span>%20</span>
                    </div>
            </SwiperSlide>
        )
    })
    const dataList6 = data22.map((Box,idx)=>{
        return (
            <SwiperSlide key={idx} className='flex flex-col p-4 relative m-0'>
                    <img src={Box.img} alt='product' className='h-40 mt-4' />
                    <div className='flex gap-1 text_color my-4'>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                    </div>
                    <h4 className='text-lg/tight font-medium m3-4'>{Box.title}</h4>
                    <div className='flex gap-2 mb-4 text-lg'>
                        <span className='text_color font-bold'>${Box.price}</span>
                        <del className='text-[#8e8e8e] '>${Box.isted}</del>
                    </div>
                    <div className='flex items-center gap-4 justify-between'>
                        <div className='flex color co_hover items-center text-white  rounded mhover'>
                            <TiShoppingCart className='text-lg card ml-2'/>
                            <span className='card p-2'>Add To Card</span>
                        </div>
                        <FaRegHeart className='favorate p-2 text-4xl border-1 border-[#ccc] cursor-pointer'/>
                    </div>
                    <div className=' absolute bg-red-500 text-white font-bold top-3 right-3 p-2 rounded text-sm'>
                        <span>%20</span>
                    </div>
            </SwiperSlide>
        )
    })
    const dataList7 = data23.map((Box,idx)=>{
        return (
            <SwiperSlide key={idx} className='flex flex-col p-4 relative m-0'>
                    <img src={Box.img} alt='product' className='h-40 mt-4' />
                    <div className='flex gap-1 text_color my-4'>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                    </div>
                    <h4 className='text-lg/tight font-medium m3-4'>{Box.title}</h4>
                    <div className='flex gap-2 mb-4 text-lg'>
                        <span className='text_color font-bold'>${Box.price}</span>
                        <del className='text-[#8e8e8e] '>${Box.isted}</del>
                    </div>
                    <div className='flex items-center gap-4 justify-between'>
                        <div className='flex color co_hover  items-center text-white rounded mhover'>
                            <TiShoppingCart className='text-lg card ml-2'/>
                            <span className='card p-2'>Add To Card</span>
                        </div>
                        <FaRegHeart className='favorate p-2 text-4xl border-1 border-[#ccc] cursor-pointer'/>
                    </div>
                    <div className=' absolute bg-red-500 text-white font-bold top-3 right-3 p-2 rounded text-sm'>
                        <span>%20</span>
                    </div>
            </SwiperSlide>
        )
    })
    const dataList8 = data24.map((Box,idx)=>{
        return (
            <SwiperSlide key={idx} className='flex flex-col p-4 relative m-0'>
                    <img src={Box.img} alt='product' className='h-40 mt-4' />
                    <div className='flex gap-1 text_color my-4'>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                    </div>
                    <h4 className='text-lg/tight font-medium m3-4'>{Box.title}</h4>
                    <div className='flex gap-2 mb-4 text-lg'>
                        <span className='text_color font-bold'>${Box.price}</span>
                        <del className='text-[#8e8e8e] '>${Box.isted}</del>
                    </div>
                    <div className='flex items-center gap-4 justify-between'>
                        <div className='flex color co_hover items-center text-white rounded mhover'>
                            <TiShoppingCart className='text-lg card ml-2'/>
                            <span className='card p-2'>Add To Card</span>
                        </div>
                        <FaRegHeart className='favorate p-2 text-4xl border-1 border-[#ccc] cursor-pointer'/>
                    </div>
                    <div className=' absolute bg-red-500 text-white font-bold top-3 right-3 p-2 rounded text-sm'>
                        <span>%20</span>
                    </div>
            </SwiperSlide>
        )
    })
    /////////////////////finsh product section 2
    /////////////////////start product section 3
    const data31 = [
        {
            img:prod16,
            title:"Washing machine 959 series 8Kg",
            price:"220",
            isted:"300"
        },
        {
            img:prod17,
            title:"HIKVISION PTZ Camera 4K Outdoo",
            price:"80",
            isted:"100"
        }
    ]
    const data32 = [
        {
            img:prod18,
            title:"Infinix Hot 4oi (Ram: 4 + 4GB , 128GB)",
            price:"260",
            isted:"300"
        },
        {
            img:prod19,
            title:"VIVAX kettle WH-175L with a capacity of 1.7",
            price:"240",
            isted:"300"
        },
    ]
    const data33 = [
        {
            img:prod20,
            title:"Kenstar Ester ABS plsstic 750W Mixer",
            price:"600",
            isted:"700"
        },
        {
            img:prod21,
            title:"Kenstar Ester ABS plsstic 750W Mixer",
            price:"280",
            isted:"340"
        }
    ]
    const data34 = [
        {
            img:prod22,
            title:"Washing machine 959 series 8Kg",
            price:"350",
            isted:"410"
        },
        {
            img:prod23,
            title:"Sharp 42 Lt Electronic Oven Convection",
            price:"350",
            isted:"410"
        },
    ]

    

    const dataList9 = data31.map((Box,idx)=>{
        return (
            <SwiperSlide key={idx} className='flex flex-col p-4 relative m-0'>
                    <img src={Box.img} alt='product' className='h-40 mt-4' />
                    <div className='flex gap-1 text_color my-4'>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                    </div>
                    <h4 className='text-lg/tight font-medium m3-4'>{Box.title}</h4>
                    <div className='flex gap-2 mb-4 text-lg'>
                        <span className='text_color font-bold'>${Box.price}</span>
                        <del className='text-[#8e8e8e] '>${Box.isted}</del>
                    </div>
                    <div className='flex items-center gap-4 justify-between'>
                        <div className='flex color co_hover  items-center text-white  rounded mhover'>
                            <TiShoppingCart className='text-lg card ml-2'/>
                            <div className='card p-2'>Add To Card</div>
                        </div>
                        <FaRegHeart className='favorate p-2 text-4xl border-1 border-[#ccc] cursor-pointer'/>
                    </div>
                    <div className=' absolute bg-red-500 text-white font-bold top-3 right-3 p-2 rounded text-sm'>
                        <span>%20</span>
                    </div>
            </SwiperSlide>
        )
    })
    const dataList10 = data32.map((Box,idx)=>{
        return (
            <SwiperSlide key={idx} className='flex flex-col p-4 relative m-0'>
                    <img src={Box.img} alt='product' className='h-40 mt-4' />
                    <div className='flex gap-1 text_color my-4'>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                    </div>
                    <h4 className='text-lg/tight font-medium m3-4'>{Box.title}</h4>
                    <div className='flex gap-2 mb-4 text-lg'>
                        <span className='text_color font-bold'>${Box.price}</span>
                        <del className='text-[#8e8e8e] '>${Box.isted}</del>
                    </div>
                    <div className='flex items-center gap-4 justify-between'>
                        <div className='flex color co_hover items-center text-white  rounded mhover'>
                            <TiShoppingCart className='text-lg card ml-2'/>
                            <span className='card p-2'>Add To Card</span>
                        </div>
                        <FaRegHeart className='favorate p-2 text-4xl border-1 border-[#ccc] cursor-pointer'/>
                    </div>
                    <div className=' absolute bg-red-500 text-white font-bold top-3 right-3 p-2 rounded text-sm'>
                        <span>%20</span>
                    </div>
            </SwiperSlide>
        )
    })
    const dataList11 = data33.map((Box,idx)=>{
        return (
            <SwiperSlide key={idx} className='flex flex-col p-4 relative m-0'>
                    <img src={Box.img} alt='product' className='h-40 mt-4' />
                    <div className='flex gap-1 text_color my-4'>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                    </div>
                    <h4 className='text-lg/tight font-medium m3-4'>{Box.title}</h4>
                    <div className='flex gap-2 mb-4 text-lg'>
                        <span className='text_color font-bold'>${Box.price}</span>
                        <del className='text-[#8e8e8e] '>${Box.isted}</del>
                    </div>
                    <div className='flex items-center gap-4 justify-between'>
                        <div className='flex color co_hover  items-center text-white rounded mhover'>
                            <TiShoppingCart className='text-lg card ml-2'/>
                            <span className='card p-2'>Add To Card</span>
                        </div>
                        <FaRegHeart className='favorate p-2 text-4xl border-1 border-[#ccc] cursor-pointer'/>
                    </div>
                    <div className=' absolute bg-red-500 text-white font-bold top-3 right-3 p-2 rounded text-sm'>
                        <span>%20</span>
                    </div>
            </SwiperSlide>
        )
    })
    const dataList12 = data34.map((Box,idx)=>{
        return (
            <SwiperSlide key={idx} className='flex flex-col p-4 relative m-0'>
                    <img src={Box.img} alt='product' className='h-40 mt-4' />
                    <div className='flex gap-1 text_color my-4'>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                    </div>
                    <h4 className='text-lg/tight font-medium m3-4'>{Box.title}</h4>
                    <div className='flex gap-2 mb-4 text-lg'>
                        <span className='text_color font-bold'>${Box.price}</span>
                        <del className='text-[#8e8e8e] '>${Box.isted}</del>
                    </div>
                    <div className='flex items-center gap-4 justify-between'>
                        <div className='flex color co_hover items-center text-white rounded mhover'>
                            <TiShoppingCart className='text-lg card ml-2'/>
                            <span className='card p-2'>Add To Card</span>
                        </div>
                        <FaRegHeart className='favorate p-2 text-4xl border-1 border-[#ccc] cursor-pointer'/>
                    </div>
                    <div className=' absolute bg-red-500 text-white font-bold top-3 right-3 p-2 rounded text-sm'>
                        <span>%20</span>
                    </div>
            </SwiperSlide>
        )
    })
    /////////////////////finsh product section 3
    ////////////////////start login 
    const [login,setLogin] = useState(false)
    function Login () {
        if(login){
            return (
            <div className='fixed top-0 left-0 z-50 h-screen w-1/1 bg-[#2b2b2bd5] flex justify-center items-center px-4'>
                <span className=' absolute top-4 right-4 text-xl font-bold text-white bg-red-500 py-1 px-3 rounded-full cursor-pointer
                ' onClick={()=>{
                    setLogin(false)
                }}>X</span>
                <div className='w-[350px] p-4 pb-6 drop-shadow-2xl bg-white h-fit rounded-md flex flex-col justify-center'>
                    <img src={Logo} alt="logo" className='w-40 mt-4 mb-8 mx-auto' />
                    <form className='flex flex-col'>
                        <input type="text" className='w-1/1 outline-0 bg-[#eee] h-[40px] rounded-md pl-2 mb-4' placeholder='Your Email'  required/>
                        <div className=' relative'>
                            <input type="text" className='w-1/1 outline-0 bg-[#eee]  h-[40px] rounded-md pl-2 mb-4' placeholder='Your Password' required />
                            <span className='text-sm text_color absolute right-0 -bottom-2'>Forget Password ?</span>
                        </div>
                        <button className='w-1/1 text-center rounded-md py-2 mt-6 color mhover co_hover text-white font-bold'>
                        <span>Login</span>
                        </button>
                        <div className='w-1/1 text-center rounded-md py-2 mt-4 text_color border  font-bold cursor-pointer'>
                            <span>Regester</span>
                        </div>
                    </form>
                </div>
            </div>
        )
        }
    }
    //////////////////////

    function card () {
        const cardList = document.querySelector('.card-list') 
        cardList.classList.remove("translate-x-[100%]")
    }
    function faveroteProducts () {
        const cardList = document.querySelector('.favorate-list') 
        cardList.classList.remove("translate-x-[100%]")
    }
    /////////////add element to card
    const [arr,setArr]=useState([])
    useEffect(()=>{
            if(localStorage.data){
                setArr(JSON.parse(localStorage.data))
            }
        
        window.addEventListener("click",(e)=>{
            if(e.target.classList.contains("card")){
                    let div = document.createElement("div")
                    div.className="alart"
                    let divT = document.createTextNode("Aded to card")
                    let span = document.createElement("span")
                    let spanT = document.createTextNode("X")
                    span.append(spanT)
                    div.appendChild(span)
                    div.append(divT)
                    document.body.appendChild(div)
                    span.onclick=()=>{
                        document.querySelector(".alart").remove()
                    }
                e.target.parentElement.classList.add("active")
                e.target.parentElement.parentElement.parentElement.classList.add("in_card")
                const parent = e.target.parentElement.parentElement.parentElement
                const title = parent.querySelector("h4").innerHTML
                const src = parent.querySelector("img").src
                const price = parent.querySelector("span").innerHTML
                setArr((prev)=>{
                    let list = [...prev,{title:title,price:price,src:src}]
                    localStorage.data=JSON.stringify(list)
                    return list
                })
            }
        })
    },[])
    const [arr2,setArr2]=useState([])
    useEffect(()=>{
            if(localStorage.data2){
                setArr2(JSON.parse(localStorage.data2))
            }
        
        window.addEventListener("click",(e)=>{
            if(e.target.classList.contains("favorate")){
                let div = document.createElement("div")
                    div.className="alart"
                    let divT = document.createTextNode("Aded to favorite")
                    let span = document.createElement("span")
                    let spanT = document.createTextNode("X")
                    span.append(spanT)
                    div.appendChild(span)
                    div.append(divT)
                    document.body.appendChild(div)
                    span.onclick=()=>{
                        document.querySelector(".alart").remove()
                    }
                e.target.classList.add("active2")
                e.target.parentElement.parentElement.parentElement.classList.add("in_card")
                const parent = e.target.parentElement.parentElement.parentElement
                const title = parent.querySelector("h4").innerHTML
                const src = parent.querySelector("img").src
                const price = parent.querySelector("span").innerHTML
                setArr2((prev)=>{
                    let list = [...prev,{title:title,price:price,src:src}]
                    localStorage.data2=JSON.stringify(list)
                    return list
                })
            }
        })
    },[])
let neWList = []
function removeElementFromCard (e){
    arr.map((el,idx)=> {
        if(e.id != idx.toString()){
            neWList.push(el)
        }
    })
    localStorage.data=JSON.stringify(neWList)
    setArr(neWList)
}
let neWList2 = []
function removeElementFromCard2 (e){
    arr2.map((el,idx)=> {
        if(e.id != idx.toString()){
            neWList2.push(el)
        }
    })
    localStorage.data2=JSON.stringify(neWList2)
    setArr2(neWList2)
}
    ////////////////
    const carEl = arr.map((el,idx)=>{
        return (
            <div key={idx} id={idx} className='mb-4 border-b-1 border-[#ddd] pb-4 relative'>
                <span className=' absolute top-4 right-4 text-2xl text-red-500 card_el_remove' onClick={(e)=>{
                    removeElementFromCard(e.target.parentElement.parentElement.parentElement)
                }}>
                    <IoIosRemoveCircle className='cursor-pointer '/>
                </span>
                <img src={el.src} alt="" className='w-30'/>
                <div>
                    <h3 className='text-xl font-bold mb-2'>{el.title}</h3>
                    <span className='font-bold text_color text-xl'>{el.price}</span>
                </div>
            </div>
        )
    })
    const carEl2 = arr2.map((el,idx)=>{
        return (
            <div key={idx} id={idx} className='mb-4 border-b-1 border-[#ddd] pb-4 relative'>
                <span className=' absolute top-4 right-4 text-2xl text-red-500 card_el_remove' onClick={(e)=>{
                    removeElementFromCard2(e.target.parentElement.parentElement.parentElement)
                }}>
                    <IoIosRemoveCircle className='cursor-pointer '/>
                </span>
                <img src={el.src} alt="" />
                <div>
                    <h3 className='text-xl font-bold mb-2'>{el.title}</h3>
                    <span className='font-bold text_color text-xl'>{el.price}</span>
                </div>
            </div>
        )
    })
    //////
    function  CardList () {
            return (
                <div className="card_list card-list min-h-screen w-85 bg-white fixed z-30 top-0 right-0 shadow-2xl border-1 border-[#ddd] 
                transition duration-500 translate-x-[100%] flex flex-col">
                    <span className=' absolute top-3 right-3 text-black border-1 border-black py-1 px-3 rounded-full text-lg cursor-pointer'
                    onClick={()=>{
                        const cardList = document.querySelector('.card-list') 
                        cardList.classList.add("translate-x-[100%]")}}>X</span>
                    <h2 className=" text-3xl font-bold pl-4 pb-6 pt-8 border-b-2 border-[#ddd] text_color"> Shopping Card :</h2>
                    
                    <div className="h-[89vh] p-4 flex flex-col justify-between">
                        <div className=' pb-4 overflow-y-auto card-shadow pl-4'>
                            {carEl}
                        </div>
                        <div className='flex justify-between mt-4 items-center'>
                            <span className='color mhover py-4 px-8 text-sm text-white font-bold rounded-md co_hover'>checkout</span>
                            <span onClick={(()=>{
                                const cardList = document.querySelector('.card-list') 
                                cardList.classList.add("translate-x-[100%]")
                            })} className='py-4 px-8 bg-white text_color border-1 border-[#ff8716] cursor-pointer
                            font-bold text-sm rounded-md'>shop more</span>
                        </div>
                    </div>
                </div>
            )
    }
    function  Favorate () {
            return (
                <div className="card_list favorate-list min-h-screen w-85 bg-white fixed z-30 top-0 right-0 shadow-2xl border-1 border-[#ddd] 
                transition duration-500 translate-x-[100%] flex flex-col">
                    <span className=' absolute top-3 right-3 text-black border-1 border-black py-1 px-3 rounded-full text-lg cursor-pointer'
                    onClick={()=>{
                        const cardList = document.querySelector('.favorate-list') 
                        cardList.classList.add("translate-x-[100%]")}}>X</span>
                    <h2 className=" text-3xl font-bold pl-4 pb-6 pt-8 border-b-2 border-[#ddd] text_color"> Your Favorites :</h2>
                    
                    <div className="h-[89vh] p-4 flex flex-col justify-between">
                        <div className=' pb-4 overflow-y-auto card-shadow pl-4'>
                            {carEl2}
                        </div>
                        <div className='flex justify-between mt-4 items-center'>
                            <span className='color mhover py-4 px-8 text-sm text-white font-bold rounded-md co_hover'>checkout</span>
                            <span onClick={(()=>{
                                const cardList = document.querySelector('.favorate-list') 
                                cardList.classList.add("translate-x-[100%]")
                            })} className='py-4 px-8 bg-white text_color border-1 border-[#ff8716] cursor-pointer
                            font-bold text-sm rounded-md'>shop more</span>
                        </div>
                    </div>
                </div>
            )
    }
    //////
    return (
    <>
    <Login/>
        <header  className="header fixed w-1/1 top-0 left-0 z-25 bg-white">
            <div className="border-b-1 border-[#eee]">
                <div className="collect">
                    <div className=" py-3 max-md:py-2 flex justify-between items-center">
                        <div>
                        <img src={Logo} alt="logo" width={170} height={170} className="max-md:w-35"/> 
                        </div>
                        <form className="flex w-[500px] items-center h-[45px] max-lg:w-[300px] max-sm:hidden">
                            <input type="text" className="w-[90%] max-lg:w-[80%] bg-[#eee] pl-4 h-1/1 outline-0"  placeholder="Search for Products"/>
                            <div   className="color text-white w-[10%] max-lg:w-[20%] h-1/1 text-xl flex items-center justify-center mhover co_hover
                            ">
                                <FaSearch/>
                            </div>
                        </form>
                        <div  className="flex gap-6 items-center ">
                            {/* ///// */}
                            <ListSearch/>
                            <div onClick={()=>setIcon(true)} className="text-xl max-md:text-[17px] text-[#2f2b27] transition co_hover hover:text-black sm:hidden">
                                <FaSearch/>
                            </div>
                            {/* ///// */}
                            <div onClick={faveroteProducts} className="relative cursor-pointer">
                                <FaRegHeart  className="text-2xl max-md:text-xl"/>
                                <span className="absolute -top-3 -right-3 color rounded-full  text-white w-[20px] h-[20px] font-bold p-2 text-sm
                                flex items-center justify-center max-md:text-sm max-md:w-[18px] max-md:h-[18px]
                                ">{arr2.length}</span>
                            </div>
                            
                            {/* Card */}
                            <Favorate/>
                            <CardList/>
                            <div onClick={card} className="basket relative cursor-pointer max-lg:mr-4">
                                <TiShoppingCart  className="text-3xl max-md:text-2xl" />
                                <span className="absolute -top-2 -right-3 color rounded-full  text-white w-[20px] h-[20px] font-bold p-2 text-sm
                                flex items-center justify-center max-md:text-sm max-md:w-[18px] max-md:h-[18px] card-num">{arr.length}</span>
                            </div>
                            {/* Card */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="collect">
                <nav className="flex justify-between items-center">
                    <div className="flex gap-12 max-md:gap-6 items-center">
                        <div onClick={()=>{
                        setCatMenuo(!catMenuo)
                        }} className="flex gap-4 justify-center items-center color w-fit px-3 py-4 text-white text-lg font-bold
                            mhover co_hover relative max-md:text-sm max-md:py-3 max-md:px-2
                            ">
                            <IoIosList  className="text-xl "/>
                            <span> Category</span>
                            <IoIosArrowDown />
                            <div className={` absolute w-1/1 h-[400px] bg-white border-1 border-[#ddd] z-20 left-0 top-15
                            overflow-y-auto ${catMenuo ? "block" : "hidden"}
                            `}>
                                {categoryList}
                            </div>
                        </div>
                      {/*  */}
                        <ul className="ul max-md:hidden">
                        {menuEl.map((item,ind)=>(
                            <a key={ind} href={item.href} onClick={()=>setActive(ind)} className={`p-4 font-medium hover:text-[#ff9716] transition duration-250 
                            ${actitive === ind ? "on" :""}`} >{item.label}</a>
                        ))}
                        </ul>
                      {/*  */}
                    </div>
                    <div className="flex items-center gap-4 up">
                            <div onClick={()=>{
                                setLogin(true)
                            }} className="flex gap-2 items-center color text-white  rounded font-medium co_hover move max-md:text-sm py-2 px-3
                            mhover">
                                <span>Sign In</span>
                                <MdLogin/>
                            </div>  
                        <div onClick={showMenuo} className="md:hidden text-2xl cursor-pointer">
                                <LuListCollapse />
                        </div>
                        <Menuo />
                    </div>
                </nav>
            </div>
        </header>
        {/* ////// */}
        <Routes>
            <Route path='/' element={
                <>
                    <section className="mt-[160px] max-md:mt-[130px] mb-26" id='products'>
                        <div className="collect flex justify-between gap-6">
                            <div className='max-h-[500px] w-[75%] max-lg:w-1/1 max-md:hidden'>
                                <Swiper autoplay={{delay: 2500,disableOnInteraction: false,}} loop={true} pagination={{clickable: true,}} modules={[Autoplay,Pagination]} className="mySwiper ">
                                    <SwiperSlide> 
                                        <img src={HeroPhoto1} alt='hero photo' className='img'/> 
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={HeroPhoto2} alt='hero photo' className='img'/>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div>
                                <img src={HeroPhoto3} alt="hero photo" className="h-1/1 max-lg:hidden max-md:block max-md:w-1/1"/>
                            </div>
                        </div>
                        {/* <HeroProduct/> */}
                        <div className="collect flex justify-between gap-x-4 flex-wrap mt-10">
                            {dataList}
                        </div>
                        {/* <HeroProduct/> */}
                    </section>
                    {/* ///// */}
                    <section className="mb-30" >
                        <div className="mb-20">
                            {/* <Top last={last}/> */}
                            <div className="collect relative border-t-2 border-[#ff8716] pt-8 flex justify-center "> 
                                <Head text={"Hot Deals"}/>
                                <div className='w-1/1 flex justify-between up max-xl:flex-wrap p-0 gap-6'>
                                    <Swiper
                                    autoplay={{delay: 2000,disableOnInteraction: false,}} loop={true}
                                    slidesPerView={1}
                                    spaceBetween={20}
                                    freeMode={true}
                                    modules={[FreeMode,Autoplay, Pagination]}
                                    className={`border-1 border-[#ddd] shadow-xl 
                                        moveB transition duration-300 hover:shadow-2xl bg-white w-[270px] max-sm:w-1/1`}
                                >
                                    {dataList1}
                                    </Swiper>
                                    <Swiper
                                        autoplay={{delay: 2500,disableOnInteraction: false,}} loop={true}
                                        slidesPerView={1}
                                        spaceBetween={20}
                                        freeMode={true}
                                        modules={[FreeMode,Autoplay, Pagination]}
                                        className={`border-1 border-[#ddd] shadow-xl 
                                            moveB transition duration-300 hover:shadow-2xl bg-white w-[270px] max-sm:w-1/1`}
                                    >
                                        {dataList2}
                                    </Swiper>
                                    <Swiper
                                        autoplay={{delay: 2000,disableOnInteraction: false,}} loop={true}
                                        slidesPerView={1}
                                        spaceBetween={20}
                                        freeMode={true}
                                        modules={[FreeMode,Autoplay, Pagination]}
                                        className={`mySwiper  w-[270px] border-1 border-[#ddd] shadow-xl 
                                            moveB transition duration-300
                                        hover:shadow-2xl bg-white max-sm:w-1/1`}
                                    >
                                        {dataList3}
                                    </Swiper>
                                    <Swiper
                                        autoplay={{delay: 2500,disableOnInteraction: false,}} loop={true}
                                        slidesPerView={1}
                                        spaceBetween={20}
                                        freeMode={true}
                                        modules={[FreeMode,Autoplay, Pagination]}
                                        className={`mySwiper  w-[270px] border-1 border-[#ddd] shadow-xl 
                                            moveB transition duration-300
                                        hover:shadow-2xl bg-white max-sm:w-1/1`}
                                    >
                                        {dataList4}
                                    </Swiper>
                                </div>
                            </div>
                            {/* <Top last={last}/> */}
                        </div>
                        <div className="collect flex gap-4 max-lg:flex-wrap">
                            <img src={Addsense1} alt="photo" className="w-1/2 max-lg:w-1/1 max-sm:h-40"/>
                            <img src={Addsense2} alt="photo" className="w-1/2 max-lg:w-1/1 max-sm:h-40"/>
                        </div>
                        
                    </section>
                    {/* ///// */}
                    <section className="mb-20 " >
                        <div className="mb-20">
                            {/* <Top3 last={last}/> */}
                            <div className="collect relative border-t-2 border-[#ff8716] pt-8 flex justify-center">
                                <Head text={"Appliances"}/>
                                <div className='w-1/1 flex justify-between up max-xl:flex-wrap p-0 gap-6'>
                                    <Swiper
                                    autoplay={{delay: 2000,disableOnInteraction: false,}} loop={true}
                                    slidesPerView={1}
                                    spaceBetween={20}
                                    freeMode={true}
                                    modules={[FreeMode,Autoplay, Pagination]}
                                    className={`border-1 border-[#ddd] shadow-xl 
                                        moveB transition duration-300 hover:shadow-2xl bg-white w-[270px] max-sm:w-1/1`}
                                    >
                                        {dataList5}
                                    </Swiper>
                                    <Swiper
                                        autoplay={{delay: 2500,disableOnInteraction: false,}} loop={true}
                                        slidesPerView={1}
                                        spaceBetween={20}
                                        freeMode={true}
                                        modules={[FreeMode,Autoplay, Pagination]}
                                        className={`border-1 border-[#ddd] shadow-xl 
                                        moveB transition duration-300 hover:shadow-2xl bg-white w-[270px] max-sm:w-1/1`}
                                    >
                                        {dataList6}
                                    </Swiper>
                                    <Swiper
                                        autoplay={{delay: 2000,disableOnInteraction: false,}} loop={true}
                                        slidesPerView={1}
                                        spaceBetween={20}
                                        freeMode={true}
                                        modules={[FreeMode,Autoplay, Pagination]}
                                        className={`border-1 border-[#ddd] shadow-xl 
                                        moveB transition duration-300 hover:shadow-2xl bg-white w-[270px] max-sm:w-1/1`}
                                    >
                                        {dataList7}
                                    </Swiper>
                                    <Swiper
                                        autoplay={{delay: 2500,disableOnInteraction: false,}} loop={true}
                                        slidesPerView={1}
                                        spaceBetween={20}
                                        freeMode={true}
                                        modules={[FreeMode,Autoplay, Pagination]}
                                        className={`border-1 border-[#ddd] shadow-xl 
                                        moveB transition duration-300 hover:shadow-2xl bg-white w-[270px] max-sm:w-1/1`}
                                    >
                                        {dataList8}
                                    </Swiper>
                                </div>
                            </div>
                            {/* <Top3 last={last}/> */}
                        </div>
                        <div className="collect flex gap-4  max-lg:flex-wrap justify-between">
                            <img src={Addsense3} alt="photo" className="w-1/3 h-50 max-lg:w-[45%] max-md:w-1/1 "/>
                            <img src={Addsense4} alt="photo" className="w-1/3 h-50 max-lg:w-[45%] max-md:w-1/1"/>
                            <img src={Addsense5} alt="photo" className="w-1/3 h-50 max-lg:w-1/1 max-lg:h-70 max-md:h-50"/>
                        </div>
                    </section>
                    {/* ///// */}
                    <section className='py-8'id="products" >
                        <div className="mb-20">
                            {/* <Top3 last={last}/> */}
                            <div className="collect relative border-t-2 border-[#ff8716] pt-8 flex justify-center">
                                <Head text={"Appliances"}/>
                                <div className='w-1/1 flex justify-between up max-xl:flex-wrap p-0 gap-6'>
                                    <Swiper
                                    autoplay={{delay: 2000,disableOnInteraction: false,}} loop={true}
                                    slidesPerView={1}
                                    spaceBetween={20}
                                    freeMode={true}
                                    modules={[FreeMode,Autoplay, Pagination]}
                                    className={`border-1 border-[#ddd] shadow-xl 
                                        moveB transition duration-300 hover:shadow-2xl bg-white w-[270px] max-sm:w-1/1`}
                                    >
                                        {dataList9}
                                    </Swiper>
                                    <Swiper
                                        autoplay={{delay: 2500,disableOnInteraction: false,}} loop={true}
                                        slidesPerView={1}
                                        spaceBetween={20}
                                        freeMode={true}
                                        modules={[FreeMode,Autoplay, Pagination]}
                                        className={`border-1 border-[#ddd] shadow-xl 
                                        moveB transition duration-300 hover:shadow-2xl bg-white w-[270px] max-sm:w-1/1`}
                                    >
                                        {dataList10}
                                    </Swiper>
                                    <Swiper
                                        autoplay={{delay: 2000,disableOnInteraction: false,}} loop={true}
                                        slidesPerView={1}
                                        spaceBetween={20}
                                        freeMode={true}
                                        modules={[FreeMode,Autoplay, Pagination]}
                                        className={`border-1 border-[#ddd] shadow-xl 
                                        moveB transition duration-300 hover:shadow-2xl bg-white w-[270px] max-sm:w-1/1`}
                                    >
                                        {dataList11}
                                    </Swiper>
                                    <Swiper
                                        autoplay={{delay: 2500,disableOnInteraction: false,}} loop={true}
                                        slidesPerView={1}
                                        spaceBetween={20}
                                        freeMode={true}
                                        modules={[FreeMode,Autoplay, Pagination]}
                                        className={`border-1 border-[#ddd] shadow-xl 
                                        moveB transition duration-300 hover:shadow-2xl bg-white w-[270px] max-sm:w-1/1`}
                                    >
                                        {dataList12}
                                    </Swiper>
                                </div>
                            </div>
                            {/* <Top3 last={last}/> */}
                        </div>
                    </section>
                </>
            }/>
        </Routes>
        {/* ///// */}
        <Footer/>
        {/* ///// */}
        
    </>
    )
}

export default App