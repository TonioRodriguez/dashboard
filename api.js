async function olchart() {
    const url1 =`https://api.apilayer.com/exchangerates_data/timeseries?apikey=C0jx7S5NBkQhZsIXq0RDCpx7lpgub1tK&base=XAU&symbols=USD&start_date=2022-04-01&end_date=2022-04-30`
    const url2 =`https://api.apilayer.com/exchangerates_data/timeseries?apikey=C0jx7S5NBkQhZsIXq0RDCpx7lpgub1tK&base=USD&symbols=MXN&start_date=2022-04-01&end_date=2022-04-30`
    const url3 =`https://api.apilayer.com/exchangerates_data/timeseries?apikey=C0jx7S5NBkQhZsIXq0RDCpx7lpgub1tK&base=XAG&symbols=USD&start_date=2022-04-01&end_date=2022-04-30`
  
    const res1= await fetch(url1)
    const data1 = await res1.json()
    const res2= await fetch(url2)
    const data2 = await res2.json()
    const res3= await fetch(url3)
    const data3 = await res3.json()
  
    olgraf1(data1)
    olgraf2(data2)
    olgraf3(data3)
  }
  
  const olgraf1 = (data1) => {
    const labels = Object.keys(data1.rates)
    console.log(labels)
    const converData = Object.values(data1.rates).map((item)=>item.USD)
    console.log(converData)
    const dataConfig = {
      labels: labels,
      datasets: [{
        label: 'Precio 1oz. Oro en Dólares USD',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: converData,
      }]
    };
  
  
    const config = {
      type: 'line',
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
      document.getElementById('chartau'),
      config
    )
  
  }
  
  const olgraf2 = (data2) => {
    const labelsX = Object.keys(data2.rates)
    const converDataMX = Object.values(data2.rates).map((item) => item.MXN)
    console.log(converDataMX)
  
    const dataConfig = {
      labels: labelsX,
      datasets: [{
        label: 'Precio del Peso MXN en Dólares USD',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: converDataMX,
      }]
    };
  
  
    const config = {
      type: 'line',
      data: dataConfig,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };
  
    const canvasMX = new Chart(
      document.getElementById('chartmx'),
      config
    )
  
  }
  
  const olgraf3 = (data3) => {
    const labels = Object.keys(data3.rates)
    const converData = Object.values(data3.rates).map((item) => item.USD)
    console.log(converData)
  
    const dataConfig = {
      labels: labels,
      datasets: [{
        label: 'Precio 1oz. Plata en Dólares USD',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: converData,
      }]
    };
  
  
    const config = {
      type: 'line',
      data: dataConfig,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };
  
    const canvasAG = new Chart(
      document.getElementById('chartag'),
      config
    )
  
  }
  export default olchart()