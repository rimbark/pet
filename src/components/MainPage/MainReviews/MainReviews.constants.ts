export const autoComment = (
  commentsCount: number,
  totalCommentsCount: number
) => {
  return {
    id: commentsCount + 1,
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRToFnkKM_pXxtsqmzUqSSE_EPeq_VayfAbvw&usqp=CAU',
    name: 'Vitek' + totalCommentsCount + 1,
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  }
}
