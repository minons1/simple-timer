export default class SimpleTimer<T = void> {
    private timer;
    private interval;
    private callback;
    private _isPaused;
    private _nextExecutionTime;
    private _pausedRemainingTime;
    constructor(params: {
        intervalInMs: number;
        callback: () => T;
    });
    get isRunning(): boolean;
    get isPaused(): boolean;
    get nextExecutionIn(): number | null;
    start(): void;
    restart(): void;
    pause(): void;
    resume(): void;
    stop(): void;
}
