import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import { LoginCredentials, LoginResponse, login as loginApi } from "../api/auth";
import { useRouter } from "next/navigation";

const useLogin = () => {
  const router = useRouter();
  const mutation = useMutation<LoginResponse, Error, LoginCredentials>(
    {
      mutationFn: loginApi,
      onSuccess: (data: { token: string }) => {
        Cookies.set("token", data.token);
        router.push("/products");
      },
    }
  );

  return {
    isLoading: mutation.isPending,
    error: mutation.error,
    login: (data: LoginCredentials) => mutation.mutate(data),
  };
};

export default useLogin;