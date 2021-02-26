import styles from '../style/components/CountDown.module.css'
import { useState, useEffect } from 'react'

let countdownTimeout: NodeJS.Timeout;

export function CountDown() {
    const [hasFinished, sethasFinished] = useState(false)
    const [time, setTime] = useState(0.1 * 60)
    const [isactive, setisActive] = useState(false)
    const minutes = Math.floor(time / 60)
    const seconds = time % 60;

    const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split("")
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split("")

    function startCountDown() {
        setisActive(true)
    }

    function resetCountDown() {
        clearTimeout(countdownTimeout);
        setisActive(false)
        setTime(0.1 * 60)
    }
    useEffect(() => {
        if (isactive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if (isactive && time == 0) {
            sethasFinished(true);
            setisActive(false);

        }
    }, [isactive, time])
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
                  <button disabled  className={styles.countdownButton }>

                 Ciclo Encerrado
              </button>
               ):(
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