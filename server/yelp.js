const axios = require("axios");
   
    function axiosRequest() {
    axios('https://api.yelp.com/v3/businesses/search?location=GA&categories=homeservices', {
        method: 'GET',
        withCredentials: true,
        headers: {
            'X-API-KEY':'Bearer mP9UEWzoZ-_Px4TlJdHVmehnpdNfYIuAXtkW7kbwTnKLjgNJ2tYUd2oGBnKxEeyy7EgK3SXn8mIsvvt4l9CTmzZRs6PYKKTtQfyT4wVVWy-SAfp9ypJ_a6F8xTiYYXYx',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
    }
})

.then(response => response.json(response.data))
// .then(data => console.log(data)) 
// .catch(error => console.error(error));
// }
}

axiosRequest()

    