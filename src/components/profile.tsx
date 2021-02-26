
import styles from '../style/components/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profilecontainer}>
            <img src="https://github.com/D0ugra5.png" alt="Doug"/>
            <div>
                <strong>Douglas Sousa</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    
                      Level 1</p>
            </div>
        </div>
    )
}