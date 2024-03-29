
import { CompletedChallenger } from "../components/CompletedChallenger";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/profile";
import styles from '../style/pages/Home.module.css'
import { GetServerSideProps } from 'next'

import Head from 'next/head'
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesProvider } from "../contexts/ChallengesContext";
interface Homeprops{
  level:number;
  currentExperience:number;
  challengesCompleted:number;
}

export default function Home(props:Homeprops) {
  console.log(props)
  return (
    <ChallengesProvider level={props.level} 
    currentExperience={props.currentExperience} 
    challengesCompleted={props.challengesCompleted}>
      <div className={styles.container}>

        <Head>
          <title>Inicio | move.it</title>
        </Head>


        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenger />
              <CountDown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies
  return {
    props: {

      level:Number(level),
      currentExperience:Number(currentExperience),
      challengesCompleted:Number(challengesCompleted),

    }
  }
}