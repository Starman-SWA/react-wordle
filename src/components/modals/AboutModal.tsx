import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="关于" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Wordle开源模板：
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >react-wordle
        </a>
        <br/>
        词库：
        <a
          href="https://github.com/ciskonc/diosuasediang"
          className="underline font-bold"
        >diosuasediang
        </a>
        <br/>
        联系作者：
        <a href = "mailto: zhengchenswa@foxmail.com" className="underline font-bold">
        zhengchenswa@foxmail.com
        </a>
      </p>
    </BaseModal>
  )
}
