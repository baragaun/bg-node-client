import { expect } from 'chai'
import codeGen from '../../index.js'
import config from './config.js'

describe('bg-channels-web-client', () => {
  it('runs the code generator for bg-channels-web-client', async () => {
    const result = await codeGen(config)
    expect(result).to.equal(0)
  })
})
