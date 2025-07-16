import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

export const AuthGuard: CanActivateFn = () => {
  const token = localStorage.getItem('token');
  return !!token;
};
