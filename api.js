/*https://api.apilayer.com/exchangerates_data/timeseries?apikey=C0jx7S5NBkQhZsIXq0RDCpx7lpgub1tK&base=USD&symbols=MXN&start_date=2020-03-12&end_date=2020-04-01*/
export const date1au = document.getElementById('date1au').value;
export const date2au = document.getElementById('date2au').value;

export const date1ag = document.getElementById('date1ag').value;
export const date2ag = document.getElementById('date2ag').value;

export const date1mx = document.getElementById('date1mx').value;
export const date2mx = document.getElementById('date2mx').value;

export const urlau = `https://www.metals-api.com/api/timeseries?access_key=7k1vui0duyg0c55p14zqvk11j5nf3mvwzflcgmruuu05ql74dlf7o3lsh5na&start_date=${date1au}&end_date=${date2au}&base=XAU&symbols=USD`

/*const getAg = async () => {
    const urlag = `https://www.metals-api.com/api/timeseries?access_key=7k1vui0duyg0c55p14zqvk11j5nf3mvwzflcgmruuu05ql74dlf7o3lsh5na&start_date=${date1ag}&end_date=${date2ag}&base=USD&symbols=XAG`
    const resa = await fetch(urlag)
    const dataa = await resa.json()
    console.log(dataa)
  }
  

const getMx = async () => {
    const urlmx = `https://www.metals-api.com/api/timeseries?access_key=7k1vui0duyg0c55p14zqvk11j5nf3mvwzflcgmruuu05ql74dlf7o3lsh5na&start_date=${date1mx}&end_date=${date2mx}&base=USD&symbols=MXN`
    const resm = await fetch(urlmx)
    const datam = await resm.json()
    console.log(datam)
  }*/
  