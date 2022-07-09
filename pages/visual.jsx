import React, { Component } from 'react';
import "react-vis/dist/style.css";
import { XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, MarkSeries } from 'react-vis';


class App extends Component {
    render() {
        const data = [
            { x: 0, y: 8 },
            { x: 1, y: 5 },
            { x: 2, y: 4 },
            { x: 3, y: 9 },
            { x: 4, y: 1 },
            { x: 5, y: 7 },
            { x: 6, y: 6 },
            { x: 7, y: 3 },
            { x: 8, y: 2 },
            { x: 9, y: 0 }
        ];

        const data1 = [
            { x: 1, y: 8 },
            { x: 2, y: 5 },
            { x: 3, y: 4 },
            { x: 4, y: 9 },
            { x: 5, y: 1 },
            { x: 6, y: 7 },
            { x: 7, y: 6 },
            { x: 8, y: 3 },
            { x: 9, y: 2 },
            { x: 0, y: 0 }
        ];
        return (
            <div>
                <h2>image</h2>
                <XYPlot height={300} width={300}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <MarkSeries  data={data} />
                    <MarkSeries  data={data1} color="red"/>
                </XYPlot>
            </div>
        );
    }
}

export default App;
