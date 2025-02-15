import { useRouteError } from "react-router"


const Error = () => {
  const err = useRouteError()

  return (
    <div>
      <h1>OOOOOPPPPSS!!</h1>
      <h3>
        {err.status}: {err.statusText}
      </h3>
    </div>
  )
}

export default Error
