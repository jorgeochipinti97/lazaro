import { Card } from "../components/card"
import { Layout } from "../components/layout"

export default function Home() {
  return (
    <>
      <Layout>
        <div className="flex flex-nowrap justify-center" >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <Card title={'We develop your NFT Smart Contract'} text={'With metadata and ready to sell in Opensea, Rarible or any marketplace'} img={'/lazarocoin.png'} className_={'mt-3'} _width={60} _height={48}/>
            <Card title={'We develop your NFT mint web'} text={'In which users can mint your nft tokens and you can receive profits for it'} img={'/lazarocoin.png'} className_={'mt-3'} _width={60} _height={48} />
            <Card title={'We develop your Token ERC-20 Smart Contract'} text={'And deploy it in the blockchain that you like'} img={'/lazarocoin.png'} className_={'mt-3'}  _width={60} _height={48} />
            <Card title={'We develop your Token ERC-20 web'} text={'in which users can interact with your tokens and you can receive profits for it'} img={'/lazarocoin.png'}className_={'mt-3'}  _width={60} _height={48} />
            <Card title={'We develop your Web E-commerce in which you can pay with cryptocurrencies'} text={'With NextJs and Solidity, the best technologies on the market'} img={'/lazarocoin.png'} className_={'mt-3'} _width={60} _height={48} />
            <Card title={'Lazaro Metaverse'} text={'With three.js, NextJs and solidity technologies we develop our tools for the metaverse'} img={'/lazarocoin.png'} className_={'mt-3'} _width={60} _height={48} />
          </div>
        </div>
          <div className="flex justify-center">
            <Card title={'Lazaro Music'} text={'We use blockchain technology to take the music business to another level'} img={'/lazarocoin.png'} className_={'mt-3'} _width={60} _height={48} />
          </div>
      </Layout>
    </>

  )
}
