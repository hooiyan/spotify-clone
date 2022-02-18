import BasicLayout from '../layouts/BasicLayout'
import TopGradient from '../components/Content/TopGradient'
import TopBar from '../components/Content/TopBar'
import ShortcutCard from '../components/Content/Card/ShortcutCard'
import CardGroup from '../components/Content/CardGroup'
import BasicCard from '../components/Content/Card/BasicCard'
import HeadingGroup from '../components/Content/HeadingGroup'

function View() {
  return (
    <>
      <TopGradient>
        <TopBar />
        <h1 className='px-8 text-5xl font-bold mb-16'>Good evening</h1>
        <section className='grid gap-8 grid-flow-col grid-rows-2 grid-cols-4 px-8'>
          <ShortcutCard
            src='https://picsum.photos/200?random=1'
            title='lofi hip hop music - beats to relax/study to'
          />
          <ShortcutCard src='https://picsum.photos/200?random=2' title='Now' />
          <ShortcutCard
            src='https://picsum.photos/200?random=3'
            title='Music'
          />
          <ShortcutCard
            src='https://picsum.photos/200?random=4'
            title='Haunting Vocals'
          />
          <ShortcutCard
            src='https://picsum.photos/200?random=5'
            title='Discover Weekly'
          />
          <ShortcutCard
            src='https://picsum.photos/200?random=6'
            title='Others'
          />
          <ShortcutCard
            src='https://picsum.photos/200?random=7'
            title='English'
          />
          <ShortcutCard src='https://picsum.photos/200?random=8' title='EDM' />
        </section>
      </TopGradient>
      <HeadingGroup isHome title='Recently played' />
      <CardGroup>
        <BasicCard
          src='https://picsum.photos/200?random=9'
          title='lofi hip hop music - beats to relax/study to'
          desc='A daily selection of chill beats - perfect to help you relax & study'
        />
        <BasicCard
          src='https://picsum.photos/200?random=10'
          title='kpop | jpop'
          owner='HooiYan Hoe'
        />
        <BasicCard
          src='https://picsum.photos/200?random=11'
          title='Chinese'
          owner='HooiYan Hoe'
        />
        <BasicCard
          src='https://picsum.photos/200?random=12'
          title='English'
          owner='HooiYan Hoe'
        />
        <BasicCard
          src='https://picsum.photos/200?random=13'
          title='Fahrenheit'
          owner='HooiYan Hoe'
        />
      </CardGroup>
      <HeadingGroup isHome title='Your playlists' />
      <CardGroup>
        <BasicCard
          src='https://picsum.photos/200?random=14'
          title='The School of Greatness'
          owner='Lewis Howes'
        />
        <BasicCard
          src='https://picsum.photos/200?random=15'
          title='The School of Greatness'
          owner='Lewis Howes'
        />
        <BasicCard
          src='https://picsum.photos/200?random=16'
          title='常勇'
          owner='Artist'
        />
        <BasicCard
          src='https://picsum.photos/200?random=17'
          title='English'
          owner='Jachin Lim'
        />
        <BasicCard
          src='https://picsum.photos/200?random=18'
          title='Awesome God'
          owner='HooiYan Hoe'
        />
      </CardGroup>
      <HeadingGroup isHome title='Your playlists' />
      <CardGroup>
        <BasicCard
          src='https://picsum.photos/200?random=14'
          title='The School of Greatness'
          owner='Lewis Howes'
        />
        <BasicCard
          src='https://picsum.photos/200?random=15'
          title='The School of Greatness'
          owner='Lewis Howes'
        />
        <BasicCard
          src='https://picsum.photos/200?random=16'
          title='常勇'
          owner='Artist'
        />
        <BasicCard
          src='https://picsum.photos/200?random=17'
          title='English'
          owner='Jachin Lim'
        />
        <BasicCard
          src='https://picsum.photos/200?random=18'
          title='Awesome God'
          owner='HooiYan Hoe'
        />
      </CardGroup>
      <HeadingGroup isHome title='Your playlists' />
      <CardGroup>
        <BasicCard
          src='https://picsum.photos/200?random=14'
          title='The School of Greatness'
          owner='Lewis Howes'
        />
        <BasicCard
          src='https://picsum.photos/200?random=15'
          title='The School of Greatness'
          owner='Lewis Howes'
        />
        <BasicCard
          src='https://picsum.photos/200?random=16'
          title='常勇'
          owner='Artist'
        />
        <BasicCard
          src='https://picsum.photos/200?random=17'
          title='English'
          owner='Jachin Lim'
        />
        <BasicCard
          src='https://picsum.photos/200?random=18'
          title='Awesome God'
          owner='HooiYan Hoe'
        />
      </CardGroup>
      <HeadingGroup isHome title='Your playlists' />
      <CardGroup>
        <BasicCard
          src='https://picsum.photos/200?random=14'
          title='The School of Greatness'
          owner='Lewis Howes'
        />
        <BasicCard
          src='https://picsum.photos/200?random=15'
          title='The School of Greatness'
          owner='Lewis Howes'
        />
        <BasicCard
          src='https://picsum.photos/200?random=16'
          title='常勇'
          owner='Artist'
        />
        <BasicCard
          src='https://picsum.photos/200?random=17'
          title='English'
          owner='Jachin Lim'
        />
        <BasicCard
          src='https://picsum.photos/200?random=18'
          title='Awesome God'
          owner='HooiYan Hoe'
        />
      </CardGroup>
    </>
  )
}

export default function HomePage() {
  return <BasicLayout mainView={<View />} />
}
