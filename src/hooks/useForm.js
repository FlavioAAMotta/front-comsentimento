import React, { useState } from "react";

const useForm = (initialState) => {
  
  const [form, setForm] = useState(initialState);


  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setForm({ ...form, [name]: value });
  };
  
  const onChangeFile = (event) => {
    const name = event.target.name;
    let fileuploaded = event.target.files[0] 
    let file = {file: fileuploaded}
    setForm({ ...form, [name]: file });
  }

  return { form, onChange, onChangeFile};


};

export default useForm;
