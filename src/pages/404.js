import * as React from "react"
import { Helmet } from "react-helmet"


const NotFoundPage = () => {
  return (
    <main className="text-6xl flex justify-center text-green pt-20" >
      <Helmet>
        <link rel="icon" href="/img/favicon.ico" />
      </Helmet>
      Page not found
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
