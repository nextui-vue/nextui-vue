import { useEventListener, type MaybeRefOrGetter } from "@vueuse/core";

const rippleElement = document.createElement('span')

function ripple(event: MouseEvent) {
  const target = event.currentTarget as HTMLElement;
  const { x, y, width, height } = target.getBoundingClientRect()
  const { clientX, clientY } = event

  const newElement = rippleElement.cloneNode() as HTMLSpanElement
  newElement.style.borderRadius = '50%'
  newElement.style.position = 'absolute'
  newElement.style.background = 'white'
  newElement.style.transform = `translate(-50%, -50%)`
  newElement.style.left = `${clientX - x}px`
  newElement.style.top = `${clientY - y}px`

  const radius = Math.round(Math.hypot(width, height)) * 2
  const animate = newElement.animate({
    opacity: [0.5, 0],
    width: ['0', `${radius}px`],
    height: ['0', `${radius}px`],
  }, {
    duration: 400,
    easing: 'ease-in',
    fill: 'forwards',
  })
  animate.addEventListener('finish', () => {
    target.removeChild(newElement)
  })
  target.appendChild(newElement)
}

export function useRipple(target: MaybeRefOrGetter<HTMLElement | null | undefined>) {
  useEventListener(target, 'click', ripple);
}

export default useRipple
