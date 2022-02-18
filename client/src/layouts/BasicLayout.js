import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import Player from '../components/Player'

export default function BasicLayout({ mainView }) {
  return (
    <div className='flex flex-col h-full w-full md:overflow-hidden'>
      <section className='flex h-90-percent overflow-auto'>
        <Sidebar />
        <Content mainView={mainView} />
      </section>
      <Player />
    </div>
  )
}
