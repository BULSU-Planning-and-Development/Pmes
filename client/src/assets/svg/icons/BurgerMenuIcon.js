function BurgerMenuIcon({ width = '18px', height = '20px', color = '#606060' }) {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M5 7H19' stroke='white' strokeWidth='2' strokeLinecap='round'/>
      <path d='M5 12H19' stroke='white' strokeWidth='2' strokeLinecap='round'/>
      <path d='M5 17H19' stroke='white' strokeWidth='2' strokeLinecap='round'/>
    </svg>
  )
}

export default BurgerMenuIcon