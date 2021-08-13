export const Types = {
  LOAD_SECTIONS_REQUEST: '@sections/LOAD_SECTIONS_REQUEST',
  LOAD_SECTIONS_SUCCESS: '@sections/LOAD_SECTIONS_SUCCESS',
  LOAD_SECTIONS_FAILED: '@sections/LOAD_SECTIONS_FAILED',

  CREATE_SECTION_REQUEST: '@sections/CREATE_SECTION_REQUEST',
  CREATE_SECTION_SUCCESS: '@sections/CREATE_SECTION_SUCCESS',
  CREATE_SECTION_FAILED: '@sections/CREATE_SECTION_FAILED',

  UPDATE_SECTION_REQUEST: '@sections/UPDATE_SECTION_REQUEST',
  UPDATE_SECTION_SUCCESS: '@sections/UPDATE_SECTION_SUCCESS',
  UPDATE_SECTION_FAILED: '@sections/UPDATE_SECTION_FAILED',
  
  UPDATE_SECTION_STATUS_REQUEST: '@sections/UPDATE_SECTION_STATUS_REQUEST',
  UPDATE_SECTION_STATUS_SUCCESS: '@sections/UPDATE_SECTION_STATUS_SUCCESS',
  UPDATE_SECTION_STATUS_FAILED: '@sections/UPDATE_SECTION_STATUS_FAILED',

  REMOVE_SECTION_REQUEST: '@sections/REMOVE_SECTION_REQUEST',
  REMOVE_SECTION_SUCCESS: '@sections/REMOVE_SECTION_SUCCESS',
  REMOVE_SECTION_FAILED: '@sections/REMOVE_SECTION_FAILED',

  SORT_SECTIONS_REQUEST: '@sections/SORT_SECTIONS_REQUEST',
  SORT_SECTIONS_SUCCESS: '@sections/SORT_SECTIONS_SUCCESS',
  SORT_SECTIONS_FAILED: '@sections/SORT_SECTIONS_FAILED',

  RESET_API_FEEDBACK: '@sections/RESET_API_FEEDBACK'
}

export const Actions = {

  loadSectionsRequest: (companyId) => ({
    type: Types.LOAD_SECTIONS_REQUEST,
    payload: { companyId }
  }),

  loadSectionsSuccess: (sections) => ({
    type: Types.LOAD_SECTIONS_SUCCESS,
    payload: { sections }
  }),

  loadSectionsFailed: (err) => ({
    type: Types.LOAD_SECTIONS_FAILED,
    payload: { err }
  }),



  createSectionRequest: (companyId, section) => ({
    type: Types.CREATE_SECTION_REQUEST,
    payload: { companyId, section }
  }),

  createSectionSuccess: (section) => ({
    type: Types.CREATE_SECTION_SUCCESS,
    payload: { section }
  }),

  createSectionFailed: (err) => ({
    type: Types.CREATE_SECTION_FAILED,
    payload: { err }
  }),



  updateSectionRequest: (companyId, section) => ({
    type: Types.UPDATE_SECTION_REQUEST,
    payload: { companyId, section }
  }),

  updateSectionSuccess: (section) => ({
    type: Types.UPDATE_SECTION_SUCCESS,
    payload: { section }
  }),

  updateSectionFailed: (err) => ({
    type: Types.UPDATE_SECTION_FAILED,
    payload: { err }
  }),



  updateSectionStatusRequest: (companyId, section) => ({
    type: Types.UPDATE_SECTION_STATUS_REQUEST,
    payload: { companyId, section }
  }),

  updateSectionStatusSuccess: (section) => ({
    type: Types.UPDATE_SECTION_STATUS_SUCCESS,
    payload: { section }
  }),

  updateSectionStatusFailed: (err) => ({
    type: Types.UPDATE_SECTION_STATUS_FAILED,
    payload: { err }
  }),



  removeSectionRequest: (companyId, sectionId) => ({
    type: Types.REMOVE_SECTION_REQUEST,
    payload: { companyId, sectionId }
  }),

  removeSectionSuccess: (sectionId) => ({
    type: Types.REMOVE_SECTION_SUCCESS,
    payload: { sectionId }
  }),

  removeSectionFailed: (err) => ({
    type: Types.REMOVE_SECTION_FAILED,
    payload: { err }
  }),


  sortSectionsRequest: (companyId) => ({
    type: Types.SORT_SECTIONS_REQUEST,
    payload: { companyId }
  }),

  sortSectionsSuccess: () => ({
    type: Types.SORT_SECTIONS_SUCCESS
  }),

  sortSectionsFailed: (err) => ({
    type: Types.SORT_SECTIONS_FAILED,
    payload: { err }
  }),


  resetApiFeedback: () => ({
    type: Types.RESET_API_FEEDBACK
  })
}