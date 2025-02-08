var chartOptions = {
    chart: {
      height: 400,
      type: 'line',
      fontFamily: 'Helvetica, Arial, sans-serif',
      foreColor:'rgb(215, 215, 215)',
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    series: [
      {
        name: 'Focused',
        data: [23, 42, 63, 55, 73, 75],
      },
      {
        name: 'Distracted',
        data: [77, 58, 37, 45, 27, 25],
      }
    ],
    title: {
      text: 'Progess',
      align: 'left',
      offsetY: 25,
      offsetX: 5,
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#373d3f',
      },
    },
    markers: {
      size: 6,
      strokeWidth: 0,
      hover: {
        size: 9,
      },
    },
    grid: {
      show: true,
      padding: {
        bottom: 0,
      },
    },
    labels: ['1st', '2nd', '3rd', '4th', '5th', '6th'],
    xaxis: {
      tooltip: {
        enabled: false,
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      offsetY: -10,
      labels: {
        colors: '#ffffff',
      },
    },
    grid: {
      borderColor: '#424242',
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
  };
  
  var lineChart = new ApexCharts(document.querySelector('#line-chart'), chartOptions);
  lineChart.render();