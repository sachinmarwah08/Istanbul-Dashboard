import {
  CLOSE_CALENDER,
  RESET_FILTERS,
  SET_DROP_DATA,
  SET_FILTERS,
  TOGGLE_CALENDER,
  UPDATE_ALL_LOADERS_TRUE,
  UPDATE_LOADERS,
  SET_LOADERS,
} from "../actions/types";

// import moment from "moment/moment";

// const startOfMonth = moment().startOf("month").format("YYYY-MM-DD");
// const formatDate = moment().format("YYYY-MM-DD");

const filterReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          [payload.field]: payload.value,
        },
      };
    case SET_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          [payload.field]: payload.value,
        },
      };
    case SET_DROP_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          [payload.field]: payload.value,
        },
      };
    case TOGGLE_CALENDER:
      return {
        ...state,
        filters: {
          ...state.filters,
          calenderToggler: !state.filters.calenderToggler,
        },
      };
    case CLOSE_CALENDER:
      return {
        ...state,
        filters: {
          ...state.filters,
          calenderToggler: false,
        },
      };
    case RESET_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          influencerValue: "",
          hashtagValue: "",
          countryValue: "",
          calenderToggler: "",
          dateRangeValue: {
            fromDate: null,
            toDate: null,
          },
        },
        loaders: {
          ...state.loaders,
          countryLineChartLoading: true,
          mapChartGlobalLoading: true,
        },
        applyClicked: false,
      };
    case UPDATE_LOADERS:
      return {
        ...state,
        loaders: {
          ...state.loaders,
          [payload.field]: payload.value,
        },
      };
    case UPDATE_ALL_LOADERS_TRUE:
      return {
        ...state,
        loaders: {
          ...state.loaders,
          countryLineChartLoading: true,
          mapChartGlobalLoading: true,
        },
        applyClicked: true,
      };
    default:
      return state;
  }
};

export default filterReducer;
