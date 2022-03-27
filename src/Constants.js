const dev = {
    CLIENT_ID: "29d2fe5ce8344216a0aba2e6af42c3eb",
    REDIRECT_URI: "http://localhost:3000",
    AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
    RESPONSE_TYPE: "token"
}

const prod = {
    CLIENT_ID: "29d2fe5ce8344216a0aba2e6af42c3eb",
    REDIRECT_URI: "https://wrapd-app.herokuapp.com/",
    AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
    RESPONSE_TYPE: "token"
}

export const config = process.env.NODE_ENV === 'development'
    ? dev
    : prod;