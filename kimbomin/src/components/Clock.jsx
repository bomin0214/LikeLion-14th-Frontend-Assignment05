import { useEffect, useState } from 'react';

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
            clearInterval(id); // 컴포넌트 사라질 때 타이머 정리
        };

    }, []);

    return (
        <div className="bg-white rounded-2xl shadow p-10 flex flex-col gap-4 w-96">
            <span>🕐</span>
                <div>
                    <p className="text-gray-700">현재 시각</p>
                    <p className="text-sm text-gray-400">1초마다 시간이 업데이트됩니다</p>
                </div>
            <p className="text-4xl text-blue-500 text-center">{clock}</p>
        </div>
    );
}
