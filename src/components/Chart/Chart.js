import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({dataPoints}) => {

  // 모든 값 찾기
  const dataPointValue = dataPoints.map(dp=>dp.value);
  // 1년치 총액
  const maximumValue = dataPointValue.reduce((accum,cur)=>accum+cur,0);
  console.log(maximumValue);
  // 그중에서 제일 지출이 높은 값
  return (
    <div className="chart">
      {dataPoints.map(({label,value}) => (
        <ChartBar 
        key={label} 
        label={label} 
        currentValue={value} 
        maxValue={maximumValue} 
        />
      ))}
    </div>
  );
};

export default Chart;