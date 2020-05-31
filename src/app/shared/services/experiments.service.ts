import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Experiment } from '../models/experiment.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ExperimentsService {
  experiments$: Observable<Experiment[]>;
  experimentDoc: AngularFirestoreDocument<Experiment>;
  experimentCol: AngularFirestoreCollection<Experiment>;

  constructor(
    private afs: AngularFirestore,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.experimentCol = this.afs.collection<Experiment>('experiments');
  }

  addExperiment(data: Experiment) {
    this.experimentCol.add(data)
      .then(result => {
        console.log(result);
        data.id = result.id;
        this.updateExperiment(result.id, data);
      })
      .then(() => {
        const message = `Experiment: ${data.title} was added succesfully`;
        const action = 'Close';

        this.snackBar.open(message, action, {
          duration: 5000,
          panelClass: ['success-snackbar']
        });
      })
      .then(() => {
        this.dialog.closeAll();
      })
      .catch(error => {
        alert(error.message);
      });
  }

  updateExperiment(id: string, data: Experiment) {
    this.experimentDoc = this.afs.doc<Experiment>(`experiments/${id}`);
    this.experimentDoc.update(data);
  }

  deleteExperiment(experiment: Experiment) {
    this.afs.doc<Experiment>(`experiments/${experiment.id}`).delete()
      .then(() => {
        const message = `Experiment: ${experiment.title} was deleted succesfully`;
        const action = 'Close';

        this.snackBar.open(message, action, {
          duration: 5000,
          panelClass: ['delete-snackbar']
        });
      })
      .catch(error => {
        alert(error.message);
      });
  }

  getAllExperiments(): Observable<Experiment[]> {
    return this.experimentCol.valueChanges();
  }
}
