import React from 'react'
import * as V from 'victory';
import { VictoryBar, VictoryChart,VictoryLabel, VictoryAxis } from 'victory';
function Graph() {

    const data = [
        {quarter: 1, earnings: 8},
        {quarter: 2, earnings: 10},
        {quarter: 3, earnings: 8},
        {quarter: 4, earnings: 8}
      ];
  return (
    <div style={{width:'100%',}}>
    
    <div style={{height:250,width:'100%', float:'left', display:'flex', marginTop:'2%'}}>
              <VictoryChart
                   
                  // domainPadding will add space to each side of VictoryBar to
                  // prevent it from overlapping the axis
                  domainPadding={20}
              >
              <VictoryLabel
        x={225}
        y={25}
        textAnchor="middle"
        text="Average Clock in time"
      />
                  <VictoryAxis
                      // tickValues specifies both the number of ticks and where
                      // they are placed on the axis
                      tickValues={[1, 2, 3, 4]}
                      tickFormat={["January", "February", "March", "April"]}
                  />
                  <VictoryAxis
                      dependentAxis
                      // tickFormat specifies how ticks should be displayed
                      tickFormat={(x) => (`${x +1}:00`)}
                  />
                  <VictoryBar
                   style={{backgroundColor:'blue'}}
                      data={data}
                      x="quarter"
                      y="earnings"
                  />
              </VictoryChart>
              <VictoryChart
                   
                   // domainPadding will add space to each side of VictoryBar to
                   // prevent it from overlapping the axis
                   domainPadding={20}
               >
                   <VictoryLabel
        x={225}
        y={25}
        textAnchor="middle"
        text="Average Clock out time"
      />
                   <VictoryAxis
                       // tickValues specifies both the number of ticks and where
                       // they are placed on the axis
                       tickValues={[1, 2, 3, 4]}
                       tickFormat={["January", "February", "March", "April"]}
                   />
                   <VictoryAxis
                       dependentAxis
                       // tickFormat specifies how ticks should be displayed
                       tickFormat={(x) => (`${x +1}:00`)}
                   />
                   <VictoryBar
                       data={data}
                       x="quarter"
                       y="earnings"
                   />
               </VictoryChart>
    </div>

    </div>
  )
}

export default Graph