import {useEffect, useState} from 'react';
import styles from './Timer.module.css';

export default function Timer() {

    // 시간 담을 변수 time
    const [time, setTime] = useState(30);

    useEffect(() => {
        // 설정된 시간 간격마다 setInterval 골백 실행됨.
        const id = setInterval(() => {
            setTime((time) => time - 1);
    }, 1000);

    // timer = 0 이면 카운트가 멈추게 된다.
    if(time === 0) {
        clearInterval(id);
    }
    return () => clearInterval(id);
    }, [time]);

    return <div className={styles.timer}>
        <span className={styles.time}>{time}</span>
    </div>;
}
