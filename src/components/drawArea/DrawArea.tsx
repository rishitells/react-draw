import {useCallback, useState} from 'react'
import Rect from '../rect/Rect'

const DrawArea = () => {
  const [isSelected, setIsSelected] = useState(false)
  const [attrs, setAttrs] = useState({
    x: '10',
    y: '10',
    width: '30',
    height: '30',
    stroke: 'black',
    fill: 'transparent',
    strokeWidth: '5',
  })

  const handleSelection = useCallback((e) => {
    console.log('e', e.target)

    setAttrs((prevAttrs) => ({
      ...prevAttrs,
      width: '40',
      height: '50',
    }))
  }, [])

  return (
    <svg width="320" height="240">
      <g transform="scale(2)">
        <Rect handleClick={handleSelection} {...attrs} />
      </g>
    </svg>
  )
}

export default DrawArea
