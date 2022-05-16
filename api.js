const getWeather = async () => {
    const url = 'https://api.waqi.info/feed/mexico/?token=4fd91d25f55408d38f12fcdc71a890c7c642592e'
    const res = await fetch(url)
  
    console.log(res)
    const data = await res.json()
  
    console.log(data)
    setGraph(data.data)
  }
  

  
  getWeather()