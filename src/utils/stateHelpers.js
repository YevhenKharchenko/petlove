export function handleRefreshing(state) {
  state.isRefreshing = true;
  state.error = null;
}

export function handleError(state, action) {
  state.isRefreshing = false;
  state.error = action.payload;
}
