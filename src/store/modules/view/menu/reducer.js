import produce from 'immer';
import { Types } from './actions';

const initialState = {
  companyAttr: {},
  sections: [],
  productSections: [],
  apiLoaded: false,
  notFound: false,
}

export default function menu(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.LOAD_COMPANY_SUCCESS: {
        const { data } = action.payload

        const { id } = data.data

        draft.companyAttr = { id, ...data.data.attributes }

        let sections = []

        data.included && (sections = data.included.filter(item => item.type === 'sections'))

        draft.sections = sections

        if(!sections.length) draft.apiLoaded = true
        break;
      }
      case Types.LOAD_COMPANY_FAILED: {
        draft.notFound = true
        
        draft.apiLoaded = true
        break;
      }
      case Types.ADD_PRODUCT_SECTION_IN_MENU: {
        const { section } = action.payload

        draft.productSections.push(section)

        draft.apiLoaded = true

        break;
      }
      default:
    }
  });
}
