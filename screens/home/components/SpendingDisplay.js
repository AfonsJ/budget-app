import PieChart from 'react-native-pie-chart';
import React from 'react';
import categoryColor from '../assests/categoryColor.json';

export const SpendingDisplay = ({style,series,sliceColours}) => {
    const widthAndHeight = 200;

    let sum = series.reduce((prev,cur) => {
        return prev+cur;
    },0);

    return(
        <PieChart
            style={style}
            widthAndHeight={widthAndHeight}
            series={(series.length == 0 ||  sum == 0)? [100] : series}
            sliceColor={(sliceColours.length == 0 || sum == 0) ? [categoryColor.empty] : sliceColours}
            coverFill={'#FFFFFF'}
            coverRadius={0.45}
        />
    )
}