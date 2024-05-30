import { DataContext } from '@/common/ui/context/data-context'

export const State = () => {
  const { data } = useContext(DataContext)

  return (
    <Show
      fallback={<p class='adaptable-xl'>Store State: Not yet.</p>}
      when={data().length > 0}
    >
      <p class='adaptable-xl'>
        Store State: Yes, you write
        <b> {data()} </b>
      </p>
    </Show>
  )
}
