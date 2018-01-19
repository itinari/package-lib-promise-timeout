# lib-promise-timeout

Reject a promise after a given delay with PromiseTimeoutError.

## Usage

```typescript
import {timeout, PromiseTimeoutError} from '@itinari/lib-promise-timeout'

try {
  timeout(
    new Promise((resolve, _reject) => {
      setTimeout(resolve, 200)
    }),
    100
  )
} catch (error) {
  if (error instanceof PromiseTimeoutError) {
    // ...
  }
}
```
