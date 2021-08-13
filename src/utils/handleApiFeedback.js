export const createObj = (keys) => {
  let obj = {}
  keys.forEach(key => {
    const keyObj = { status: null, message: null }
    obj = { ...obj, [key]: keyObj }
  })
  return obj;
}

export const insertErrosInFields = (apiFeedback, errors) => {
  const formFields = Object.getOwnPropertyNames(apiFeedback)
  const apiFieldNames = Object.getOwnPropertyNames(errors)
  
  formFields.forEach(item => {
    const hasError = apiFieldNames.find(err => err === item);

    hasError && 
      (apiFeedback = {
        ...apiFeedback,
        'form': { status: 'error' },
        [item]: { status: 'error', message: errors[item] }
      });
  });

  return apiFeedback;
}

export const resetObj = (apiFeedback) => {
  Object.keys(apiFeedback).forEach(item => {
    apiFeedback[item].status = null
    apiFeedback[item].message = null
  });
  return apiFeedback;
}

