import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../style/components/ChallengeBox.module.css'
export function ChallengeBox() {
    
    const { activeChallenge,resetChallege,completeChallenge} = useContext(ChallengesContext);
const {resetCountDown} = useContext(CountdownContext)
    function handleChallengeSucceeded(){
completeChallenge()
resetCountDown()
}

function handleChallengeFail(){
    resetChallege()
    resetCountDown()
}

    return (
        <div className={styles.challengecontainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe  {activeChallenge.amount}XP</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="" />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            type='button'
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFail}
                        >
                            Falhei
                     </button>
                        <button
                            type='button'
                            className={styles.challengeSucceedButton}
                            onClick={handleChallengeSucceeded}
                        >Completei </button>
                    </footer>
                </div>


            ) : (
                    <div className={styles.challengeNotActive}>
                        <strong>Inicie um ciclo para receber desafios a serem completados</strong>

                        <p>
                            <img className='imgFlex' src="icons/level-up.svg" alt="level up" />

                        avance de level completando desafio
                        </p>


                    </div>
                )}

        </div>
    )
}