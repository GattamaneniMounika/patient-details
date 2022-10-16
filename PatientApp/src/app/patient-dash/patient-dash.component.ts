import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { PatientData } from './patient.model';

@Component({
    selector: 'app-patient-dash',
    templateUrl: './patient-dash.component.html',
    styleUrls: ['./patient-dash.component.css']
})
export class PatientDashComponent implements OnInit {

    formValue!: FormGroup
    PatientModelObj: PatientData = new PatientData;
    constructor(private formBuilder: FormBuilder, private api: ApiService) { }

    ngOnInit(): void {
        this.formValue = this.formBuilder.group({
            name: [''],

            mail: [''],
            adress: [''],
            problem: [''],
            doctor: ['']

        })
    }
    //now subscribing our data which is maped via services..0
    addPatient() {
        this.PatientModelObj.name = this.formValue.value.name;
        this.PatientModelObj.mail = this.formValue.value.email;
        this.PatientModelObj.address = this.formValue.value.address;
        this.PatientModelObj.problem = this.formValue.value.problem;
        this.PatientModelObj.Doctorname = this.formValue.value.Doctor;

        this.api.postPatient(this.PatientModelObj).subscribe(res => {
            console.log(res);
            alert("Patient appointment added successful@😃");
        },
            err => {
                alert("error@😔");
            }
        )
    }
}
