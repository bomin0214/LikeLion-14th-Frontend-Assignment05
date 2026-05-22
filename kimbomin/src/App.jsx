import Clock from './components/Clock';
import Timer from './components/Timer';

export default function App() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-10">
            <Clock />
            <Timer />
        </div>
    );
}
