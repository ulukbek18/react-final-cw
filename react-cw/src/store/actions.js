export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_USERNAME='ADD_USERNAME'

export const addQuestion = (question) => ({
  type: ADD_QUESTION,
  payload: question
})

export const addUsername = (username) => ({
    type: ADD_USERNAME,
    payload: username
  })