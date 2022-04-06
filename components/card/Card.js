import Image from "next/image"

export const Card = ({title, text,img,className_,_width,_height}) => {
    return (
        <div data-aos="flip-left" className="m-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-center">
                <Image src={img} width={_width} height={_height} alt='foto' className={className_}/>
            </div>
            <div className="p-5">
                <div className="flex justify-center">
                    <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </div>
                <p className="text-center mb-3 font-normal text-gray-700 dark:text-gray-400">{text}</p>
            </div>
        </div>
    )
}
