import React from "react";
import Link from "next/link";


//const listItems = numbers.map((number) =>  <li>{number}</li>);

function NumberList(props) {
    const opciones = [
        {id:1, option:"clustering", description:"El clustering consiste en agrupar ítems en grupos con características similares y se utiliza para determinar patrones climáticos, agrupar artículos por temas o para segmentar clientes."},
        {id:2, option:"trees", description:"In computer science, a tree is a widely used abstract data type that represents a hierarchical tree structure with a set of connected nodes. Each node in the tree can be connected to many children (depending on the type of tree), but must be connected to exactly one parent, except for the root node, which has no parent. "},
        {id:3, option:"neural networks", description:"Artificial neural networks (ANNs), usually simply called neural networks (NNs) or, more simply yet, neural nets,[1] are computing systems inspired by the biological neural networks that constitute animal brains. "},
        {id:4, option:"tradiconal equations", description:"Image indices are images that are computed from multiband images. The images emphasize a specific phenomenon that is present, while mitigating other factors that degrade the effects in the image."}
    ];
    
    const listOption = opciones.map( (item) =>
        <li key={item.id}>
            <div>{item.description}</div>
            <button >{item.option}</button>
        </li>
    );
    return (
        <div className="container mx-auto h-screen bg-red-300">
            <div className="h-1/5 bg-red-400">
                <h1>Global Options</h1>
            </div>
            
            <div className="h-3/5 bg-green-300">
                <p>Similar to how the human brain gains knowledge and understanding, machine learning relies on input, such as training data or knowledge graphs, to understand entities, domains and the connections between them. With entities defined, deep learning can begin.</p>
                <ul>
                    {listOption}
                </ul>
            </div>

            <div className=" h-1/5 bg-gray-400">
                final
            </div>
            
        </div>
    );
}

export default NumberList;