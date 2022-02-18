import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import Player from '../components/Player'

export default function LibraryLayout({ mainView }) {
  return (
    <div className='h-full sm:overflow-x-hidden'>
      <section className='flex h-90-percent'>
        <Sidebar />
        <Content mainView={mainView} />
      </section>
      <Player />
    </div>
  )
}
