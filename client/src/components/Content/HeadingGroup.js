export default function HeadingGroup({ isHome, title }) {
  return (
    <div className='flex items-center justify-between mb-8 px-8'>
      <h2 className='text-4xl font-bold'>{title}</h2>
      {isHome ? (
        <span className='text-spotifyGrey cursor-pointer text-xl font-bold uppercase hover:underline'>
          See All
        </span>
      ) : null}
    </div>
  )
}
