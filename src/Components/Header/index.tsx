import image from "../../../public/image.png"
import { ContainerHeader } from "./style"
export function Header() {
  return (
    <ContainerHeader>
      <img src={image} alt="Logo" />
    </ContainerHeader>
  )
}