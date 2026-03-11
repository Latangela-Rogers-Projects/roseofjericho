import React, { useEffect, useState } from "react"

const Link = ({ to, replace = false, children, ...props }: any) => {
  const handleClick = (e: React.MouseEvent) => {
    // Allow cmd/ctrl click, middle click, new tab, etc
    if (
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0
    ) {
      return
    }

    e.preventDefault()

    navigate(to, { replace })
  }

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}

type NavigateOptions = {
  replace?: boolean
  state?: any
}

export const navigate = (
  to: string | number,
  options: NavigateOptions = {}
) => {
  if (typeof window === "undefined") return

  // ------------------------
  // HISTORY NAVIGATION
  // navigate(-1), navigate(-2)
  // ------------------------
  if (typeof to === "number") {
    window.history.go(to)
    return
  }

  const { replace = false, state } = options

  // ------------------------
  // SAME-PAGE STATE PUSH
  // ------------------------
  if (state !== undefined) {
    if (replace) {
      window.history.replaceState(state, "", to)
    } else {
      window.history.pushState(state, "", to)
    }

    // Force React to re-evaluate location
    window.dispatchEvent(new PopStateEvent("popstate"))
    return
  }

  // ------------------------
  // FULL PAGE NAVIGATION
  // ------------------------
  if (replace) {
    window.location.replace(to)
  } else {
    window.location.href = to
  }
}

export const getLocation = () => {
  if (typeof window === "undefined") return null

  return {
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
    state: window.history.state,
  }
}

export const getIdFromUrl = (identifier: string) => {
  if (typeof window === "undefined") return null

  const parts = window.location.pathname.split("/").filter(Boolean)
  const index = parts.indexOf(identifier)

  return index !== -1 && parts[index + 1]
    ? Number(parts[index + 1])
    : null
}

type Params = Record<string, string>


export function useParams(pattern: string): Params {
  const getParams = (): Params => {
    if (typeof window === "undefined") return {}

    const params: Params = {}

    const urlParts = window.location.pathname
      .split("/")
      .filter(Boolean)

    const patternParts = pattern
      .split("/")
      .filter(Boolean)

    patternParts.forEach((part, index) => {
      if (part.startsWith(":") && urlParts[index]) {
        params[part.slice(1)] = urlParts[index]
      }
    })

    return params
  }

  const [params, setParams] = useState<Params>(() => getParams())

  useEffect(() => {
    setParams(getParams())
  }, [pattern])

  useEffect(() => {
    const handleChange = () => setParams(getParams())
    window.addEventListener("popstate", handleChange)
    return () => window.removeEventListener("popstate", handleChange)
  }, [])

  return params
}

// export function useParams(pattern: string): Params {
//   const getParams = (): Params => {
//     if (typeof window === "undefined") return {}

//     const params: Params = {}

//     const urlParts = window.location.pathname
//       .split("/")
//       .filter(Boolean)

//     const patternParts = pattern
//       .split("/")
//       .filter(Boolean)

//     patternParts.forEach((part, index) => {
//       if (part.startsWith(":") && urlParts[index]) {
//         params[part.slice(1)] = urlParts[index]
//       }
//     })

//     return params
//   }

//   const [params, setParams] = useState<Params>(() => getParams())

//   useEffect(() => {
//     setParams(getParams())
//   }, [pattern]) // 👈 THIS IS WHAT WAS MISSING

//   useEffect(() => {
//     const handleChange = () => setParams(getParams())
//     window.addEventListener("popstate", handleChange)
//     return () => window.removeEventListener("popstate", handleChange)
//   }, [])

//   return params
// }

export default Link;