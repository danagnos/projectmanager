import { Component, OnInit } from '@angular/core';
import { ProjectService} from '../../services/project.service';
import { Project} from '../../models/project.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  imports: [CommonModule, FormsModule]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  loading: boolean = false;
  showCreateForm: boolean = false;
  newProject: Partial<Project> = {
    title: '',
    description: ''
  };
  editProject: Project | null = null;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.loading = true;
    this.projectService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  createProject(): void {
    if (!this.newProject.title || !this.newProject.description) return;

    this.projectService.createProject(this.newProject).subscribe({
      next: (project) => {
        this.projects.push(project);
        this.newProject = { title: '', description: '' };
        this.showCreateForm = false;
      }
    });
  }

  deleteProject(id: string | undefined): void {
    if (!id) return;
    this.projectService.deleteProject(id).subscribe({
      next: () => {
        this.projects = this.projects.filter(p => p._id !== id);
      }
    });
  }

  selectProject(project: Project): void {
    this.editProject = { ...project };
  }

  updateProject(): void {
    if (!this.editProject?._id) return;

    this.projectService.updateProject(this.editProject._id, this.editProject).subscribe({
      next: (updatedProject) => {
        const index = this.projects.findIndex(p => p._id === updatedProject._id);
        if (index !== -1) this.projects[index] = updatedProject;
        this.editProject = null;
      }
    });
  }
}
