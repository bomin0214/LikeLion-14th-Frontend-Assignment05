import {useEffect, useState} from 'react';

export default function Timer() {
    const [time, setTime] = useState(0);
    const [inputVal, setInputVal] = useState('');
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if (!running) return;
        if (time === 0) {
            setRunning(false);
            return;
        }

        const id = setInterval(() => {
            setTime((t) => t - 1);
        }, 1000);

        return () => clearInterval(id);
    }, [time, running]);

    const handleStart = () => {
        // 입력 x return
        if (!inputVal) return;
        setTime(Number(inputVal));
        setRunning(true);
    }

    return (
        // time이 0이면 '시간 종료!' 출력, 아니면 남은 시간 출력
         <div className="bg-white rounded-2xl shadow p-10 flex flex-col gap-4 w-96">
        <span>💣</span>
        <div>
            <p className="text-gray-700">카운트다운</p>
            <p className="text-sm text-gray-400">초 입력 후 시작 버튼을 눌러주세요</p>
        </div>
        <div className="flex gap-2">
                <input
                    type="number"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="초 입력"
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm"
                />
                <button
                    onClick={handleStart}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm"
                >
                    시작
                </button>
            </div>
        <p className="text-4xl text-blue-500 text-center">
            {running === false && time === 0 && inputVal !== '' 
                ? '💥 시간 종료!' 
                : !running && time === 0 
                ? '⏱️ 대기중' 
                : `${time}초`}
        </p>
    </div>
    );
}
