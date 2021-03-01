import styles from '../style/components/CountDown.module.css'
import {useContext } from 'react'
import {CountdownContext, CountdownProvider} from '../contexts/CountdownContext'
 

export function CountDown() {

   const {minutes,seconds,hasFinished,isactive,startCountDown,resetCountDown} = useContext(CountdownContext)
    const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split("")
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split("")

  
    return (
        <div>
            <div className={styles.CountDownContainer}>
                <div>
                    <span>
                        {minutesLeft}

                    </span>
                    <span>
                        {minutesRight}
                    </span>
                </div>
                <span>:</span>
                <div>
                    <span>
                        {secondLeft}

                    </span>
                    <span>
                        {secondRight}
                    </span>
                </div>

            </div>

            {hasFinished ? (
                <button disabled className={styles.countdownButton}>

                    Ciclo Encerrado
                </button>
            ) : (
                    <>
                        {isactive ? (
                            <button onClick={resetCountDown} type='button' className={`${styles.countdownButton} ${styles.countdownButtonactive}`}>

                                Abandonar ciclo
                            </button>
                        ) : (
                                <button onClick={startCountDown} type='button' className={styles.countdownButton}>

                                    Iniciar um ciclo
                                </button>

                            )}
                    </>
                )}






        </div>
    )
}