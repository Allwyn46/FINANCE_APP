import api from "./api";

interface RegisterParams {
  username: string;
  password: string;
}

export const register = async ({ username, password }: RegisterParams) => {
  return await api.post("/auth/register", {
    username,
    password,
  });
};

export const loginUser = async ({ username, password }: RegisterParams) => {
  return await api.post(
    "/auth/login",
    {
      username,
      password,
    },
    {
      withCredentials: true,
    },
  );
};

export const authStatus = async () => {
  return await api.get("/auth/auth-status", {
    withCredentials: true,
  });
};

export const logoutUser = async () => {
  return await api.post(
    "/auth/logout",
    {},
    {
      withCredentials: true,
    },
  );
};

export const setup2FA = async () => {
  return await api.post(
    "/auth/2fa/setup",
    {},
    {
      withCredentials: true,
    },
  );
};

export const verify2fa = async (token: string) => {
  return await api.post(
    "/auth/2fa/verify",
    { token },
    {
      withCredentials: true,
    },
  );
};

export const reset2fa = async () => {
  return await api.post(
    "/auth/2fa/reset",
    {},
    {
      withCredentials: true,
    },
  );
};
