export interface User {
  message:string;
  username:string;
  email:string;
  full_name:string;
  token:string;
}
export interface userState{
  data:User;
  loading:boolean;
  error:string;
}

interface LOGIN_START {           //user giriş yaparken oluşturacağımız dispatch'lerin type oluşturuyoruz.

  type:"LOGIN_START";


}
interface LOGIN_SUCCESS{
  type:"LOGIN_SUCCESS"
  payload:User; //başarılı bir şekilde giriş yapıldığında payload olarak user gödnermek istiyorum.
}

interface LOGIN_ERROR{
  type:"LOGIN_ERROR";
}

export type UserAction = LOGIN_START | LOGIN_SUCCESS | LOGIN_ERROR;   //dispatch edilecek actionlar bu 3 taneden biri olabilir.