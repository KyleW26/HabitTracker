import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HabitsModule } from './habits/habits.module';
import { CompletionsModule } from './completions/completions.module';

@Module({
  imports: [AuthModule, UsersModule, HabitsModule, CompletionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
