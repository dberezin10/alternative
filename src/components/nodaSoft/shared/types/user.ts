type TUserAddressGeo = {
  lat: string;
  lng: string;
};

type TUserAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: TUserAddressGeo;
};

type TUserCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: TUserAddress;
  phone: string;
  website: string;
  company: TUserCompany;
};
