import { useContext} from "react";
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../style/components/Profile.module.css'

export function Profile(){
    const {level} = useContext(ChallengesContext)
    return(
        <div className={styles.profilecontainer}>
            <img src="https://github.com/D0ugra5.png" alt="Doug"/>
            <div>
                <strong>Douglas Sousa</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    
                    {level}</p>
            </div>
        </div>
    )
}