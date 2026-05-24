import {useEffect, useState} from 'react';

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

    return (
        // time이 0이면 '시간 종료!' 출력, 아니면 남은 시간 출력
         <div className="bg-white rounded-2xl shadow p-10 flex flex-col gap-4 w-96">
        <span>💣</span>
        <div>
            <p className="text-gray-700">카운트다운</p>
            <p className="text-sm text-gray-400">10초부터 0초까지 감소합니다</p>
        </div>
        <p className="text-4xl text-blue-500 text-center">
            {time === 0 ? '💥 시간 종료!' : `${time}초`}
        </p>
    </div>
    );
}
