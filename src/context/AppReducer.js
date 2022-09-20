export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_FAVOURITE":
      return {
        ...state,
        favourite: [action.payload, ...state.favourite],
      };
    case "ADD_PRODUCT_TO_CART":
      return {
        ...state,
        cart: [{ ...action.payload, qty: 1 }, ...state.cart],
        // cart: [action.payload, ...state.cart],
      };
    case "REMOVE_PRODUCT_FROM_FAVOURITE":
      return {
        ...state,
        favourite: state.favourite.filter((item) => item.id !== action.payload),
      };
    case "REMOVE_PRODUCT_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "CHANGE_PRODUCT_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };

    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched: [action.payload, ...state.watched],
      };
    case "MOVE_TO_WATCHLIST":
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };

    default:
      return state;
  }
};
