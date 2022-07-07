

export default function ServiceItem({title, service, description, tasks=[{id:1, description:"Taking images"}]}) {

    const listOption = tasks.map( (item) =>
        <li key={item.id}>
            <div>{item.description}</div>
        </li>
    );

    return (
        <div className="flex flex-col items-center text-center border-t-8 border-b border-blue-700 m-2 p-2" >
            <div className="text-2xl">
                {title}
            </div>
            <div className="flex flex-col text-left justify-between ">
                <div className="my-6 text-blue-600 font-bold">
                    <h3>{service}</h3>
                </div>
                <div >
                    <p className="text-sm">{description}</p>
                    <div className="px-8 my-4">
                        <ul className=" list-decimal">
                            { listOption }
                        </ul>
                    </div>
                    <p className="text-blue-500 hover:text-blue-900">Más información</p>
                </div>
            </div>
        </div>
    );
}