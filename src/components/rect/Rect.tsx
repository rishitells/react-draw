type RectProps = {
  x: string
  y: string
  width: string
  height: string
  fill: string
  handleMouseDown: (e: any) => void
  handleMouseUp: (e: any) => void
}

const Rect = ({x, y, width, height, fill, handleMouseDown, handleMouseUp}: RectProps) => {
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    />
  )
}

export default Rect
