import produce from 'immer';
import { Types } from './actions';

const initialState = {
  sections: [],
  productSections: [],
  apiLoaded: false,
}

export default function menuPreview(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.LOAD_COMPANY_SUCCESS: {
        const { data } = action.payload

        const sections = data.included.filter(item => item.type === 'sections')

        draft.sections = sections
        break;
      }
      case Types.LOAD_PRODUCT_SECTIONS_SUCCESS: {
        const { sections } = action.payload

        draft.productSections = sections
        
        draft.apiLoaded = true
      }
      default:
    }
  });
}
