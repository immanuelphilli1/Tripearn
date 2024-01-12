import md5 from "md5"


// async function validateHuman(token) {
//   let secret = process.env.SECRET_KEY
//   let recaptchaENDPOINT = `${Base_url}/recaptcha` // // Replace with environment variables

//   try {
//     let result = await fetchData(recaptchaENDPOINT, { secret, token })
//     return result.success
//   } catch (error) {
//     console.log(error)
//   }
// }

export const handleLoginRequest = async (username, password, accountType, token) => {
  let hashedPassword = md5(password)

  let loginENDPOINT = `${Base_url}/login` // // Replace with environment variables

  try {
    let result = await fetchData(loginENDPOINT, {
      username,
      password: hashedPassword,
      accountType,
      token: token,
    })
    // console.log(accountType)
    return result
  } catch (error) {
    console.log(error)
  }
}

export const handleRegisterRequest = async (
  accountType,
  username,
  password,
  cpassword,
  accountNumber
) => {
  // console.log('reqest')
  // console.log(Base_url)
  let registerENDPOINT = `${Base_url}/register` // // Replace with environment variables

  try {
    let hashedPassword = md5(password)
    let hashedcPassword = md5(cpassword)
    let result = await fetchData(registerENDPOINT, {
      accountType,
      username,
      password: hashedPassword,
      cpassword:hashedcPassword,
      accountNumber
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
      const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify(requestParams),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      // const data = await response.json();
      // console.log(data)
      const { data, message } = await response.json()
      if (response.status === 200) {
        // Move response Data to the backend
        finalResponse['success'] = true
        finalResponse['data'] = data
        finalResponse['msg'] = message
        return finalResponse
      }
  
      finalResponse['success'] = false
      finalResponse['msg'] = message
      finalResponse['data'] = data
  
      return finalResponse
    } catch (error) {
      return finalResponse
    }
  }

  let Base_url = "process.env.BASE_URL"

export const topUp = async (initiator_msisdn, receiver_msisdn,username,amount) => {
    let TopUpEndpoint = `${Base_url}/top-up`// // Replace with environment variables
  
    try {
      let result = await fetchData(TopUpEndpoint, {initiator_msisdn,receiver_msisdn, username, amount });
      // console.log(result)
      return result
  
    } catch (error) {
      console.log(error)
  
    }
  }