export default function buttonReducer(
  state = { buttonClicked: false, buttonColor: "white", titleColor: "black" },
  action
) {
  switch (action.type) {
    case "CHANGE_BUTTON_COLOR":
      if (action.color) {
        return {
          ...state,
          buttonColor: action.color,
        };
      }

      switch (action.type) {
        case "CHANGE_TITLE_COLOR":
          if (action.color) {
            return {
              ...state,
              titleColor: action.titleColor,
            };
          }
          break;
        default:
          return state;
      }
      break;
    default:
      return state;
  }
}
