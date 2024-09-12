function PlusIcon({ width = '20px', height = '20px', color = '#606060' }) {
  return (
    <svg width={width} height={height} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M10 4.16666V15.8333' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
      <path d='M4.16699 10H15.8337' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
    </svg>
  )
}

export default PlusIcon