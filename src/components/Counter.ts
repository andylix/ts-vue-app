
import { h, FunctionalComponent, ref, EmitsOptions } from 'vue'

// type Props = Record<string, unknown>

// Counter.props = [ 'label' ]
export type Emits = { 'clicked': (prev: number) => void }

type Component = FunctionalComponent<{ count: number }, Emits>

const Counter: Component = function(props, context) {

  function onClick() {
    context.emit('clicked', props.count)
  }

  return h('div', [
    h('p', context.attrs, props.count),
    h('p',
      h('button', { onClick }, 'Add')
    ),
  ])
}

// Counter.emits = ['click']

export default Counter