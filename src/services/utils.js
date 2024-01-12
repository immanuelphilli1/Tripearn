export const isBrowser = () => typeof window !== "undefined"

// user removeItem to clear session
export const vfghClearSession = () =>
  isBrowser() && window.localStorage.removeItem("selfCareUser")
    ? JSON.parse(window.localStorage.removeItem("selfCareUser"))
    : {}
// get reset password user

export const getUserReset = () =>
  isBrowser() && window.localStorage.getItem("resetUser")
    ? JSON.parse(window.localStorage.getItem("resetUser"))
    : {}

export const setUserReset = user =>
  window.localStorage.setItem("resetUser", JSON.stringify(user))

// get user
export const getUser = () =>
  isBrowser() && window.localStorage.getItem("selfCareUser")
    ? JSON.parse(window.localStorage.getItem("selfCareUser"))
    : {}

export const setUser = user => {
  window.localStorage.setItem("selfCareUser", JSON.stringify(user))
}

export const getServiceID = () =>
  isBrowser() && window.localStorage.getItem("serviceID")
    ? JSON.parse(window.localStorage.getItem("serviceID"))
    : {}
export const setServiceID = serviceID =>
  window.localStorage.setItem("serviceID", JSON.stringify(serviceID))

// set service list

export const getServiceList = () =>
  isBrowser() && window.localStorage.getItem("serviceList")
    ? JSON.parse(window.localStorage.getItem("serviceList"))
    : {}
export const setServiceList = serviceList =>
  window.localStorage.setItem("serviceList", JSON.stringify(serviceList))

// end of servicelist object
