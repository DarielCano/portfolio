import { useState } from "react";

const useForm = (initialForm = {}) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setForm({ ...form, [name]: value });
  };

  return { form, handleChange, setForm };
};

export default useForm;
