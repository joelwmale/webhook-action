import { http } from '../src/http'
import {expect, test} from '@jest/globals'

test('it makes a post request', async () => {
    const url = 'https://httpbin.org/post'
    const body = '{"hello": "world"}'
    const res = await http.make(url, body)
    expect(res.status).toBe(200)
})

test('it makes a post request with insecure', async () => {
    const url = 'https://httpbin.org/post'
    const body = '{"hello": "world"}'
    const insecure = true
    const res = await http.make(url, body, null, insecure)
    expect(res.status).toBe(200)
})

test('it makes a post request with headers', async () => {
    const url = 'https://httpbin.org/post'
    const body = '{"hello": "world"}'
    const headers = '{"Content-Type": "application/json"}'
    const res = await http.make(url, body, headers)
    expect(res.status).toBe(200)
})

test('it doesnt require a body', async () => {
    const url = 'https://httpbin.org/post'
    const res = await http.make(url, null)
    expect(res.status).toBe(200)
})