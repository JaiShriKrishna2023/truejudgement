import axios from 'axios';

// export const getService=axios.get('https://api.github.com/users/mapbox')
//   .then((response) => {
    
//     const responseData={...response.data};
//     return {response:responseData}
//   });

  export async function getService(serviceUrl) {
    console.log('serviceUrl', serviceUrl);
    const response = await axios.get(serviceUrl);
    return response;
  }


  export async function postService(serviceUrl, data) {
    try {
      const response = await fetch(serviceUrl, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  