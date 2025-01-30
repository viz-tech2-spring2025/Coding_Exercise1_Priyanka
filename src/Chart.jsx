import * as d3 from "d3";

export function Chart({ data }) {
  const marginLeft = 200;
  const width = 800;
  const height = 2200;
  const marginRight = 40;
  const marginTop = 20;
  const marginBottom = 20;

  const heightBound = height - marginTop - marginBottom;
  const widthBound = width - marginLeft - marginRight;

  // Filter and process the data
  
  const agri_data = data
    .filter(
      (d) =>
        d["Country Name"] !== "Arab World" &&
        d["Country Name"] !== "Asia" &&
        d["Country Name"] !=="Africa Eastern and Southern" &&
        d["Country Name"] !== "Africa Western and Central" &&
        d["Country Name"] !== "Central Europe and the Baltics" &&
        d["Country Name"] !=="East Asia & Pacific (excluding high income)" &&
        d["Country Name"] !== "Early-demographic dividend" &&
        d["Country Name"] !== "East Asia & Pacific" &&
        d["Country Name"] !=="Europe & Central Asia (excluding high income)" &&
        d["Country Name"] !== "Europe & Central Asia" &&
        d["Country Name"] !== "Euro area" &&
        d["Country Name"] !=="European Union" &&
        d["Country Name"] !== "Fragile and conflict affected situations" &&
        d["Country Name"] !== "High income" &&
        d["Country Name"] !=="Heavily indebted poor countries (HIPC)" &&
        d["Country Name"] !== "IBRD only" &&
        d["Country Name"] !== "IDA & IBRD total" &&
        d["Country Name"] !=="IDA total" &&
        d["Country Name"] !== "IDA blend" &&
        d["Country Name"] !== "IDA only" &&
        d["Country Name"] !=="Not classified" &&
        d["Country Name"] !== "Latin America & Caribbean (excluding high income)" &&
        d["Country Name"] !== "Latin America & Caribbean" &&
        d["Country Name"] !=="Least developed countries: UN classification" &&
        d["Country Name"] !== "Low income" &&
        d["Country Name"] !== "Lower middle income" &&
        d["Country Name"] !=="Low & middle income" &&
        d["Country Name"] !== "Late-demographic dividend" &&
        d["Country Name"] !== "Middle East & North Africa" &&
        d["Country Name"] !=="Middle income" &&
        d["Country Name"] !== "Middle East & North Africa (excluding high income)" &&
        d["Country Name"] !== "North America" &&
        d["Country Name"] !=="OECD members" &&
        d["Country Name"] !== "Other small states" &&
        d["Country Name"] !== "Pre-demographic dividend" &&
        d["Country Name"] !=="Pacific island small states" &&
        d["Country Name"] !== "Post-demographic dividend" &&
        d["Country Name"] !== "Sub-Saharan Africa (excluding high income)" &&
        d["Country Name"] !=="Sub-Saharan Africa" &&
        d["Country Name"] !== "Small states" &&
        d["Country Name"] !== "East Asia & Pacific (IDA & IBRD countries)" &&
        d["Country Name"] !=="Europe & Central Asia (IDA & IBRD countries)" &&
        d["Country Name"] !== "Latin America & the Caribbean (IDA & IBRD countries)" &&
        d["Country Name"] !=="Middle East & North Africa (IDA & IBRD countries)" &&
        d["Country Name"] !== "South Asia (IDA & IBRD)" &&
        d["Country Name"] !=="Sub-Saharan Africa (IDA & IBRD countries)" &&
        d["Country Name"] !== "Upper middle income" &&
        d["Country Name"] !=="World" &&
        d["2022"] !== null
    )
    .map((d) => ({
      country: String(d["Country Name"]).trim(), 
      agri_percentage: Number(Number(d["2022"]).toFixed(2)), 
    }))
    .sort((a, b) => b.agri_percentage - a.agri_percentage); 

 
  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(agri_data, (d) => d.agri_percentage)]) 
    .range([0, widthBound]);

  const yScale = d3
    .scaleBand()
    .domain(agri_data.map((d) => d.country)) 
    .range([0, heightBound])
    .padding(0.12); 

  //console.log(agri_data);
  
  return (
    <div>
      <p>Percentage of agricultural land of all countries - 2022 data</p>
      <svg width={width} height={height}>
        {/* Render/ Draw the visualization */} 
        
         <g transform={`translate(${marginLeft}, ${marginTop})`}>
          <line x1={0} y1={0} x2={0} y2={heightBound} stroke="white" />
          {agri_data.map((d, i) => (
            <text
              key={`label-${i}`}
              x={-10}
              y={yScale(d.country) + yScale.bandwidth() / 2}
              textAnchor="end"
              alignmentBaseline="middle"
              fontSize="7"
              fill="white"
            >
              {d.country}
            </text>
          ))}
        </g>

        
        <g transform={`translate(${marginLeft}, ${heightBound + marginTop})`}>
          <line x1={0} y1={0} x2={widthBound} y2={0} stroke="white" />
          {xScale.ticks(5).map((tick, i) => (
            <g key={`x-tick-${i}`} transform={`translate(${xScale(tick)}, 0)`}>
              <line y1={-5} y2={0} stroke="white" />
              <text
                y={8}
                textAnchor="middle"
                fontSize="7"
                fill="white"
              >  
                {tick}%
              </text>
              
            </g>
          ))}
          <text
            x={widthBound / 2} 
            y={17} 
            textAnchor="middle"
            fontSize="7"
            fill="white"
           >
           Percentage of Agricultural Land
          </text>
        </g>

       
        <g transform={`translate(${marginLeft}, ${marginTop})`}>
          {agri_data.map((d, i) => (
            <rect
              key={`bar-${i}`}
              x={0} 
              y={yScale(d.country)}
              width={xScale(d.agri_percentage)} 
              height={yScale.bandwidth()}
              fill="#00b4d8"
            />
          ))}
        </g>

 
        <g transform={`translate(${marginLeft}, ${marginTop})`}>
          {agri_data.map((d, i) => (
            <text
              key={`bar-label-${i}`}
              x={xScale(d.agri_percentage) + 5} 
              y={yScale(d.country) + yScale.bandwidth() / 2}
              textAnchor="start"
              alignmentBaseline="middle"
              fontSize="7"
              fill="white"
            >
              {d.agri_percentage}%
            </text>
          ))}
        </g>
      </svg>
    </div>
  );
}
