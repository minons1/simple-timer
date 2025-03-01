import SimpleTimer from '../src'

function main() {
  const myTimer = new SimpleTimer<string>({
    intervalInMs: 1000,
    callback: () => {
      console.log('Hello')
      return 'Ya'
    }
  })

  myTimer.start()

  setInterval(() => {
    console.log('Is running?', myTimer.isRunning)
    console.log('Is paused?', myTimer.isPaused)
    console.log('Next execution in:', myTimer.nextExecutionIn)
  }, 500)

  setTimeout(() => {
    myTimer.pause()
  }, 3000)

  setTimeout(() => {
    myTimer.resume()
  }, 6000)

  setTimeout(() => {
    myTimer.restart()
  }, 9000)

  setTimeout(() => {
    myTimer.stop()
  }, 12000)
}

main()