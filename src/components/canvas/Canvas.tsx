import {useEffect, useRef} from 'react'

const Canvas = () => {
  const canvasEl = useRef<HTMLCanvasElement>(null)
  const context = useRef<CanvasRenderingContext2D | null>()

  useEffect(() => {
    if (canvasEl && canvasEl.current) {
      const width = (canvasEl.current.width = window.innerWidth)
      const height = (canvasEl.current.height = window.innerHeight)
      context.current = canvasEl.current.getContext('2d')
      console.log({width, height, context})
    }
  }, [])

  return (
    <canvas ref={canvasEl}>
      <p>nothing here</p>
    </canvas>
  )
}

export default Canvas
