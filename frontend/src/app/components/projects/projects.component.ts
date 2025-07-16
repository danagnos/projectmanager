import { Component, OnInit, inject } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgFor, NgIf, FormsModule],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {
  private fb = inject(FormBuilder);
  private projectService = inject(ProjectService);

  form: FormGroup;
  projects: Project[] = [];
  editingProjectId: string | null = null;
  loading = false;

  constructor() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

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
      error: () => this.loading = false
    });
  }

  onSubmit(): void {
    const projectData = this.form.value;

    if (this.editingProjectId) {
      this.projectService.updateProject(this.editingProjectId, projectData).subscribe({
        next: () => {
          this.editingProjectId = null;
          this.form.reset();
          this.loadProjects();
        }
      });
    } else {
      this.projectService.createProject(projectData).subscribe({
        next: () => {
          this.form.reset();
          this.loadProjects();
        }
      });
    }
  }

  edit(project: Project): void {
    this.form.patchValue(project);
    this.editingProjectId = project._id || null;
  }

  saveInline(project: Project): void {
    if (!project._id) return;

    this.projectService.updateProject(project._id, {
      title: project.title,
      description: project.description
    }).subscribe({
      next: () => {
        this.editingProjectId = null;
        this.loadProjects();
      }
    });
  }


  cancel(): void {
    this.editingProjectId = null;
    this.form.reset();
  }

  delete(id: string): void {
    if (confirm('Are you sure you want to delete this project?')) {
      this.projectService.deleteProject(id).subscribe(() => this.loadProjects());
    }
  }
}
