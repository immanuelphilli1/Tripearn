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