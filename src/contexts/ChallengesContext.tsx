import { createContext, useState, ReactNode, useEffect } from 'react'
import challenges from '../../challenges.json'
import Cookies from 'js-cookie'
import LevelUpModal from '../components/LevelUpModal'
interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengeContextData {
    level: number;
    experienceToNextLevel: number;
    currentExperience: number;
    challengesCompleted: number;
    startNewChallenge: () => void;
    levelUP: () => void;
    activeChallenge: Challenge;
    resetChallege: () => void;
    completeChallenge: () => void;
    closeLevelUpModal: ()=>void;
}
interface ChallengesProvider {
    children: ReactNode
    level:number;
    currentExperience:number;
    challengesCompleted:number;
}


export const ChallengesContext = createContext({} as ChallengeContextData)
export function ChallengesProvider({ children,
  ...rest}: ChallengesProvider) {
    useEffect(()=>{
        Notification.requestPermission()
        
        },[])


 
    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setcurrentExperience] = useState(rest.currentExperience ?? 0 )
    const [challengesCompleted, setchallengesCompleted] = useState(rest.challengesCompleted ?? 0)
    const [activeChallenge, setActiveChallenge] = useState(null)
    const [isLevelUpModalOpen,setisLevelUpModalOpen] = useState(false)
    useEffect(()=>{
   Cookies.set('level',String(level))
   Cookies.set('currentExperience',String(currentExperience))
   Cookies.set('challengesCompleted',String(challengesCompleted))

    },[level,currentExperience,challengesCompleted])
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)
    function levelUP() {
        setLevel(level + 1)
        setisLevelUpModalOpen(true)
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex];
        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play()
 if(Notification.permission=== 'granted'){
     new Notification('Novo Desafio',{
         body:`Valendo ${challenge.amount}xp!`
     })
 }

    }

function closeLevelUpModal(){
    setisLevelUpModalOpen(false)
}



    function resetChallege() {
        setActiveChallenge(null)
    }
    function completeChallenge() {

        if (!activeChallenge) {
            return;
        }

        const { amount } = activeChallenge;

        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUP();
        }

        setcurrentExperience(finalExperience)
        setActiveChallenge(null)
        setchallengesCompleted(challengesCompleted + 1)
    }
    return (
        <ChallengesContext.Provider
            value={{
                level,
                levelUP,
                currentExperience,
                challengesCompleted,
                startNewChallenge,
                activeChallenge,
                resetChallege,
                experienceToNextLevel,
                completeChallenge,
                closeLevelUpModal
            }}
        >
            { children}

            {isLevelUpModalOpen && ( 
            <LevelUpModal></LevelUpModal>)
      }
           
        </ChallengesContext.Provider>
    )
}