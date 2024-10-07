import image from "../../../public/image.png"
import { ContainerHeader } from "./style"
export function Header() {
  return (
    <ContainerHeader>
      <a href="https://neogrid.com/" target="_blank" rel="noopener noreferrer">
        <img src={image} alt="Logo" />
      </a>
    </ContainerHeader>
  )
}