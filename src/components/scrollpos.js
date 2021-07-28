import React, { useState, useRef, useMemo } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const PositionStore = () => {
  const [renderCount, triggerReRender] = useState(0)
  const viewportPosition = useRef({ x: 0, y: 0 })
  let throttleTimeout = null
  const getPos = (el, axis) => Math.round(el.current[axis])
  const setPos = (el, pos) => {
    el.current = pos
    if (throttleTimeout !== null) return
    // Only re-render the component every 0.1s
    throttleTimeout = setTimeout(() => triggerReRender(renderCount + 1), 300)
  }

  return {
   
    getViewportX: () => getPos(viewportPosition, 'x'),
    getViewportY: () => getPos(viewportPosition, 'y'),
    
    setViewportPosition: pos => setPos(viewportPosition, pos),
    renderCount

    
  }
}

export default () => {
  const positionsStore = PositionStore()
  const viewportRef = useRef()

  // Viewport scroll position
  useScrollPosition(
    ({ currPos }) => {
      positionsStore.setViewportPosition(currPos)

    },
    [positionsStore],
    null,
    true
  // Stop the box!!!!!!!!!!!
  )
  
    return (


        <div id="f">
            Viewport Scroll:
            <span>
              X: {positionsStore.getViewportX()} Y: {positionsStore.getViewportY()}
            </span>
        </div>
          )}


          
    