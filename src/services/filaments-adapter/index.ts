import wretch from "wretch"

export const filaments =
    wretch('http://localhost:4444', { mode: "cors" })
        .errorType("json")
        .resolve(r => r.json())