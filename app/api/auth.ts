export interface LoginResponse {
  token: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export const login = async ({ username, password }: LoginCredentials): Promise<LoginResponse> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BE_API_DEV}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  if (!response.ok) throw new Error("Network response was not ok");

  const data: LoginResponse = await response.json();
  if (!data.token) throw new Error("Login failed");

  return data;
};
