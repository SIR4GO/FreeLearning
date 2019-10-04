import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {PostRequest} from '../models/PostRequest';
import {validate} from 'class-validator';
import {PostService} from './post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  postRequest: PostRequest;

  modalRef: BsModalRef;

  constructor(private _formBuilder: FormBuilder, private modalService: BsModalService, private postService: PostService) {
  }

  myControl = new FormControl();
  options: string[] = ['Grammars', 'vocabulary', 'vocabulary', 'vocabulary', 'Propositions'];

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.postRequest = new PostRequest();

  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  public createPost() {

    validate(this.postRequest).then(errors => { // errors is an array of validation errors
      if (errors.length > 0) {
        console.log('validation failed. errors: ', errors);
        console.log(this.postRequest);
      } else {
        this.postService.createPost(this.postRequest).subscribe(res => {
            console.log(res);
          },
          err => {
            console.log(err);
          });
      }
    });

  }


}
