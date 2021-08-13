import produce from 'immer';
import { Types } from './actions';
import { Types as SectionTypes } from '../sections/actions';

const initialState = {
  list: [],
  loadingList: false,
  listLoaded: false,
  apiFeedback: null
}

export default function productSections(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.CREATE_PRODUCT_REQUEST: {
        draft.apiFeedback = 'loading';
        break;
      }
      case Types.CREATE_PRODUCT_SUCCESS: {
        const { sectionId, product } = action.payload

        const { id } = product

        const { name, price, description, active, position, image } = product.attributes

        const newProduct = { id, name, price, description, active, position, image }

        const sectionIndex = draft.list.findIndex(section => section.id === sectionId)

        draft.list[sectionIndex].items.push(newProduct)

        draft.apiFeedback = 'success';
        break;
      }
      case Types.CREATE_PRODUCT_FAILED: {
        const { data } = action.payload.err.response

        draft.apiFeedback = data;
        break;
      }
      case Types.UPDATE_PRODUCT_REQUEST: {
        draft.apiFeedback = 'loading'
        break;
      }
      case Types.UPDATE_PRODUCT_SUCCESS: {
        const { sectionId, product } = action.payload

        const { id } = product

        const sectionIndex = draft.list.findIndex(section => section.id === sectionId)

        const productIndex = draft.list[sectionIndex].items.findIndex(product => product.id === id)

        draft.list[sectionIndex].items[productIndex] = product

        draft.apiFeedback = 'success'
        break;
      }
      case Types.UPDATE_PRODUCT_FAILED: {
        const { data } = action.payload.err.response
        draft.apiFeedback = data
        break;
      }
      case Types.UPDATE_PRODUCT_AND_CHANGE_SECTION_REQUEST: {
        draft.apiFeedback = 'loading'
        break;
      }
      case Types.UPDATE_PRODUCT_AND_CHANGE_SECTION_SUCCESS: {
        const { currentSectionId, newSectionId, product } = action.payload

        const { id, position } = product

        const currentSectionIndex = draft.list.findIndex(section => section.id === currentSectionId)

        const productIndex = draft.list[currentSectionIndex].items.findIndex(product => product.id === id)

        const newSectionIndex = draft.list.findIndex(section => section.id === newSectionId)

        draft.list[currentSectionIndex].items.splice(productIndex, 1)

        draft.list[newSectionIndex].items.splice(position, 0, product)

        draft.apiFeedback = 'success'
        break;
      }
      case Types.UPDATE_PRODUCT_AND_CHANGE_SECTION_FAILED: {
        const { data } = action.payload.err.response

        draft.apiFeedback = data
        break;
      }
      case Types.REMOVE_PRODUCT_REQUEST: {
        draft.apiFeedback = 'loading'
        break;
      }
      case Types.REMOVE_PRODUCT_SUCCESS: {
        const { sectionId, productId } = action.payload

        const sectionIndex = draft.list.findIndex(section => section.id === sectionId)

        const productIndex = draft.list[sectionIndex].items.findIndex(product => product.id === productId)

        draft.list[sectionIndex].items.splice(productIndex, 1)

        draft.apiFeedback = 'success'
        break;
      }
      case Types.REMOVE_PRODUCT_FAILED: {
        const { data } = action.payload.err.response

        draft.apiFeedback = data
        break;
      }
      case Types.UPDATE_PRODUCT_STATUS_REQUEST: {
        draft.apiFeedback = 'loading'
        break;
      }
      case Types.UPDATE_PRODUCT_STATUS_SUCCESS: {
        const { sectionId, productId, active } = action.payload

        const sectionIndex = draft.list.findIndex(section => section.id === sectionId)

        const productIndex = draft.list[sectionIndex].items.findIndex(product => product.id === productId)

        draft.list[sectionIndex].items[productIndex].active = active

        draft.apiFeedback = null
        break;
      }
      case Types.UPDATE_PRODUCT_STATUS_FAILED: {
        const { data } = action.payload.err.response

        draft.apiFeedback = data
        break;
      }
      case Types.LOAD_PRODUCT_SECTIONS_REQUEST: {
        draft.loadingList = true
        break;
      }
      case Types.LOAD_PRODUCT_SECTIONS_SUCCESS: {
        const { sections } = action.payload

        draft.list = sections

        draft.loadingList = false
        
        draft.listLoaded = true
        break;
      }
      case Types.UPDATE_PRODUCT_SECTION_POSITIONS: {
        const { sections } = action.payload

        draft.list = sections
        break;
      }
      case SectionTypes.CREATE_SECTION_SUCCESS: {
        const { section } = action.payload
                
        const { id } = section
        
        const { name, active } = section.attributes

        const newSection = { id, name, active, items: [] }

        draft.list.push(newSection)
        break;
      }
      case SectionTypes.UPDATE_SECTION_SUCCESS: {
        const { section } = action.payload
        
        const sectionId = section.id

        const { name } = section.attributes
        
        const sectionIndex = draft.list.findIndex(section => section.id === sectionId)

        draft.list[sectionIndex].name = name
        
        break;
      }
      case SectionTypes.REMOVE_SECTION_SUCCESS: {
        const { sectionId } = action.payload

        const sectionIndex = draft.list.findIndex(section => section.id === sectionId)

        if(sectionIndex !== -1) draft.list.splice(sectionIndex, 1)
        break;
      }
      case SectionTypes.LOAD_SECTIONS_SUCCESS: {
        const { sections } = action.payload

        // Secões de produtos carregada (já que não tem nehuma seção)
        if(!sections.length) draft.listLoaded = true
        break;
      }
      default:
    }
  });
}
