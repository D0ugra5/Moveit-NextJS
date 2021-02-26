
import { CompletedChallenger } from "../components/CompletedChallenger";
import { CountDown } from "../components/countDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/profile";
import styles from '../style/pages/Home.module.css'


import Head from 'next/head'
import { ChallengeBox } from "../components/ChallengeBox";
export default function Home() {
  return (
    <div className={styles.container}>

<Head>
  <title>Inicio | move.it</title>
</Head>


            <ExperienceBar />
      <section>
        <div>
          <Profile/>
          <CompletedChallenger/>
          <CountDown/>
        </div>
        <div>
          <ChallengeBox/>
        </div>
      </section>

    </div>
  )
}
