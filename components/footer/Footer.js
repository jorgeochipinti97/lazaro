import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="pt-7 bg-black rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="#" className="hover:underline">Lazaro</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link href="/About" passHref>
                        <a className="mr-4 hover:underline md:mr-6 ">About Us</a>
                    </Link>
                </li>
                <Link href="/Contact" passHref>
                    <a className="mr-4 hover:underline md:mr-6 ">Contact</a>
                </Link>
            </ul>
        </footer>
    )
}
