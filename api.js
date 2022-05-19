/*https://api.apilayer.com/exchangerates_data/timeseries?apikey=C0jx7S5NBkQhZsIXq0RDCpx7lpgub1tK&base=USD&symbols=MXN&start_date=2020-03-12&end_date=2020-04-01*/
const date1au = document.getElementById('date1au').value;
const date2au = document.getElementById('date2au').value;

const date1ag = document.getElementById('date1ag').value;
const date2ag = document.getElementById('date2ag').value;

const date1mx = document.getElementById('date1mx').value;
const date2mx = document.getElementById('date2mx').value;


const urlag = `https://www.metals-api.com/api/timeseries?access_key=7k1vui0duyg0c55p14zqvk11j5nf3mvwzflcgmruuu05ql74dlf7o3lsh5na&start_date=${date1ag}&end_date=${date2ag}&base=USD&symbols=XAG`
const urlmx = `https://www.metals-api.com/api/timeseries?access_key=7k1vui0duyg0c55p14zqvk11j5nf3mvwzflcgmruuu05ql74dlf7o3lsh5na&start_date=${date1mx}&end_date=${date2mx}&base=USD&symbols=MXN`


const getAu = async () => {
    const urlau = `https://www.metals-api.com/api/timeseries?access_key=7k1vui0duyg0c55p14zqvk11j5nf3mvwzflcgmruuu05ql74dlf7o3lsh5na&start_date=${date1au}&end_date=${date2au}&base=USD&symbols=XAU`
    const res = await fetch(urlau)
    const data = await res.json()
    console.log(data)
  }
  
getAu()

/*const getAg = async () => {
    const urlag = `https://www.metals-api.com/api/timeseries?access_key=7k1vui0duyg0c55p14zqvk11j5nf3mvwzflcgmruuu05ql74dlf7o3lsh5na&start_date=${date1au}&end_date=${date2au}&base=USD&symbols=XAU`
    const resa = await fetch(urlag)
    const dataa = await resa.json()
    console.log(dataa)
  }
  
getAg()

const getMx = async () => {
    const urlmx = `https://www.metals-api.com/api/timeseries?access_key=7k1vui0duyg0c55p14zqvk11j5nf3mvwzflcgmruuu05ql74dlf7o3lsh5na&start_date=${date1au}&end_date=${date2au}&base=USD&symbols=XAU`
    const resm = await fetch(urlmx)
    const datam = await resm.json()
    console.log(datam)
  }
  
getMx()*/