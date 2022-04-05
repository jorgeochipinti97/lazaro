import Link from "next/link"
import { ButtonUi } from "../ui"

export const Nav = () => {
  return (
    <div className="flex justify-center pb-5">
      <Link href='/' passHref>
        <a>
          <ButtonUi text={"Home"} />
        </a>
      </Link>

      <Link href='/About' passHref>
        <a>
          <ButtonUi text={"About Us"} />
        </a>
      </Link>

      <Link href='/Contact' passHref>
        <a>
          <ButtonUi text={"Contact"} />
        </a>
      </Link>
    </div>
  )
}
