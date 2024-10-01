function ClockIcon({ width = '20px', height = '20px', color = '#606060' }) {
  return (
    <svg width={width} height={height} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M1.33333 9.33333L3.23309 10.7582C3.66178 11.0797 4.26772 11.0061 4.60705 10.5914L10 4' stroke={color} strokeWidth='2' strokeLinecap='round'/>
      <path fillRule='evenodd' clipRule='evenodd' d='M7.15234 11.4029L7.26922 11.4964C8.12505 12.181 9.3725 12.0494 10.0665 11.2011L15.4402 4.63327C15.7899 4.20582 15.7269 3.5758 15.2995 3.22607C14.872 2.87635 14.242 2.93935 13.8923 3.36679L8.51861 9.93463L8.4189 9.85485L7.15234 11.4029Z' fill={color}/>
    </svg>
  )
}

export default ClockIcon