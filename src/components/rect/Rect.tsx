type RectProps = {
  x: string
  y: string
  width: string
  height: string
  stroke: string
  fill: string
  strokeWidth: string
  handleClick: (e: any) => void
}

const Rect = ({x, y, width, height, stroke, fill, strokeWidth, handleClick}: RectProps) => {
  return (
    <rect
      onClick={handleClick}
      x={x}
      y={y}
      width={width}
      height={height}
      stroke={stroke}
      fill={fill}
      strokeWidth={strokeWidth}
    />
  )
}

export default Rect
