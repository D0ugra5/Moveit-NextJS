import { createContext, ReactNode, useState, useContext, useEffect } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isactive: boolean;
    startCountDown: () => void;
    resetCountDown: () => void;

}



interface CountdownProviderProps {

    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)
let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {

    const [hasFinished, sethasFinished] = useState(false)
    const [time, setTime] = useState(0.1 * 60)
    const [isactive, setisActive] = useState(false)
    const minutes = Math.floor(time / 60)
    const seconds = time % 60;
    const { startNewChallenge } = useContext(ChallengesContext)

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
            startNewChallenge();
            sethasFinished(false)

        }
    }, [isactive, time])

    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isactive,
            startCountDown,
            resetCountDown,
        }}>
            {children}
        </CountdownContext.Provider>
    )
}