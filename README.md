# Simple Timer

A simple and flexible timer library for Node.js that has pause, resume, restart and stop functionality with TypeScript support.

## Installation

```bash
npm install @minons1/simple-timer
```

## Usage

```typescript
import SimpleTimer from '@minons1/simple-timer';

// Create a timer that executes every 1000ms (1 second)
const timer = new SimpleTimer({
  intervalInMs: 1000,
  callback: () => console.log('Timer tick!')
});

// Start the timer
timer.start();

// Pause the timer
timer.pause();

// Resume from where it was paused
timer.resume();

// Restart the timer (resets the interval)
timer.restart();

// Stop the timer
timer.stop();
```

## API

### Constructor

```typescript
new SimpleTimer({ intervalInMs: number, callback: () => T })
```

### Methods

- `start()`: Starts the timer
- `pause()`: Pauses the timer, preserving the remaining time
- `resume()`: Resumes the timer from where it was paused
- `restart()`: Resets and restarts the current interval
- `stop()`: Stops the timer completely

### Properties

- `isRunning`: Returns true if the timer is currently running
- `isPaused`: Returns true if the timer is currently paused
- `nextExecutionIn`: Returns the number of milliseconds until the next execution (null if not running)

## Example with TypeScript

```typescript
interface TaskResult {
  status: string;
}

const timer = new SimpleTimer<TaskResult>({
  intervalInMs: 2000,
  callback: () => ({ status: 'completed' })
});
```

## License

MIT License

Copyright (c) 2023

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. Here's how you can contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and follow the existing code style.