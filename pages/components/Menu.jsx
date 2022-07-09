

export default function Menu({children}){
    return (
        <div className=" flex ">
            <ul className=" py-4 flex flex-row">
                {children}
            </ul>
        </div>
    );
}