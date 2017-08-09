export const openBottomList = () => (
  dispatch => {
    dispatch({ type: 'OPEN_BOTTOM_LIST'})
  }
)
export const closeBottomList = () => (
  dispatch => {
    dispatch({ type: 'CLOSE_BOTTOM_LIST'})
  }
)
