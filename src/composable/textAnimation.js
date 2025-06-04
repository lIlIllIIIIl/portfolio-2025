import { gsap } from 'gsap'

import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import Splitting from 'splitting'

function titleAnimation(title) {
  const titleSplit = Splitting({
    target: title,
    by: 'chars',
  })

  const chars = titleSplit[0]['chars']

  chars.forEach((char) => {
    const charIndex = getComputedStyle(char).getPropertyValue('--char-index')
    gsap
      .timeline()
      .set(char, {
        y: `${100 + charIndex * 10}%`,
      })
      .to(
        char,
        {
          duration: 0.8,
          ease: 'power4.out',
          y: '0%',
        },
        0.2,
      )
  })
}

function paragraphAnimation(paragraph) {
  const paragraphSplit = Splitting({
    target: paragraph,
    by: 'lines',
  })

  const words = paragraphSplit[0]['words']

  const len = paragraphSplit[0]['lines'].length

  words.forEach((word) => {
    const lineNum = getComputedStyle(word).getPropertyValue('--line-index')
    gsap
      .timeline()
      .set(
        word,
        {
          opacity: 0,
          y: `${(len + 1) * 50 + lineNum * 50}%`,
        },
        'switchtime',
      )
      .to(
        word,
        {
          duration: 1,
          opacity: 1,
          ease: 'power3.out',
          y: '0%',
        },
        `<${1 + lineNum * 0.17})`,
      )
  })
}

export { titleAnimation, paragraphAnimation }
