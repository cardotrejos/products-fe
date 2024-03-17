import Cookies from "js-cookie";

export const fetchWithToken = async (
  url: string,
  options: RequestInit = {}
) => {
  const token = Cookies.get("token");
  if (!token) throw new Error("No token provided");

  const defaultHeaders = {
    Authorization: token,
    ...options.headers,
  };

  const response = await fetch(url, { ...options, headers: defaultHeaders });
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};
