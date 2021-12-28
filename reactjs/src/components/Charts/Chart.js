import ChartBar from "./ChartBar";
import "./Chart.css";

//Chart
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxHeight = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={maxHeight}
          key={dataPoint.label}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
