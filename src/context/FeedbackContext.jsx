import {v4 as uuidv4} from 'uuid';
import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'this item is from context 1',
      rating: 10
    },
    {
      id: 2,
      text: 'this item is from context 2',
      rating: 6
    },
    {
      id: 3,
      text: 'this item is from context 3',
      rating: 8
    },
    {
      id: 4,
      text: 'this item is from context 4',
      rating: 7
    },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  });

  //delete feedback
  const deleteFeedback = (id) => {
    if(window.confirm("Do you want to delete this feedback?")){
      setFeedback(feedback.filter((item)=> item.id !== id));
    }
  };

  //update feedback
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item)=>
    item.id===id ? {...item, ...updItem} : item
    ))
  }

  //addfeedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback,...feedback])
  };

  //set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit:true
    })
  }

  return (
    <FeedbackContext.Provider 
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
      }}
    >
    {children}
  </FeedbackContext.Provider>
  )
}

export default FeedbackContext