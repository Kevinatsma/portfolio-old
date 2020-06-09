import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects$: Observable<Project[]>;
  projectCol: AngularFirestoreCollection<Project>;
  notification$: Subject<any> = new Subject();

  constructor(private afs: AngularFirestore) {
    this.projectCol = this.afs.collection<Project>('projects');
  }

  addProject(data: Project) {
    this.projectCol.add(data);
  }

  getAllProjects(): Observable<Project[]> {
    return this.projectCol.valueChanges();
  }
}
