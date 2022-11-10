import { http } from '../src/http'
import {expect, test} from '@jest/globals'

test('it makes a post request', async () => {
    const url = 'https://httpbin.org/post'
    const body = '{"hello": "world"}'
    const insecure = false
    const res = await http.make(url, body)
    expect(res.status).toBe(200)
})