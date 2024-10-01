function Profile({ width = '20px', height = '20px', color = '#606060' }) {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M12.5 12C15.2614 12 17.5 9.76142 17.5 7C17.5 4.23858 15.2614 2 12.5 2C9.73858 2 7.5 4.23858 7.5 7C7.5 9.76142 9.73858 12 12.5 12Z' fill={color}/>
    <path d='M12.5 13.6659C8.35977 13.6705 5.00461 17.0257 5 21.1659C5 21.6261 5.37309 21.9992 5.83332 21.9992H19.1666C19.6269 21.9992 20 21.6261 20 21.1659C19.9954 17.0257 16.6402 13.6705 12.5 13.6659Z' fill={color}/>
    </svg>
  )
}

export default Profile