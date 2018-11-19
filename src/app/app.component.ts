import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  students = [];

  addStd(fn, ln, loc) {
    this.fs.collection('students').add({ 'fname': fn, 'lname': ln, 'location': loc })
      .then((x) => console.log(x));
  }

  delete(id) {
    this.fs.collection('students').doc(id).delete();
  }

  constructor(private fs: AngularFirestore) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.fs.collection('students').snapshotChanges().subscribe((res) => {
      this.students = [];
      res.map((x) => {
        this.students.push({ 'data': x.payload.doc.data(), 'id': x.payload.doc.id });
      });
    });

  }
}
