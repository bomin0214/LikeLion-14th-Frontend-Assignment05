import { useEffect, useState } from 'react';
import styles from './Clock.module.css';

export default function Clock() {

    // 현재 시각 담을 변수
    const [clock, setClock] = useState('');

    useEffect(() => {
        // 1초마다 현재 시각을 업데이트
        const id = setInterval(() => {

            const now = new Date();
            // 현재 시각 문자열로 변환 -> 시:분:초
            const timeString = now.toLocaleTimeString();

            setClock(timeString);

        }, 1000);

        return () => {
            clearInterval(id);
        };

    }, []);

    return (
        <div className={styles.clock}>
            <span className={styles.time}>
                {clock}
            </span>
        </div>
    );
}
