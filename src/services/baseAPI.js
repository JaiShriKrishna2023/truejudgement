import axios from 'axios';

// export const getService=axios.get('https://api.github.com/users/mapbox')
//   .then((response) => {
    
//     const responseData={...response.data};
//     return {response:responseData}
//   });

  export async function getService(serviceUrl) {
    // console.log('serviceUrl', serviceUrl);
    const response = await axios.get(serviceUrl);
    return response;
  }