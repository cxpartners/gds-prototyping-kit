export const TOGGLE_ACCORDION = 'TOGGLE_ACCORDION';
export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';
export const TOGGLE_RADIO_ERROR = 'TOGGLE_RADIO_ERROR';
export const TOGGLE_REDIRECT_RADIO = 'TOGGLE_REDIRECT_RADIO';
export const TOGGLE_REDIRECT_YOUR_NAME = 'TOGGLE_REDIRECT_YOUR_NAME';
export const TOGGLE_YOUR_NAME_ERROR = 'TOGGLE_YOUR_NAME_ERROR';
export const UPDATE_RADIO = 'UPDATE_RADIO';
export const UPDATE_YOUR_NAME = 'UPDATE_YOUR_NAME';

const initialState = {
  radioValue: '',
  radioError: false,
  radioRedirect: false,
  showAccordion: false,
  checkboxChecked: false,
  yourNameValue: '',
  yourNameError: false,
  yourNameRedirect: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_YOUR_NAME:
      return {
        ...state,
        yourNameValue: action.payload,
      };
    case TOGGLE_ACCORDION:
      return {
        ...state,
        showAccordion: !state.showAccordion,
      };
    case TOGGLE_CHECKBOX:
      return {
        ...state,
        checkboxChecked: !state.checkboxChecked,
      };
    case TOGGLE_YOUR_NAME_ERROR:
      return {
        ...state,
        yourNameError: !state.yourNameError,
      };
    case UPDATE_RADIO:
      return {
        ...state,
        radioValue: action.payload,
      };
    case TOGGLE_RADIO_ERROR:
      return {
        ...state,
        radioError: !state.radioError,
      };
    default:
      return state;
  }
};


export const toggleAccordion = () => (dispatch) => {
  dispatch({ type: TOGGLE_ACCORDION });
};

export const toggleCheckbox = () => (dispatch) => {
  dispatch({ type: TOGGLE_CHECKBOX });
};

export const toggleRadioError = () => (dispatch) => {
  dispatch({ type: TOGGLE_RADIO_ERROR });
};

export const toggleYourNameError = () => (dispatch) => {
  dispatch({ type: TOGGLE_YOUR_NAME_ERROR });
};

export const updateRadio = () => (dispatch) => {
  dispatch({ type: UPDATE_RADIO });
};

export const updateYourName = () => (dispatch) => {
  dispatch({ type: UPDATE_YOUR_NAME });
};
