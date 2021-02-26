
import styles from '../style/components/ChallengeBox.module.css'
export function ChallengeBox() {
    return (
        <div className={styles.challengecontainer}>
            
            <div className={styles.challengeNotActive}>
            <strong>Inicie um ciclo para receber desafios a serem completados</strong>
               
                    <p>
                    <img id='imgFlex' src="icons/level-up.svg" alt="level up" />
                     
                avance de level completando desafio
                </p>
     
              
            </div>
        </div>
    )
}