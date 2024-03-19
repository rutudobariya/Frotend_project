import { useParams } from "react-router-dom";

export default function ShowspecificidProduct() {
  let { ProductId } = useParams();
  return (
    <div>

      <h1>PRODUCT ID:{ProductId}</h1>
    </div>
  )
}
