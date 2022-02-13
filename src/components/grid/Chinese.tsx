import { getChinese, getPinyin } from "../../lib/words"

type Props = {
    guess:string
}

export const Chinese = ({guess}:Props) => {
    const chinese = getChinese(guess)
    const pinyin = getPinyin(guess)

    return (<p className="text-sm text-gray-500 dark:text-gray-300 flex justify-center mb-1 w-14 h-14">{chinese}<br />
      {pinyin}<br /></p>);
}