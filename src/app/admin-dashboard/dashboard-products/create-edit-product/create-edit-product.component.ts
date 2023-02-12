import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../../../shared/service-proxy/category/category.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/shared/service-proxy/product/product.service';

@Component({
  selector: 'app-create-edit-product',
  templateUrl: './create-edit-product.component.html',
  styleUrls: ['./create-edit-product.component.scss']
})
export class CreateEditProductComponent implements OnInit {

  selectedFiles: Filedata[] = new Array();
  url;
  format;
  category = [];
  showValidationError = false;
  productForm = this.fb.group({
    name: new FormControl(null, [Validators.required]),
    category: new FormControl('0', [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    description: new FormControl(null),
    isActive: new FormControl(true),
    images: new FormControl(null)
  });

  constructor(
    private http: HttpClient,
    private _CategoryService: CategoryService,
    private router: Router,
    private fb: FormBuilder,
    private _ProductService: ProductService) { }

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList() {
    this._CategoryService.getAllCategory()
      .subscribe(res => {
        this.category = res;
      });
  }

  onSelectFile(event) {
    const files = event.target.files;
    for (let file of files) {
      let filedata = new Filedata();
      if (file) {
        var reader = new FileReader();
        filedata.name = file.name;
        reader.readAsDataURL(file);
        if (file.type.indexOf('image') > -1) {
          filedata.format = 'image';
        } else if (file.type.indexOf('video') > -1) {
          filedata.format = 'video';
        }
        reader.onload = (event) => {
          filedata.url = (<FileReader>event.target).result;
          this.selectedFiles.push(filedata);
        }
      }
    }
  }

  deleteFile(file) {
    let index = this.selectedFiles.findIndex(s => s.name == file.name);
    if (index > -1)
      this.selectedFiles.splice(index, 1);
  }

  cancel() {
    this.router.navigate(['adminDashboard/product']);
  }

  save() {
    this.showValidationError = false;
    if (!this.productForm.valid || this.productForm.value.category == '0') {
      this.showValidationError = true;
      return false;
    }
    if (this.selectedFiles.length > 0) {
      this.productForm.controls.images.setValue(JSON.stringify(this.selectedFiles));
    }

    this._ProductService.createProduct(this.productForm.value)
      .subscribe(res => {
        console.log(res);
      });
  }
}

class Filedata {
  name: string;
  url: string | ArrayBuffer;
  format: string;
}
