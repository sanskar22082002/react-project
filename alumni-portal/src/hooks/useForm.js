import { useState, useCallback } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }, []);

  return [values, handleChange];
}

export default useForm;
