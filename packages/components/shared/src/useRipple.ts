import { onBeforeMount, ref } from 'vue'
import { type MaybeRefOrGetter, useEventListener } from '@vueuse/core'

const rippleElement = ref()

function setCSSStyle(el: HTMLElement, style: CSSStyleDeclaration) {
  for (const [key, value] of Object.entries(style)) {
    el.style[key as any] = value
  }
}

function ripple(event: MouseEvent) {
  const target = event.currentTarget as HTMLElement
  const { x, y, width, height } = target.getBoundingClientRect()
  const { clientX, clientY } = event

  const newElement = rippleElement.value?.cloneNode() as HTMLSpanElement
  const style = {
    position: 'absolute',
    left: `${clientX - x}px`,
    top: `${clientY - y}px`,
    borderRadius: '50%',
    background: 'white',
    transform: `translate(-50%, -50%)`,
    pointerEvents: 'none',
  } as CSSStyleDeclaration

  setCSSStyle(newElement, style)

  const radius = Math.round(Math.hypot(width, height)) * 2
  const animate = newElement.animate(
    {
      opacity: [0.5, 0],
      width: ['0', `${radius}px`],
      height: ['0', `${radius}px`],
    },
    {
      duration: 450,
      easing: 'ease-in',
      fill: 'forwards',
    },
  )
  animate.addEventListener('finish', () => {
    target.removeChild(newElement)
  })
  target.appendChild(newElement)
}

export function useRipple(
  target: MaybeRefOrGetter<HTMLElement | null | undefined>,
) {
  onBeforeMount(() => {
    rippleElement.value = document.createElement('span')
  })
  useEventListener(target, 'click', ripple)
}

export default useRipple
