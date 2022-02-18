import PlaylistName from './PlaylistName'

const names = [
  'Your Top Songs 2020',
  'Sleep',
  'Study With Me',
  'DVLPR_FOCUS-v2.1',
  'lofi hip hop music - beats to relax/study to',
  'English',
  'Zelda and Chill',
  'Others',
  'EDM',
  'Music',
  'kpop | jpop',
  '<Chinese>Awesome God',
  'Awesome God',
  'Chinese',
  'This is Enya',
  'Favourite',
  'Walker Radio',
  'English',
  'Testing',
  'Testing 2',
  'Testing 3',
  'Testing 4',
  'Testing 5',
]

export default function Playlist() {
  return (
    <section className='font-bold mb-0 overflow-y-scroll min-h-0 flex-1'>
      <ul className='pb-20'>
        {names.map((name, index) => (
          <PlaylistName name={name} key={index} />
        ))}
      </ul>
    </section>
  )
}
