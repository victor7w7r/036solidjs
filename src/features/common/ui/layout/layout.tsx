import { Header } from '@/common/ui/components'

const Layout: Component<Readonly<{ children?: JSX.Element }>> = props => (
  <main class='flex h-screen flex-col gap-8'>
    <Header />
    {props.children}
  </main>
)

export default Layout
