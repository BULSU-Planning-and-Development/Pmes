function PinIcon({ width = '20px', height = '20px', color = '#606060' }) {
  return (
    <svg width={width} height={height} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M5.33268 2.97403C5.33268 2.43609 5.76877 2 6.30671 2H9.69198C10.2299 2 10.666 2.43609 10.666 2.97403V3.11964C10.666 4.56308 11.0933 5.97422 11.894 7.17524L12.5858 8.21308C12.9498 8.75902 12.663 9.50074 12.0265 9.65988C9.38242 10.3209 6.61628 10.3209 3.9722 9.65988C3.33565 9.50074 3.04889 8.75902 3.41285 8.21308L4.10475 7.17524C4.90542 5.97422 5.33268 4.56308 5.33268 3.11964V2.97403Z' fill={color}/>
      <path d='M8 13.3333L8 9' stroke={color} strokeWidth='2' strokeLinecap='round'/>
      <path d='M4 13.3333H12' stroke={color} strokeWidth='2'/>
    </svg>
  )
}

export default PinIcon