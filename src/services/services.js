
let Base_url = "https://parcelra.com/api/v1"

export const handleLogoutRequest = async () => {

  let loginENDPOINT = `${Base_url}/logout` // // Replace with environment variables

  try {
    let result = await fetchData(loginENDPOINT,'post', {})
    // console.log(accountType)
    return result
  } catch (error) {
    console.log(error)
  }
}

export const handleLoginRequest = async (email, password) => {
  let hashedPassword = password

  let loginENDPOINT = `${Base_url}/login` // // Replace with environment variables

  try {
    let result = await fetchData(loginENDPOINT,'post', {
      email,
      password: hashedPassword,
      remember:true,
    })
    // console.log(accountType)
    return result
  } catch (error) {
    console.log(error)
  }
}

export const handleRegisterRequest = async (
  name,
    surname,
    country,
    email,
    phone,
    password,
    confirmPassword,
) => {
  // console.log('reqest')
  // console.log(Base_url)
  let registerENDPOINT = `${Base_url}/register` // // Replace with environment variables

  try {
    let hashedPassword = password
    let hashedcPassword = confirmPassword
    let result = await fetchData(registerENDPOINT,'post', {
      name,
    surname,
    country,
    gender:false,
    birthday:"01.01.2000",
    email,
    phone,
      password: hashedPassword,
      password_confirmation:hashedcPassword,
    })
    // console.log(result)
    return result
  } catch (error) {
    console.log(error)
  }
}

export const handleResetVerification = async (email) => {

  let resetVerifyENDPOINT = `${Base_url}/restore` // // Replace with environment variables

  try {
    let result = await fetchData(resetVerifyENDPOINT,'post', {
      email,
    })
    // console.log(accountType)
    return result
  } catch (error) {
    console.log(error)
  }
}

export const handleResetPassword = async (token, email, password, password_confirmation) => {

  let resetENDPOINT = `${Base_url}/restore/confirm` // // Replace with environment variables

  try {
    let result = await fetchData(resetENDPOINT,'post', {
      token,
      email,
      password,
      password_confirmation,
    })
    // console.log(accountType)
    return result
  } catch (error) {
    console.log(error)
  }
}

export const handleParcelCreate = async (token, departure, arrival, arrival_date, price, weight, size, comment) => {
  

  let createENDPOINT = `${Base_url}/parcel/create` // // Replace with environment variables

  try {
    let result = await fetchData(createENDPOINT,'post', {
      token, departure, arrival, arrival_date, price, weight, size, comment
    })
    // console.log(accountType)
    return result
  } catch (error) {
    console.log(error)
  }
}

export const handleOfferDelivery = async (token, departure_date, arrival_date, id) => {
  

  let deliveryENDPOINT = `${Base_url}/parcel/${id}/delivery/offer` // // Replace with environment variables

  try {
    let result = await fetchData(deliveryENDPOINT,'post', {
      token, departure_date, arrival_date, type_transport:"airplane"
    })
    // console.log(accountType)
    return result
  } catch (error) {
    console.log(error)
  }
}

export const handlePayment = async (token, parcel_id, delivery_id) => {
  

  let paymentENDPOINT = `${Base_url}/payment/create/${parcel_id}/${delivery_id}` // // Replace with environment variables

  try {
    let result = await fetchData(paymentENDPOINT,'post', {
      token
    })
    // console.log(accountType)
    return result
  } catch (error) {
    console.log(error)
  }
}

export const handlePaymentStatus = async (session_id) => {
  

  let paymentStatusENDPOINT = `${Base_url}/payment/success` // // Replace with environment variables

  try {
    let result = await fetchData(paymentStatusENDPOINT,'post', {
      session_id
    })
    // console.log(accountType)
    return result
  } catch (error) {
    console.log(error)
  }
}

export const handleNumberUpdate = async (token, phone) => {
  // console.log(token)
  // console.log(phone)
  let updateENDPOINT = `${Base_url}/profile/settings` // // Replace with environment variables

  try {
    let result = await fetchData(updateENDPOINT,'put', {
      token, phone
    })
    // console.log(accountType)
    return result
  } catch (error) {
    console.log(error)
  }
}

export const handleReceiptConfirmSender = async (token, id) => {
  // console.log(token)
  // console.log(phone)
  let updateENDPOINT = `${Base_url}/parcel/${id}/delivery/confirm` // // Replace with environment variables

  try {
    let result = await fetchData(updateENDPOINT,'put', {
      token
    })
    // console.log(accountType)
    return result
  } catch (error) {
    console.log(error)
  }
}

export const handleReceiptConfirmTraveler = async (token, id) => {
  // console.log(token)
  // console.log(phone)
  let updateENDPOINT = `${Base_url}/delivery/${id}/confirm` // // Replace with environment variables

  try {
    let result = await fetchData(updateENDPOINT,'put', {
      token
    })
    // console.log(accountType)
    return result
  } catch (error) {
    console.log(error)
  }
}


export const handleGetDetails = async (id) => {

  let ENDPOINT = `https://parcelra.com/api/v1/parcel/${id}` // // Replace with environment variables

  try {
    let result = await fetchData(ENDPOINT,'GET', {})
    // console.log(accountType)
    return result
  } catch (error) {
    console.log(error)
  }
}

