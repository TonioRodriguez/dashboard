const date1au = document.getElementById('date1au').value;
const date2au = document.getElementById('date2au').value;

const date1ag = document.getElementById('date1ag').value;
const date2ag = document.getElementById('date2ag').value;

const date1mx = document.getElementById('date1mx').value;
const date2mx = document.getElementById('date2mx').value;

const chartau = async () => {
  const date1au = document.getElementById('date1au').value;
  const date2au = document.getElementById('date2au').value;
  const urlau = `https://www.metals-api.com/api/timeseries?access_key=7k1vui0duyg0c55p14zqvk11j5nf3mvwzflcgmruuu05ql74dlf7o3lsh5na&start_date=${date1au}&end_date=${date2au}&base=XAU&symbols=USD`
  const res = await fetch(urlau)
  const data = await res.json()
  console.log(data)

  graficaau()
}

const graficaau = (data) => {
  const labels = Object.keys()
  console.log(labels)
  const converData = Object.values().map((item) => item.v)
  console.log(converData)
}
  /*const dataConfig = {
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

const chartmx = async () => {
  const date1mx = document.getElementById('date1mx').value;
  const date2mx = document.getElementById('date2mx').value;
  const urlmx = `https://www.metals-api.com/api/timeseries?access_key=7k1vui0duyg0c55p14zqvk11j5nf3mvwzflcgmruuu05ql74dlf7o3lsh5na&start_date=${date1mx}&end_date=${date2mx}&base=MXN&symbols=USD`
  const res = await fetch(urlmx)
  const data = await res.json()
  console.log(data)

  graficamx()
}

const graficamx = (data) => {
  const labels = Object.keys()
  const converData = Object.values().map((item) => item.v)
  console.log(converData)

  const dataConfig = {
    labels: labels,
    datasets: [{
      label: 'Precio del Peso MXN en Dólares USD',
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
    document.getElementById('chartmx'),
    config
  )

}

const chartag = async () => {
  const date1ag = document.getElementById('date1ag').value;
  const date2ag = document.getElementById('date2ag').value;
  const urlag = `https://www.metals-api.com/api/timeseries?access_key=7k1vui0duyg0c55p14zqvk11j5nf3mvwzflcgmruuu05ql74dlf7o3lsh5na&start_date=${date1ag}&end_date=${date2ag}&base=USD&symbols=XAG`
  const res = await fetch(urlag)
  const data = await res.json()
  console.log(data)

  graficaag()
}

const graficaag = (data) => {
  const labels = Object.keys()
  const converData = Object.values().map((item) => item.v)
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

  const myChart = new Chart(
    document.getElementById('chartag'),
    config
  )

}*/