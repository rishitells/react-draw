import {useCallback, useState} from 'react'
import Rect from '../rect/Rect'

const WorkArea = () => {
  const [attrs, setAttrs] = useState({
    x: '5',
    y: '5',
    width: '200',
    height: '200',
    fill: 'red',
  })
  const [isDragging, setIsDragging] = useState(false)
  const [coordinates, setCoordinates] = useState({x: 0, y: 0, leftOffset: 0, topOffset: 0})

  const handleMouseMove = useCallback(
    (e: any) => {
      if (isDragging) {
        setAttrs((prevAttrs) => ({
          ...prevAttrs,
          x: String(e.clientX - coordinates.leftOffset),
          y: String(e.clientY - coordinates.topOffset),
        }))
      }
    },
    [coordinates.leftOffset, coordinates.topOffset, isDragging]
  )

  const handleMouseUp = useCallback((e: MouseEvent) => {
    setIsDragging(false)
  }, [])

  const handleMouseDown = useCallback(
    (e: MouseEvent) => {
      const node = e.target as HTMLElement
      const {left, top} = node.getBoundingClientRect()

      setCoordinates((prevAttrs) => ({
        ...coordinates,
        x: e.clientX,
        y: e.clientY,
        leftOffset: e.clientX - left,
        topOffset: e.clientY - top,
      }))
      setIsDragging(true)
    },
    [coordinates]
  )

  return (
    <>
      <svg onMouseMove={handleMouseMove} width="640" height="480">
        <Rect handleMouseUp={handleMouseUp} handleMouseDown={handleMouseDown} {...attrs} />
      </svg>
      <p>{`clickX: ${coordinates.x}, clickY: ${coordinates.y}`}</p>
    </>
  )
}

export default WorkArea
