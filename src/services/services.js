
let Base_url = "https://parcelra.com/api/v1"

export const handleLogoutRequest = async () => {

  let loginENDPOINT = `${Base_url}/logout` // // Replace with environment variables

  try {
    let result = await fetchData(loginENDPOINT, {})
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
    let result = await fetchData(loginENDPOINT, {
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
    let result = await fetchData(registerENDPOINT, {
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

export const fetchData = async (
    endpoint,
    requestParams = {},
    finalResponse = {
      msg:"There was an error processing your request,please try again later"
    }
  ) => {
    try {
      const xsrfToken = await fetchCsrfToken();
      // console.log("we are looking", xsrfToken)
      const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify(requestParams),
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': xsrfToken,
        },
        // credentials: 'include'
      })
      // const data = await response.json();
      console.log(response)
      // console.log("tokennnnnn::::::::",xsrfToken)
      const { data, token, message, user, errors } = await response.json()
      
      if (response.status === 200) {
        // Move response Data to the backend
        finalResponse['success'] = true
        finalResponse['data'] = data
        finalResponse['token'] = token
        finalResponse['msg'] = message
        finalResponse['user'] = user
        finalResponse['errors'] = errors
        return finalResponse
      }
  
      finalResponse['success'] = false
      finalResponse['msg'] = message
      finalResponse['token'] = token
      finalResponse['data'] = data
      finalResponse['user'] = user
      finalResponse['errors'] = errors
      return finalResponse
    } catch (error) {
      return finalResponse
    }
  }

 

export async function getAllCountries() {
  const apiUrl = 'https://restcountries.com/v3.1/all';
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
    console.log("lets see token",data)
    return data.csrfToken;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for the calling code to handle
  }
}