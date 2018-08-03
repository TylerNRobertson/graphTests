// Colors
const lightGray = "#D9D9D9"
const darkGray = "#979797"
const textColor = "#4A4A4A"

// Base Props for all graphs
const strokeDasharray = "10, 5";
const squareStrokeLinecap = "square";
const strokeLinejoin = "round";

const labelStyles = {
  fontSize: 14,
  letterSpacing: 'normal',
  fill: textColor,
  stroke: "transparent"
};
const centeredLabelStyles = Object.assign({ textAnchor: "middle" }, labelStyles);

export default {
  dependentAxis: Object.assign({
    style: {
      axis: {
        fill: 'none',
        stroke: lightGray,
        strokeLinecap: squareStrokeLinecap,
        strokeDasharray: strokeDasharray,
        strokeLinejoin,
      },
      grid: {
        fill: "none",
        stroke: lightGray,
        strokeLinecap: squareStrokeLinecap,
        strokeLinejoin,
      },
      ticks: {
        fill: "none",
        stroke: "transparent",
        size: 10,
        strokeWidth: 1,
        strokeLinecap: squareStrokeLinecap,
        strokeDasharray: strokeDasharray,
        strokeLinejoin: strokeLinejoin
      },
      tickLabels: labelStyles,
    }
  }),
  independentAxis: Object.assign({
    style: {
      axis: {
        fill: 'none',
        stroke: darkGray,
        strokeLinecap: squareStrokeLinecap,
        strokeLinejoin,
      },
      grid: {
        fill: "none",
        stroke: lightGray,
        strokeLinecap: squareStrokeLinecap,
        strokeDasharray: strokeDasharray,
        strokeLinejoin,
      },
      ticks: {
        fill: "none",
        stroke: darkGray,
        size: 10,
        strokeWidth: 1,
        strokeLinecap: squareStrokeLinecap,
        strokeDasharray: strokeDasharray,
        strokeLinejoin: strokeLinejoin
      },
      tickLabels: labelStyles
    }
  }),
  bar: Object.assign({
    style: {
      data: {
        fill: '#0988D5',
        width: 22,
      },
    }
  })
};

// area: _assign({
//   style: {
//     data: {
//       fill: grey900
//     },
//     labels: centeredLabelStyles
//   }
// }, baseProps),
// axis: _assign({
//   style: {
//     axis: {
//       fill: "none",
//       stroke: blueGrey300,
//       strokeDasharray: strokeDasharray,
//       strokeLinecap: strokeLinecap,
//       strokeLinejoin: strokeLinejoin
//     },
//     axisLabel: _assign({}, centeredLabelStyles, {
//       padding: padding,
//       stroke: "transparent"
//     }),
//     grid: {
//       fill: "none",
//       stroke: blueGrey50,
//       strokeDasharray: strokeDasharray,
//       strokeLinecap: strokeLinecap,
//       strokeLinejoin: strokeLinejoin,
//       pointerEvents: "painted"
//     },
//     ticks: {
//       fill: "transparent",
//       size: 5,
//       stroke: blueGrey300,
//       strokeWidth: 1,
//       strokeLinecap: strokeLinecap,
//       strokeLinejoin: strokeLinejoin
//     },
//     tickLabels: _assign({}, baseLabelStyles, {
//       fill: blueGrey700
//     })
//   }
// }, baseProps),
// bar: _assign({
//   style: {
//     data: {
//       fill: blueGrey700,
//       padding: padding,
//       strokeWidth: 0,
//     },
//     labels: baseLabelStyles
//   }
// }, baseProps),
// boxplot: _assign({
//   style: {
//     max: {
//       padding: padding,
//       stroke: blueGrey700,
//       strokeWidth: 1
//     },
//     maxLabels: baseLabelStyles,
//     median: {
//       padding: padding,
//       stroke: blueGrey700,
//       strokeWidth: 1
//     },
//     medianLabels: baseLabelStyles,
//     min: {
//       padding: padding,
//       stroke: blueGrey700,
//       strokeWidth: 1
//     },
//     minLabels: baseLabelStyles,
//     q1: {
//       padding: padding,
//       fill: blueGrey700
//     },
//     q1Labels: baseLabelStyles,
//     q3: {
//       padding: padding,
//       fill: blueGrey700
//     },
//     q3Labels: baseLabelStyles
//   },
//   boxWidth: 20
// }, baseProps),
// candlestick: _assign({
//   style: {
//     data: {
//       stroke: blueGrey700
//     },
//     labels: centeredLabelStyles
//   },
//   candleColors: {
//     positive: "#ffffff",
//     negative: blueGrey700
//   }
// }, baseProps),
// chart: baseProps,
// errorbar: _assign({
//   borderWidth: 8,
//   style: {
//     data: {
//       fill: "transparent",
//       opacity: 1,
//       stroke: blueGrey700,
//       strokeWidth: 2
//     },
//     labels: centeredLabelStyles
//   }
// }, baseProps),
// group: _assign({
//   colorScale: colors
// }, baseProps),
// legend: {
//   colorScale: colors,
//   gutter: 10,
//   orientation: "vertical",
//   titleOrientation: "top",
//   style: {
//     data: {
//       type: "circle"
//     },
//     labels: baseLabelStyles,
//     title: _assign({}, baseLabelStyles, {
//       padding: 5
//     })
//   }
// },
// line: _assign({
//   style: {
//     data: {
//       fill: "transparent",
//       opacity: 1,
//       stroke: blueGrey700,
//       strokeWidth: 2
//     },
//     labels: centeredLabelStyles
//   }
// }, baseProps),
// pie: _assign({
//   colorScale: colors,
//   style: {
//     data: {
//       padding: padding,
//       stroke: blueGrey50,
//       strokeWidth: 1
//     },
//     labels: _assign({}, baseLabelStyles, {
//       padding: 20
//     })
//   }
// }, baseProps),
// scatter: _assign({
//   style: {
//     data: {
//       fill: blueGrey700,
//       opacity: 1,
//       stroke: "transparent",
//       strokeWidth: 0
//     },
//     labels: centeredLabelStyles
//   }
// }, baseProps),
// stack: _assign({
//   colorScale: colors
// }, baseProps),
// tooltip: {
//   style: _assign({}, centeredLabelStyles, {
//     padding: 5,
//     pointerEvents: "none"
//   }),
//   flyoutStyle: {
//     stroke: grey900,
//     strokeWidth: 1,
//     fill: "#f0f0f0",
//     pointerEvents: "none"
//   },
//   cornerRadius: 5,
//   pointerLength: 10
// },
// voronoi: _assign({
//   style: {
//     data: {
//       fill: "transparent",
//       stroke: "transparent",
//       strokeWidth: 0
//     },
//     labels: _assign({}, centeredLabelStyles, {
//       padding: 5,
//       pointerEvents: "none"
//     }),
//     flyout: {
//       stroke: grey900,
//       strokeWidth: 1,
//       fill: "#f0f0f0",
//       pointerEvents: "none"
//     }
//   }
// }, baseProps)
