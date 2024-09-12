function CloseIcon({ width = '20px', height = '20px', color = '#606060' }) {
  return (
    <svg width={width} height={height} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M16 4L4 16M4 4L16 16' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
    </svg>
  )
}

export default CloseIcon