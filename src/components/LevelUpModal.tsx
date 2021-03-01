import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../style/components/LevelUpModal.module.css'
import {useContext} from 'react'
const LevelUpModal = () => {
    const {level,closeLevelUpModal} = useContext(ChallengesContext)
    return (
        <div className={styles.overlay}>
        <div className={styles.container}>
            <header>{level}</header>

            <strong>Parabéns</strong>
            <p>Você Alcançou um novo Level. </p>


            <button type='button'
            onClick={closeLevelUpModal}>
                <img src="/icons/close.svg" alt="Fechar modal"/>
            </button>
        </div>
        </div>
    )
}

export default LevelUpModal
