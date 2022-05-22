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

  grafica()
}

const grafica = ({data}) => {
  const labels = Object.keys(rates)
  console.log(labels)
}