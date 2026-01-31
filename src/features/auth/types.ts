export interface RegisterUserRequestDto {
  email: string;
  password: string;
}
export interface LoginUserRequestDto extends RegisterUserRequestDto

export interface GetMeResponseDto {
  payload: {
    id: string;
    email: string;
  };
}
