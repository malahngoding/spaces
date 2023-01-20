import wretch from "wretch"

export const decays =
    wretch('http://localhost:5000', { mode: "cors" })
        .errorType("json")
        .resolve(r => r.json())