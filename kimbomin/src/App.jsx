import { useState } from 'react';
import Clock from './components/Clock';
import Timer from './components/Timer';

export default function App() {
    const [view, setView] = useState('clock');

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-6 font-sans">
            <p className="text-sm text-blue-500 font-semibold">useEffect 타이머 예제</p>
            <h1 className="text-4xl font-bold text-gray-800">실시간 시계 & 카운트다운 타이머</h1>
            <p className="text-gray-400 text-sm">컴포넌트 마운트, 언마운트, cleanup 동작을 확인할 수 있는 예제입니다.</p>
            <div className="flex gap-2 bg-white rounded-xl p-1 shadow">
                <button
                    onClick={() => setView('clock')}
                    className={`px-6 py-2 rounded-lg font-semibold text-sm transition ${view === 'clock' ? 'bg-blue-500 text-white' : 'text-gray-500'}`}
                >
                    시계 보기
                </button>
                <button
                    onClick={() => setView('timer')}
                    className={`px-6 py-2 rounded-lg font-semibold text-sm transition ${view === 'timer' ? 'bg-blue-500 text-white' : 'text-gray-500'}`}
                >
                    타이머 보기
                </button>
            </div>

            <p className="text-sm text-gray-400">현재 보기: <span className="text-gray-600 font-semibold">{view === 'clock' ? '시계' : '카운트다운'}</span></p>
            {view === 'clock' ? <Clock /> : <Timer />}
        </div>
    );
}
