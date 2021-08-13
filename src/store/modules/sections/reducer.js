import produce from 'immer';
import { Types } from './actions';

const initialState = {
  list: [],
  loadingList: false,
  listLoaded: false,
  apiFeedback: null,
}

export default function sections(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.LOAD_SECTIONS_REQUEST: {
        draft.loadingList = true
        break;
      }
      case Types.LOAD_SECTIONS_SUCCESS: {
        const { sections } = action.payload

        draft.list = sections

        draft.loadingList = false

        draft.listLoaded = true
        break;
      }
      case Types.LOAD_SECTIONS_FAILED: {
        draft.loadingList = false

        draft.listLoaded = false
        break;
      }
      case Types.CREATE_SECTION_REQUEST: {
        draft.apiFeedback = 'loading';
        break;
      }
      case Types.CREATE_SECTION_SUCCESS: {
        const { section } = action.payload

        draft.list.push(section)

        draft.apiFeedback = 'success';
        break;
      }
      case Types.CREATE_SECTION_FAILED: {
        const { data } = action.payload.err.response

        draft.apiFeedback = data;
        break;
      }
      case Types.UPDATE_SECTION_REQUEST: {
        draft.apiFeedback = 'loading'
        break;
      }
      case Types.UPDATE_SECTION_SUCCESS: {
        const { section } = action.payload
        const { id } = section

        const sectionIndex = draft.list.findIndex(section => section.id === id)

        draft.list[sectionIndex] = section

        draft.apiFeedback = 'success'
        break;
      }
      case Types.UPDATE_SECTION_FAILED: {
        const { data } = action.payload.err.response
        draft.apiFeedback = data
        break;
      }
      case Types.UPDATE_SECTION_STATUS_REQUEST: {
        draft.apiFeedback = 'loading'

        break;
      }
      case Types.UPDATE_SECTION_STATUS_SUCCESS: {
        const { section } = action.payload
        
        const { id } = section

        const { active } = section.attributes

        const sectionIndex = draft.list.findIndex(section => section.id === id)
        
        draft.list[sectionIndex].attributes.active = active

        draft.apiFeedback = 'success' 
        break;
      }
      case Types.UPDATE_SECTION_STATUS_FAILED: {
        const { data } = action.payload.err.response

        draft.apiFeedback = data        
        break;
      }
      case Types.REMOVE_SECTION_REQUEST: {
        draft.apiFeedback = 'loading'
        break;
      }
      case Types.REMOVE_SECTION_SUCCESS: {
        const { sectionId } = action.payload

        const sectionIndex = draft.list.findIndex(section => section.id === sectionId)

        if(sectionIndex !== -1) draft.list.splice(sectionIndex, 1)

        draft.apiFeedback = 'success'
        break;
      }
      case Types.REMOVE_SECTION_FAILED: {
        const { data } = action.payload.err.response
        draft.apiFeedback = data
        break;
      }
      case Types.RESET_API_FEEDBACK: {
        draft.apiFeedback = null
        break;
      }
      default:
    }
  });
}
