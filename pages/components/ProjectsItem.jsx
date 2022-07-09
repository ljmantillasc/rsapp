import Image from 'next/image';

export default function ProjectItem({ image = "/logo.svg" ,project = "None", description="none", algorithms="none" }){
    return(
        <div className='relative flex flex-col items-center my-6 py-2 text-center border-t-4 border-b border-blue-700'>
            <div className='w-full'>
                <Image src={image} width="100px" height="100px" layout="responsive"/>
            </div> 
            {/* <img src={image} className="h-full w-full object-cover "  ></img> */}
            <span className="absolute top-3 left-2 px-2 bg-green-400 text-white rounded">Project: {" "+project}</span>
            <div className=' text-left  w-full rounded px-1'>
                <h3 className=' text-sm font-bold '>Description:</h3>
                <p className=' font-thin text-sm '>
                    {description}
                </p>
                <h3 className=' text-sm font-bold '> Algorith </h3>
                <p className=' font-thin text-sm '>
                    {algorithms}
                </p>
                <a className='text-blue-300 hover:text-blue-700 font-semibold text-sm'>Read more about</a>
            </div>
        </div>
    );
}