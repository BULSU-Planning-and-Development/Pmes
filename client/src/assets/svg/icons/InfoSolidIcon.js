function InfoSolidIcon({ width = '20px', height = '20px', color = '#606060' }) {
  return (
    <svg width={width} height={height} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path fillRule='evenodd' clipRule='evenodd' d='M2.66663 15.9993C2.66663 23.3631 8.63616 29.3327 16 29.3327C23.3638 29.3327 29.3333 23.3631 29.3333 15.9993C29.3333 8.63555 23.3638 2.66602 16 2.66602C8.63616 2.66602 2.66663 8.63555 2.66663 15.9993ZM17 14.9993V15.9993V23.9993V24.9993L15 24.9993V23.9993V15.9993V14.9993H17ZM15 9.33268V10.3327H17V9.33268V7.99935V6.99935H15V7.99935V9.33268Z' fill={color}/>
    </svg>
  )
}

export default InfoSolidIcon