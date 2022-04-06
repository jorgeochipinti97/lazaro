import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="pb-3 pt-7 bg-black rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 ">
            <ul className="mb-4 flex flex-wrap justify-center items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link href="/About" passHref>
                        <a className="mr-4 hover:underline md:mr-6 ">About Us</a>
                    </Link>
                </li>
                <li>
                    <Link href="/" passHref>
                        <a className="mr-4  hover:underline md:mr-6 ">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/Contact" passHref>
                        <a className="mr-4  hover:underline md:mr-6 ">Contact</a>
                    </Link>
                </li>
            </ul>
            <div className="flex justify-center">

                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="#" className="hover:underline">Lazaro</a>. All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}
