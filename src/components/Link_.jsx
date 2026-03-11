import React from 'react';

// const Link = ({ to, replace = false, children, ...props }) => {
//   const handleClick = (e) => {
//     // Allow cmd/ctrl click, middle click, new tab, etc
//     if (
//       e.metaKey ||
//       e.ctrlKey ||
//       e.shiftKey ||
//       e.altKey ||
//       e.button !== 0
//     ) {
//       return
//     }

//     e.preventDefault()

//     navigate(to, { replace })
//   }

//   return (
//     <a href={to} onClick={handleClick} {...props}>
//       {children}
//     </a>
//   )
// }

// type NavigateOptions = {
//   replace?: boolean
//   state?: any
// }

// export const navigate = (
//   to: string | number,
//   options: NavigateOptions = {}
// ) => {
//   if (typeof window === "undefined") return

//   // ------------------------
//   // HISTORY NAVIGATION
//   // navigate(-1), navigate(-2)
//   // ------------------------
//   if (typeof to === "number") {
//     window.history.go(to)
//     return
//   }

//   const { replace = false, state } = options

//   // ------------------------
//   // SAME-PAGE STATE PUSH
//   // ------------------------
//   if (state !== undefined) {
//     if (replace) {
//       window.history.replaceState(state, "", to)
//     } else {
//       window.history.pushState(state, "", to)
//     }

//     // Force React to re-evaluate location
//     window.dispatchEvent(new PopStateEvent("popstate"))
//     return
//   }

//   // ------------------------
//   // FULL PAGE NAVIGATION
//   // ------------------------
//   if (replace) {
//     window.location.replace(to)
//   } else {
//     window.location.href = to
//   }
// }

export const getIdFromUrl = (identifier) => {
  if (typeof window === "undefined") return null
  const parts = window.location.pathname.split("/").filter(Boolean)
  const collectionsIndex = parts.indexOf(identifier)
  return collectionsIndex !== -1 && parts[collectionsIndex + 1]
    ? Number(parts[collectionsIndex + 1])
    : null
}

export default Link;