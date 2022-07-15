function Getdata(){
    axios.get(`https://gnews.io/api/v4/search?q=example&token=635bdada64c2b0bfbe9863510532a259`)
   .then(response => {
         const data = response.data.articles;
         data.forEach(post => {
                axios.post('', {
                body: post,
                })
                .then(response => {
                    console.log("Success")
                })
                .catch(error => console.log(error))
            })
        })
      .catch(error => console.log('Error to fetch data\n'))
}
module.exports = Getdata