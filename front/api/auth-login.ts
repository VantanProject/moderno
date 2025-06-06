import axios from "axios";

export type AuthLoginRequest = {
  auth: {
    email: string;
    password: string;
  };
};

export type AuthLoginResponse = {
  success: boolean;
  messages: string[];
  authToken: string;
};

export async function AuthLogin({
  auth,
}: AuthLoginRequest): Promise<AuthLoginResponse> {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth/login`;

  return axios
    .post<AuthLoginResponse>(apiUrl, {
      auth,
    })
    .then((res) => res.data)
    .catch((err) => {
      return {
        success: false,
        messages: err.response?.data.messages || ["エラーが発生しました"],
        authToken: "",
      };
    });
}
