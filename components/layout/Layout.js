import Head from "next/head"
import Image from "next/image"
import { Footer } from "../footer/Footer"
import { Nav } from "../nav/Nav"

export const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Lazaro</title>
            </Head>
            <main>
                <div className="flex justify-center	">
                    <Image src='/logo.jpg' alt='logo' width={1000} height={600} />
                </div>
                <Nav />
                {children}
                <Footer />
            </main>
        </>

    )
}

