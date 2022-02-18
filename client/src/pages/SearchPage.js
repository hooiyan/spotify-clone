import SearchLayout from '../layouts/SearchLayout'
import TopBar from '../components/Content/TopBar'
import ColorfulCard from '../components/Content/Card/ColorfulCard'
import HeadingGroup from '../components/Content/HeadingGroup'

function View() {
  return (
    <section className='overflow-hidden'>
      <TopBar hasSearchBar />
      <HeadingGroup title='Your top genres' />
      <section className='px-8 mb-16 grid grid-flow-col gap-16 overflow-x-scroll scrollbar-none'>
        <ColorfulCard />
        <ColorfulCard />
        <ColorfulCard />
        <ColorfulCard />
        <ColorfulCard />
        <ColorfulCard />
      </section>
      <HeadingGroup title='Browse all' />
      <section className='px-8 mb-16 grid grid-flow-row auto-cols-min grid-cols-7 gap-12'>
        <ColorfulCard isSquare />
        <ColorfulCard isSquare />
        <ColorfulCard isSquare />
        <ColorfulCard isSquare />
        <ColorfulCard isSquare />
        <ColorfulCard isSquare />
        <ColorfulCard isSquare />
        <ColorfulCard isSquare />
        <ColorfulCard isSquare />
        <ColorfulCard isSquare />
        <ColorfulCard isSquare />
        <ColorfulCard isSquare />
        <ColorfulCard isSquare />
        <ColorfulCard isSquare />
      </section>
    </section>
  )
}

export default function SearchPage() {
  return <SearchLayout mainView={<View />} />
}
