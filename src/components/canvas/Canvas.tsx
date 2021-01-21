import {useEffect, useRef} from 'react'

const Canvas = () => {
  const canvasEl = useRef<HTMLCanvasElement>(null)
  const context = useRef<CanvasRenderingContext2D>()

  useEffect(() => {
    if (canvasEl && canvasEl.current) {
      canvasEl.current.width = window.innerWidth
      canvasEl.current.height = window.innerHeight
      context.current = canvasEl.current.getContext('2d')!
      context.current!.fillRect(0, 0, 100, 100)
    }
  }, [])

  return (
    <canvas ref={canvasEl}>
      <p>nothing here</p>
    </canvas>
  )
}

export default Canvas
