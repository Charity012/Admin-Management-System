var sidebarOpen = false;
var sidebar = document.getElementById("sidbar");

function openSidebar() {
    if(!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if(sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}

var barChartOptions = {
    series: [{
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar: {
        show: false
    },
  },
  colors: [
    "#246dec"
  ],
  plotOptions: {
    bar: {
      distributed: true,  
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: ['March', 'April', 'May', 'June', 'July', 'August', 'Sept',
      'Oct', 'Nov', 'Dec'],
  },
  yaxis: {
    title: {
        text: 'Count'
    }
  }
  };

  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  barChart.render();


  var areaChartOptions = {
    series: [{
    name: 'Outflow',
    data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
  }, {
    name: 'Inflow',
    data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
  }],
    chart: {
    height: 350,
    type: 'area',
    toolbar: {
        show: false,
    },
  },
  colors: ['#21232d', '#246dec'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  labels: ['BB', 'March','April','May','June','July','Aug','Sept','Oct ','Nov','Dec'],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Outflow',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Inflow',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
      }
  };

  var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
  areaChart.render();

