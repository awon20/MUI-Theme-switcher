import React, { useEffect, useRef, useState } from 'react'

// Usage
// Hook
function useHover() {
  const [value, setValue] = useState(false)
  const ref = useRef(null)
  const handleMouseOver = () => setValue(true)
  const handleMouseOut = () => setValue(false)
  useEffect(
    () => {
      const node = ref.current
      if (node) {
        node.addEventListener('mouseover', handleMouseOver)
        node.addEventListener('mouseout', handleMouseOut)
        return () => {
          node.removeEventListener('mouseover', handleMouseOver)
          node.removeEventListener('mouseout', handleMouseOut)
        }
      }
      return undefined
    },
    [], // This demo attaches the ref to one stable DOM node.
  )
  return [ref, value]
}

export default function HoverHook() {
  const [hoverRef, isHovered] = useHover()
  return <div ref={hoverRef}>{isHovered ? '😁' : '☹️'}</div>
}
