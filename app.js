$(function(){
  $.ajax({
    url: 'http://localhost/chat_data.php',
    type: 'GET',
    success : function(data) {
      chartData = data;
      var chartProperties = {
        "caption": "Temprature in cities of NewYork",
        "xAxisName": "Pin Code",
        "yAxisName": "Temprature",
        "rotatevalues": "1",
        "theme": "zune"
      };
      apiChart = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-container',
        width: '550',
        height: '350',
        dataFormat: 'json',
        dataSource: {
          "chart": chartProperties,
          "data": chartData
        }
      });
      apiChart.render();
    }
  });
});
