import { Card } from "../components/card"
import { Layout } from "../components/layout"

const About = () => {
  return (
    <>
      <Layout>
        <div className="flex justify-center">
          <Card title={'Our History'} text={'Lazaro was founded in 2022 by Jorge Ochipinti, a blockchain developer. He gave up his comfortable job in justice to get out of his comfort zone and set himself a new challenge, that of programming, the learning path applied was the following HTML, CSS, Javascript, NodeJS, React, NextJS and Solidity. He believes that blockchain technology is the future, therefore he didn t accept junior jobs and focused on learning to develop with Solidity.'} img={'/jorge.JPG'} className={''} />
        </div>
      </Layout>
    </>
  )
}

export default About