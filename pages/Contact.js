import Link from "next/link"
import { Card } from "../components/card"
import { Layout } from "../components/layout"



const Contact = () => {
    return (
        <Layout>
            <div className="flex  justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <Link href='https://ultramsg.com/m/3ud3Jjh' passHref>
                        <a target="_blank">
                            <Card title={'Whatsapp'} text={`click Here!`} img={'/wpp.png'} className_={'mt-3'} _width={50} _height={50} />
                        </a>
                    </Link>
                    <Link href='https://www.instagram.com/lazaro.tech/' passHref>
                        <a target="_blank">
                            <Card title={'Instagram'} text={`click Here!`} img={'/instagram.png'} className_={'mt-3'} _width={50} _height={50} />
                        </a>
                    </Link>
                    <Link href='https://twitter.com/LazaroTech' passHref>
                        <a target="_blank">
                            <Card title={'Twitter'} text={`click Here!`} img={'/twitter.png'} className_={'mt-3'} _width={50} _height={50} />
                        </a>
                    </Link>
                    <Card title={'Email'} text={'lazaroblockchain@gmail.com'} img={'/email.png'} className_={'mt-3'} _width={50} _height={50}  />
                </div>
            </div>
        </Layout>
    )
}

export default Contact