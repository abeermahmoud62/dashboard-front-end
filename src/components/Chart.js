import React from 'react'
import styled from "styled-components"
import FusionCharts from 'fusioncharts';
import ReactFC from 'react-fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
const categories = [
{
    "category": [
        { "label": "Jan" },
        { "label": "Feb" },
        { "label": "Mar" },
        { "label": "Apr" },
        { "label": "May" },
        { "label": "Jun" },
        { "label": "Jul" },
        { "label": "Aug" },
        { "label": "Seb" },
        { "label": "Oct" },
        { "label": "Nov" },
        { "label": "Dec" }
    ]
    }
];
const dataset = [
    {
    "seriesname": "Total Products",
    "data": [
        { "value": "400" },
        { "value": "600" },
        { "value": "600" },
        { "value": "500" },
        { "value": "300" },
        { "value": "500" },
        { "value": "400" },
        { "value": "600" },
        { "value": "600" },
        { "value": "300" },
        { "value": "400" },
        { "value": "600" },
    ]
    },
    {
    "seriesname": "Total Orders",
    "data": [
        { "value": "700" },
        { "value": "400" },
        { "value": "100" },
        { "value": "300" },
        { "value": "600" },
        { "value": "100" },
        { "value": "700" },
        { "value": "500" },
        { "value": "300" },
        { "value": "600" },
        { "value": "100" },
        { "value": "400" },
    ]
    },
    ];
    
    
    const chartConfigs = {
    type: 'mscolumn2d',
    width: 950,
    height: 400,
    dataFormat: 'json',
    dataSource: { 
    chart: {
        theme: "fusion"  ,               //Set the theme for your chart
        plotFillAlpha: "80",
        divLineIsDashed: "1",
        divLineDashLen: "1",
        divLineGapLen: "1",
        paletteColors: "#0099ff,#5c5cd6",
    },
    
    // Chart Data - from step 2
    categories: categories,
    dataset: dataset
}
    };

function Chart() {
    
    return (
        <Wrapper>
            <ReactFC className="chart" {...chartConfigs} />;
        </Wrapper>
    )
}
const Wrapper = styled.div`
.chart{
    margin-left:120px !important;
    margin-top:20px;
    border-radius: 5px;
    border:1px solid hsl(210, 31%, 80%);
    box-shadow: var(--light-shadow);
    transition: var(--transition);
}
`

export default Chart
