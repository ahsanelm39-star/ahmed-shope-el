import { ImAttachment } from "react-icons/im";

function Head({text}) {
    return (
        <div className=" absolute head color -top-13 py-3 px-8 left-0 font-bold text-xl text-white 
        flex gap-2 items-center
        ">
            <span className="head_span bg-white absolute top-0 left-0 border-12 border-[#d77111] border-t-transparent border-l-transparent"></span>
            <ImAttachment className="text-lg"/>
            <span>{text}</span>
        </div>
    )
}

export default Head