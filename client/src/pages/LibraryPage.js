import LibraryLayout from '../layouts/LibraryLayout'
import TopBar from '../components/Content/TopBar'

function View() {
  return (
    <section>
      <TopBar />
    </section>
  )
}

export default function CollectionPlaylistsPage() {
  return <LibraryLayout mainView={<View />} />
}