export const handleGetProfileID = async (id) => {

  let ENDPOINT = `https://parcelra.com/api/v1/profile/${id}` // // Replace with environment variables

  try {
    let result = await fetchData(ENDPOINT,'GET', {})
    // console.log(accountType)
    return result
  } catch (error) {
    console.log(error)
  }
}
export const handleGetProfile = async (token) => {

  let ENDPOINT = `https://parcelra.com/api/v1/profile?token=${token}` // // Replace with environment variables

  try {
    let result = await fetchData(ENDPOINT,'GET', {})
    // console.log(accountType)
    return result
  } catch (error) {
    console.log(error)
  }
}

export const handleGetDelivery = async (token) => {

  let ENDPOINT = `https://parcelra.com/api/v1/delivery?token=${token}` // // Replace with environment variables

  try {
    let result = await fetchData(ENDPOINT,'GET', {})
    // console.log(accountType)
    return result
  } catch (error) {
    console.log(error)
  }
}

export const handleGetAllParcels = async () => {

  let ENDPOINT = `${Base_url}/parcel/all` // // Replace with environment variables

  try {
    let result = await fetchData(ENDPOINT,'GET', {})
    // console.log(accountType)
    return result
  } catch (error) {
    console.log(error)
  }
}

export const getCountriesCities = async (country) => {

  let citiesENDPOINT = 'https://countriesnow.space/api/v0.1/countries/cities' // // Replace with environment variables

  try {
    let result = await fetchData(citiesENDPOINT,'post', {
      country,
    })
    // console.log(accountType)
    return result
  } catch (error) {
    console.log(error)
  }
}

export const getCountriesCodes = async (country) => {

  let citiesENDPOINT = 'https://countriesnow.space/api/v0.1/countries/codes' // // Replace with environment variables

  try {
    let result = await fetchData(citiesENDPOINT,'post', {
      country,
    })
    // console.log(accountType)
    return result
  } catch (error) {
    console.log(error)
  }
}



//test
export const fetchData = async (
  endpoint,
  method,
  requestParams = {},
  finalResponse = {
    msg:"There was an error processing your request,please try again later"
  }
) => {
  try {
    const xsrfToken = await fetchCsrfToken();
    // console.log("we are looking", xsrfToken)
    let response;
    if(method === "post" || method === "put"){
       response = await fetch(endpoint, {
        method: method,
        body: JSON.stringify(requestParams),
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': xsrfToken,
        },
        redirect: 'follow',
        // credentials: 'include'
      })


    }
    else{
      response = await fetch(endpoint, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': xsrfToken,
        },
        redirect: 'follow',
        // credentials: 'include'
      })
    }

    
    
    // const data = await response.json();
    // console.log(response)
    // console.log("tokennnnnn::::::::",xsrfToken)
    const { parcel,parcels,delivery,data, url, token, message, user, errors, id } = await response.json()
    
    if (response.status === 200) {
      // Move response Data to the backend
      finalResponse['success'] = true
      finalResponse['data'] = data === undefined ? parcel || parcels || delivery : data
      finalResponse['url'] = url
      finalResponse['token'] = token
      finalResponse['msg'] = message
      finalResponse['user'] = user
      finalResponse['errors'] = errors
      finalResponse['id'] = id
      return finalResponse
    }

    finalResponse['success'] = false
    finalResponse['msg'] = message
    finalResponse['url'] = url
    finalResponse['token'] = token
    finalResponse['data'] = data
    finalResponse['user'] = user
    finalResponse['errors'] = errors
    finalResponse['id'] = id
    return finalResponse
  } catch (error) {
    return finalResponse
  }
}

//prod
// export const fetchData = async (
//     endpoint,
// method,
//     requestParams = {},
//     finalResponse = {
//       msg:"There was an error processing your request,please try again later"
//     }
//   ) => {
//     try {
//       const xsrfToken = await fetchCsrfToken();
//       // console.log("we are looking", xsrfToken)
//       const response = await fetch(endpoint, {
//         method: 'post',
//         body: JSON.stringify(requestParams),
//         headers: {
//           'Content-Type': 'application/json',
//           'X-CSRF-TOKEN': xsrfToken,
//         },
//         // credentials: 'include'
//       })
//       // const data = await response.json();
//       console.log(response)
//       // console.log("tokennnnnn::::::::",xsrfToken)
//       const { data, token, message, user, errors, id } = await response.json()
      
//       if (response.status === 200) {
//         // Move response Data to the backend
//         finalResponse['success'] = true
//         finalResponse['data'] = data
//         finalResponse['token'] = token
//         finalResponse['msg'] = message
//         finalResponse['user'] = user
//         finalResponse['errors'] = errors
//         finalResponse['id'] = id
//         return finalResponse
//       }
  
//       finalResponse['success'] = false
//       finalResponse['msg'] = message
//       finalResponse['token'] = token
//       finalResponse['data'] = data
//       finalResponse['user'] = user
//       finalResponse['errors'] = errors
//       finalResponse['id'] = id
//       return finalResponse
//     } catch (error) {
//       return finalResponse
//     }
//   }

 

export async function getAllCountries() {
  const apiUrl = 'https://countriesnow.space/api/v0.1/countries/positions';
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for the calling code to handle
  }
}

export async function fetchCsrfToken() {
  const csrfToken = 'https://parcelra.com/csrf-token';
  try {
    const response = await fetch(csrfToken);
    const data = await response.json();
    // console.log("lets see token",data)
    return data.csrfToken;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for the calling code to handle
  }
}

export async function getSearchParcels(departure,arrival) {
  const apiUrl = `https://parcelra.com/api/v1/parcel/search?departure=${departure}&arrival=${arrival}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for the calling code to handle
  }
}

// export async function getCities(country) {
// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
//   "country": country
// });

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("https://countriesnow.space/api/v0.1/countries/cities", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
// }