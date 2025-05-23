export class StudentEntity {
  id: number;
  fullName: string;
  motivation: string;
  userId?: number;
  levelId: number;
  classId: number;
  enrollmentId: number;
  studentStatusId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  updatedBy?: number;
  createdBy?: number;
}
