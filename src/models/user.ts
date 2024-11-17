// src/models/User.ts

export type UserRoleType = 'superAdmin' | 'admin' | 'potentialPatient' | 'patient';

export class User {
  uid: string;
  email: string | null;

  name: string;
  surname: string;
  address?: string;
  profilePictureURL?: string; 
  profilePicturePath?: string;

  role: UserRoleType;

  createdAt: Date;
  lastOnline?: Date;

  lastSession?: Date;
  nextSession?: Date;
  numberOfSessions?: number;

  allowBookAppointment: boolean;

  constructor(params: {
    uid: string;
    email?: string | null;
    name: string;
    surname: string;
    role?: UserRoleType;
    createdAt?: Date;
    lastOnline?: Date;
    lastSession?: Date;
    nextSession?: Date;
    numberOfSessions?: number;
    address?: string;
    profilePictureURL?: string; 
    profilePicturePath?: string;
    allowBookAppointment: boolean;
  }) {
    this.uid = params.uid;
    this.email = params.email ?? null;
    this.name = params.name;
    this.surname = params.surname;
    this.role = params.role ?? 'potentialPatient';
    this.createdAt = params.createdAt ?? new Date();
    this.lastOnline = params.lastOnline ?? new Date();
    this.lastSession = params.lastSession ?? undefined;
    this.nextSession = params.nextSession ?? undefined;
    this.numberOfSessions = params.numberOfSessions ?? 0;
    this.address = params.address;
    this.profilePictureURL = params.profilePictureURL;
    this.profilePicturePath = params.profilePicturePath;
    this.allowBookAppointment = params.allowBookAppointment ?? false;
  }
}
