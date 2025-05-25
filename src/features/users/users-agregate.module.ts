import { Module } from '@nestjs/common';
import { UserModule } from './module/user.module';
import { AdminModule } from './module/admin.module';
import { TeacherModule } from './module/teacher.module';
import { StudentModule } from './module/student.module';

@Module({
  imports: [UserModule, AdminModule, TeacherModule, StudentModule],
})
export class UsersAgregateModule {}
