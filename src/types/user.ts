
export type userRoleType = 'superAdmin' | "admin" | "potentialPatient" |'patient';


export type userType = {
  uid: string;
  email: string | null;

  name: string;
  surname: string;
  userType: userRoleType,

  createdAt: Date;
  lastVisit?: Date;
  numberOfSessions?: number;
  address?: string;
  profilePictureURL?: string; 
  profilePicturePath?: string;
};

