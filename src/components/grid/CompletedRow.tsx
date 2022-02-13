import { getGuessStatuses } from '../../lib/statuses'
import { getChinese, getPinyin } from '../../lib/words'
import { Cell } from './Cell'

type Props = {
  guess: string
  isRevealing?: boolean
}

export const CompletedRow = ({ guess, isRevealing }: Props) => {
  const statuses = getGuessStatuses(guess)
  const chinese = getChinese(guess)
  const pinyin = getPinyin(guess)

  return (
    <div className="flex justify-center mb-1">
      {guess.split('').map((letter, i) => (
        <Cell
          key={i}
          value={letter}
          status={statuses[i]}
          position={i}
          isRevealing={isRevealing}
          isCompleted
        />
      ))}
      <p className="text-sm text-gray-500 dark:text-gray-300 flex justify-left mb-1 w-20">{chinese}<br />
      {pinyin}<br /></p>
    </div>
  )
}
