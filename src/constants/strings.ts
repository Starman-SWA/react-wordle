export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['汝过强！', 'lang6 hiam2！']
export const GAME_COPIED_MESSAGE = '已复制到剪贴板'
export const ABOUT_GAME_MESSAGE = '关于潮图'
export const NOT_ENOUGH_LETTERS_MESSAGE = '毋到六个字母'
export const WORD_NOT_FOUND_MESSAGE = '觅无此个拼音'
export const CORRECT_WORD_MESSAGE = (solution: string, solutionChinese: string) =>
  `答案是 ${solution} ${solutionChinese}`
export const ENTER_TEXT = '确认'
export const DELETE_TEXT = '删除'
export const STATISTICS_TITLE = '统计数据'
export const GUESS_DISTRIBUTION_TEXT = '尝试次数分布'
export const NEW_WORD_TEXT = '下个题目'
export const SHARE_TEXT = '分享'
export const TOTAL_TRIES_TEXT = '总尝试次数'
export const SUCCESS_RATE_TEXT = '成功率'
export const CURRENT_STREAK_TEXT = '连赢局数'
export const BEST_STREAK_TEXT = '最长连赢'
export const GAME_LINK = 'diodou.cf'