import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { AuthService } from './auth.service'; // ✅ Import this

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiUrl = 'http://localhost:5000/api/projects';

  constructor(
    private http: HttpClient,
    private authService: AuthService // ✅ Inject it here
  ) {}

  getProjects(): Observable<Project[]> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.authService.getToken()}`
    );
    return this.http.get<Project[]>(this.apiUrl, { headers });
  }

  createProject(project: Partial<Project>): Observable<Project> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.authService.getToken()}`
    );
    return this.http.post<Project>(this.apiUrl, project, { headers });
  }

  updateProject(id: string, project: Partial<Project>): Observable<Project> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.authService.getToken()}`
    );
    return this.http.put<Project>(`${this.apiUrl}/${id}`, project, { headers });
  }

  deleteProject(id: string): Observable<void> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.authService.getToken()}`
    );
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers });
  }
}
