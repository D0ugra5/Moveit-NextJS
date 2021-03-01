import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../style/components/CompletedChallenger.module.css'
export function CompletedChallenger(){
    const {challengesCompleted} = useContext(ChallengesContext)
    return(
        <div className={styles.CompletedChallegesContainer}>

            <span>Desafio Completos</span>
            <span> {challengesCompleted}</span>
        </div>
    )
}