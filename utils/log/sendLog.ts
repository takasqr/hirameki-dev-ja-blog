// import { ofetch } from 'ofetch'
import type { Log } from '../../types/Log'

function sendLog(log: Log) {
  return $fetch('/api/log/', {
    method: 'POST',
    body: JSON.stringify(log),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export { sendLog }
