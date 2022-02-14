import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="怎然耍zo3 ni5 seng2" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        你有六次机会来猜出一个<a href="https://baike.baidu.com/item/%E6%BD%AE%E5%B7%9E%E8%AF%9D%E6%8B%BC%E9%9F%B3%E6%96%B9%E6%A1%88/2344643" target="_blank"  rel="noreferrer"><b><ins>潮州话拼音</ins></b></a>。当输入一个正确的拼写之后，方格会显示为下列三种颜色之一，来提示答案。请使用<b>汕头音</b>作答。
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="L" status="correct" />
        <Cell value="O" />
        <Cell value="H" />
        <Cell value="H" />
        <Cell value="O" />
        <Cell value="U" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        答案中含有字母L，且位置正确。
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="A" />
        <Cell value="H" status="present" />
        <Cell value="D" />
        <Cell value="Ê" />
        <Cell value="G" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        答案中含有字母H，但位置错误。
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" />
        <Cell value="I" />
        <Cell value="B" />
        <Cell value="S" status="absent" />
        <Cell value="O" />
        <Cell value="G" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        答案中不含字母S。
      </p>
    </BaseModal>
  )
}
