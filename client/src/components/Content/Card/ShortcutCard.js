export default function ShortcutCard({ src, title }) {
  return (
    <div className='flex items-center bg-gray-200 bg-opacity-10 border-0 rounded-md cursor-pointer w-full hover:bg-opacity-20'>
      <img className='rounded-l-md h-36 w-36' src={src} alt={title} />
      <p className='text-white font-bold py-2 px-8 textOverflow'>{title}</p>
    </div>
  )
}
