export default function BasicCard({ src, title, desc, owner }) {
  return (
    // Show the description if there is one
    // Else, show the name of the playlist's owner
    <div className='flex flex-col bg-spotifyCardBlack rounded-md shadow-lg cursor-pointer p-8 h-auto w-auto hover:bg-spotifyDarkGrey mr-8 2xl:p-6 xl:p-4'>
      <img className='h-auto w-auto mt-0 mb-8' src={src} alt={title} />
      <p className='text-2xl font-bold mb-4 textOverflow'>{title}</p>
      {desc ? (
        <p className='text-spotifyGrey text-2xl textOverflow'>{desc}</p>
      ) : (
        <p className='text-spotifyGrey text-2xl'>{owner}</p>
      )}
    </div>
  )
}
