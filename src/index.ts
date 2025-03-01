export default class SimpleTimer<T = void> {
  private timer: NodeJS.Timeout | null = null
  private interval: number
  private callback: () => T

  private _isPaused: boolean = false

  private _nextExecutionTime: number | null = null
  private _pausedRemainingTime: number | null = null

  constructor(params: { intervalInMs: number, callback: () => T }) {
    this.interval = params.intervalInMs
    this.callback = params.callback
  }

  get isRunning() {
    return this.timer !== null && !this._isPaused
  }

  get isPaused() {
    return this._isPaused
  }

  get nextExecutionIn() {
    return this._nextExecutionTime ? this._nextExecutionTime - Date.now() : null
  }

  start() {
    if (this.isRunning) {
      throw new Error('Timer is already running')
    }

    this._isPaused = false
    this._nextExecutionTime = Date.now() + this.interval

    this.timer = setInterval(() => {
      this._nextExecutionTime = Date.now() + this.interval
      this.callback()
    }, this.interval)
  }

  restart() {
    if (!this.timer) {
      throw new Error('Timer is not running')
    }

    if (this._isPaused) {
      this._isPaused = false
      this._pausedRemainingTime = null
    }

    this._nextExecutionTime = Date.now() + this.interval
    this.timer.refresh()
  }

  pause() {
    if (!this.timer || !this._nextExecutionTime) {
      throw new Error('Timer is not running')
    }

    this._isPaused = true
    this._pausedRemainingTime = this._nextExecutionTime - Date.now()
    this._nextExecutionTime = null

    this.stop()
  }

  resume() {
    if (!this._isPaused || !this._pausedRemainingTime) {
      throw new Error('Timer is not paused')
    }

    this._isPaused = false
    this._nextExecutionTime = Date.now() + this._pausedRemainingTime

    setTimeout(() => {
      this.callback()
      this.start()
    }, this._pausedRemainingTime)

    this._pausedRemainingTime = 0
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
      this._nextExecutionTime = null
    }
  }
}


