import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
import {expect} from 'chai'

import * as PromiseTimeout from '.'

chai.use(chaiAsPromised)

describe('Promise Timeout', () => {
  describe('timeout', () => {
    it('should return rejected promise with PromiseTimeoutError', () => {
      const promise = new Promise((resolve, _reject) => {
        setTimeout(resolve, 20)
      })
      const timeoutPromise = PromiseTimeout.timeout(promise, 10)
      return expect(timeoutPromise).rejectedWith(
        PromiseTimeout.PromiseTimeoutError
      )
    })

    it('should return resolved promise', () => {
      const promise = new Promise((resolve, _reject) => {
        setTimeout(resolve, 10)
      })
      const timeoutPromise = PromiseTimeout.timeout(promise, 20)
      return expect(timeoutPromise).fulfilled
    })
  })
})
