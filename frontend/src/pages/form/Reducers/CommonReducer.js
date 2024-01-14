const commonReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return { ...state, [action.payload.field]: action.payload.value };
    case 'UPLOAD_FILE':
      return { ...state, [action.payload.field]: action.payload.file };
    default:
      return state;
  }
};

export default commonReducer;
  