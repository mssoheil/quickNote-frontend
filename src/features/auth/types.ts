export interface RegisterUserRequestDto {
  email: string;
  password: string;
}

export interface GetMeResponseDto {
  payload: {
    id: string;
    email: string;
  };
}
