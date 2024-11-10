// src/models/User.ts

export type UserRoleType = 'superAdmin' | 'admin' | 'potentialPatient' | 'patient';

export class User {
  uid: string;
  email: string | null;

  name: string;
  surname: string;
  role: UserRoleType;

  createdAt: Date;
  lastVisit?: Date;
  numberOfSessions?: number;
  address?: string;
  profilePictureURL?: string; 
  profilePicturePath?: string;

  constructor(params: {
    uid: string;
    email?: string | null;
    name: string;
    surname: string;
    role?: UserRoleType;
    createdAt?: Date;
    lastVisit?: Date;
    numberOfSessions?: number;
    address?: string;
    profilePictureURL?: string; 
    profilePicturePath?: string;
  }) {
    this.uid = params.uid;
    this.email = params.email ?? null;
    this.name = params.name;
    this.surname = params.surname;
    this.role = params.role ?? 'potentialPatient';
    this.createdAt = params.createdAt ?? new Date();
    this.lastVisit = params.lastVisit ?? new Date();
    this.numberOfSessions = params.numberOfSessions ?? 0;
    this.address = params.address;
    this.profilePictureURL = params.profilePictureURL;
    this.profilePicturePath = params.profilePicturePath;
  }
}
