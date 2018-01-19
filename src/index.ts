export class PromiseTimeoutError extends Error {
  constructor() {
    super('Promise timed out')
    this.name = this.constructor.name
  }
}

export async function timeout<T>(
  promise: Promise<T>,
  delay: number
): Promise<T> {
  let timer: NodeJS.Timer
  try {
    return await Promise.race([
      promise,
      new Promise<T>((_resolve, reject) => {
        timer = setTimeout(() => {
          return reject(new PromiseTimeoutError())
        }, delay)
      }),
    ])
  } finally {
    clearTimeout(timer)
  }
}
