import { useParams } from "react-router-dom";

export default function RoutedUser() {
  let params = useParams();
  return (
    <>
      <h2> Single User: {params.userId} </h2>
      <p>User ID: </p>
    </>
  )
}
  