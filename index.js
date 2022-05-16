const setGraph = (data) => {
    const labels = Object.keys(data.iaqi)
    const converData = Object.values(data.iaqi).map((item) => item.v)
    console.log(converData)
  
    const dataConfig = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: converData,
      }]
    };
  
  
    const config = {
      type: 'bar',
      data: dataConfig,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };
  
    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    )
  
  }