export interface AuthState {
  token: string | null;
  username: string | null;
  role: string | null;
}

export interface RegisterForm {
  firstName: string;
  email: string;
  password: string;
  phone: string;
}

export interface ResponseData {
  token: string;
  username: string;
  role: string;
}
