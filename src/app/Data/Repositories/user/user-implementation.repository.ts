import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { UserModel } from '@Domain/model/user.model';
import { UserRepository } from '@Domain/repositories/user.repository';
import { UserImplementationRepositoryMapper } from './mappers/user-repository.mapper';
import { UserEntity } from './entities/user-entity';

@Injectable({
  providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {
  userMapper = new UserImplementationRepositoryMapper();
  constructor(private http: HttpClient) {
    super();
  }
  override login(params: {
    username: string;
    password: string;
  }): Observable<UserModel> {
    return this.http
      .post<UserEntity>('https://localhost:3000/login', { params })
      .pipe(map(this.userMapper.mapFrom));
  }
  override register(params: {
    phoneNum: string;
    password: string;
  }): Observable<UserModel> {
    return this.http
      .post<UserEntity>('https://localhost:3000/register', { params })
      .pipe(map(this.userMapper.mapFrom));
  }
  override getUserProfile(): Observable<UserModel> {
    return this.http
      .get<UserEntity>('https://localhost:3000/user')
      .pipe(map(this.userMapper.mapFrom));
  }
}
