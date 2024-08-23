// src/hooks/useForm.js
import { useState, useCallback } from 'react';

function useForm(initialState = {}) {
  const [values, setValues] = useState(initialState);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  }, []);

  const resetForm = useCallback(() => {
    setValues(initialState);
  }, [initialState]);

  return [values, handleChange, resetForm];
}

export default useForm;
