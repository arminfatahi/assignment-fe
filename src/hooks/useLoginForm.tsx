import { useState } from "react";
import { useFormInput } from "./useFormInput";
import { useAuth } from "@/context/AuthContext";

export function useLoginForm() {
  const { login } = useAuth();
  const email = useFormInput("");
  const password = useFormInput("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const success = await login(email.value, password.value);
    if (!success) {
      password.setHelperText("*email or pass might be incorrect");
    }

    setIsLoading(false);
  };

  return {
    email,
    password,
    isLoading,
    handleSubmit,
  };
}
