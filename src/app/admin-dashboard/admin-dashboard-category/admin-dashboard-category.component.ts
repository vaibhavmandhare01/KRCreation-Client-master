import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CategoryService } from 'src/app/shared/service-proxy/category/category.service';

@Component({
  selector: 'app-admin-dashboard-category',
  templateUrl: './admin-dashboard-category.component.html',
  styleUrls: ['./admin-dashboard-category.component.scss']
})
export class AdminDashboardCategoryComponent implements OnInit {

  display = "none";
  orders = [];
  categoryForm: FormGroup;
  categoryId;
  showValidation = false;
  categoryList = [];
  categoryType = [
    { name: 'Sarees', value: '1' }
  ];

  constructor(private modalService: NgbModal,
    private fb: FormBuilder,
    private _CategoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategoryList()
  }

  getCategoryList() {
    this._CategoryService.getAllCategory()
      .subscribe(res => {
        this.categoryList = res;
      });
  }

  getcategoryTypeName(value) {
    let type = this.categoryType.filter(s => s.value == value);
    return type[0].name;
  }

  deleteCategory(id) {
    this._CategoryService.deleteCategory(id)
      .subscribe(res => {
        console.log(res);
        this.getCategoryList();
      })
  }

  // create category start here
  Create(content) {
    this.open(content);
    this.categoryId = null;
    this.categoryForm = this.fb.group({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
      type: new FormControl(null)
    });
  }

  Edit(content, category) {
    this.open(content);
    this.categoryId = category._id;
    this.categoryForm = this.fb.group({
      name: new FormControl(category.name, [Validators.required]),
      description: new FormControl(category.description),
      type: new FormControl(category.type)
    });

  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        //this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  save(modal) {
    this.showValidation = false;
    if (!this.categoryForm.valid) {
      this.showValidation = true;
      return;
    }

    if (this.categoryId)
      this.update(this.categoryForm.value, modal)
    else
      this.create(this.categoryForm.value, modal);

  }

  create(body, modal) {
    this._CategoryService.createCategory(body)
      .subscribe(res => {
        console.log(res);
        this.close(modal);
        this.getCategoryList();
      });
  }

  update(body, modal) {
    this._CategoryService.updateCategory(this.categoryId, body)
      .subscribe(res => {
        console.log(res);
        this.close(modal);
        this.getCategoryList();
      });
  }

  close(modal) {
    modal.close();
    this.categoryId = null;
    this.categoryForm.reset();
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
