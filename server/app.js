// REFERENCES
// 1. https://developer.spotify.com/documentation/general/guides/authorization-guide/
// 2. https://github.com/spotify/web-api-auth-examples
// 3. https://github.com/bchiang7/spotify-profile/blob/master/server/index.js

const path = require('path')
const dotenv = require('dotenv')
const express = require('express')
const request = require('request')
const cors = require('cors')
const querystring = require('querystring')
const cookieParser = require('cookie-parser')

dotenv.config({ path: './.env' })

const {
  NODE_ENV,
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
  FRONTEND_URI,
} = process.env

if (NODE_ENV == 'development') {
  redirect_uri = REDIRECT_URI || 'http://localhost:4000/callback'
  frontend_uri = FRONTEND_URI || 'http://localhost:3000'
}

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`
const BASIC = new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
  'base64'
)
const USER_BASE_URL = `https://api.spotify.com/v1/me`
const SPOTIFY_BASE_URL = `https://api.spotify.com/v1`
let global_access_token = ''

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
const generateRandomString = (length) => {
  let text = ''
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

const stateKey = 'spotify_auth_state'

const app = express()

app
  .use(express.static(path.resolve(__dirname + '../client/build')))
  .use(cors())
  .use(cookieParser())

app.get('/', (req, res) => {
  res.render(path.resolve(__dirname, '../client/build/index.html'))
})

app.get('/login', (req, res) => {
  const state = generateRandomString(16)
  res.cookie(stateKey, state)

  // your application requests authorization
  // https://developer.spotify.com/documentation/general/guides/scopes
  // since we want to replicate basically all the features provided by Spotify
  // WE NEED THEM ALL!!!
  const scope =
    'ugc-image-upload user-read-recently-played user-top-read user-read-playback-position user-read-playback-state user-modify-playback-state user-read-currently-playing app-remote-control streaming playlist-modify-public playlist-modify-private playlist-read-private playlist-read-collaborative user-follow-modify user-follow-read user-library-modify user-library-read user-read-email user-read-private'

  res.redirect(
    `https://accounts.spotify.com/authorize?${querystring.stringify({
      client_id: CLIENT_ID,
      response_type: 'code',
      redirect_uri: REDIRECT_URI,
      state: state,
      scope: scope,
    })}`
  )
})

app.get('/callback', (req, res) => {
  // your application requests refresh and access tokens
  // after checking the state parameter
  const code = req.query.code || null
  const state = req.query.state || null
  const storedState = req.cookies ? req.cookies[stateKey] : null

  if (state === null || state !== storedState) {
    res.redirect(`/#${querystring.stringify({ error: 'state_mismatch' })}`)
  } else {
    res.clearCookie(stateKey)

    const authOptions = {
      url: TOKEN_ENDPOINT,
      headers: {
        Authorization: `Basic ${BASIC}`,
      },
      form: {
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI,
      },
      json: true,
    }

    request.post(authOptions, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const access_token = body.access_token
        const refresh_token = body.refresh_token

        // we can also pass the token to the browser to make requests from there
        res.redirect(
          `${FRONTEND_URI}/#${querystring.stringify({
            access_token: access_token,
            refresh_token: refresh_token,
          })}`
        )
      } else {
        res.redirect(`/#${querystring.stringify({ error: 'invalid_token' })}`)
      }
    })
  }
})

app.get('/refresh_token', (req, res) => {
  // requesting access token from refresh token
  const refresh_token = req.query.refresh_token

  const authOptions = {
    url: TOKEN_ENDPOINT,
    headers: {
      Authorization: `Basic ${BASIC}`,
    },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token,
    },
    json: true,
  }

  request.post(authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const access_token = body.access_token
      res.send({ access_token })
    }
  })
})

// all remaining requests return to the frontend part
// so it can continue with client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/public', 'index.html'))
})

module.exports = app
