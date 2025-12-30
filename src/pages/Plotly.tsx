import React from 'react';
import Plot from 'react-plotly.js';

// Установите библиотеку если нужно
// npm install react-plotly.js plotly.js

const Plotly = () => {
    return (
        <div style={{ padding: '20px' }}>
            <Plot
                data={[
                    {
                        x: [1, 2, 3],
                        y: [2, 6, 3],
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: { color: 'red' },
                    }
                ]}
                layout={{
                    width: 400,
                    height: 300,
                }}
            />
        </div>
    );
}

export default Plotly;