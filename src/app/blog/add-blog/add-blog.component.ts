import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";
import {BlogModel, Blogs} from "../../../stores/Blog/blog.model";
import {Store} from "@ngrx/store";
import {addBlog, updateBlog} from "../../../stores/Blog/blog.actions";
import {getBlogById} from "../../../stores/Blog/blog.selectors";

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  pageTitle: string = '';
  editBlogId: number = 0;
  editData!: BlogModel;

  constructor(private dialogRef: MatDialogRef<AddBlogComponent>, private builder: FormBuilder,
              private store: Store<{ blog: Blogs }>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  blogForm = this.builder.group({
    id: this.builder.control(0),
    title: this.builder.control('', Validators.required),
    description: this.builder.control('', Validators.required),
  });

  ngOnInit(): void {
    this.pageTitle = this.data.title
    if (this.data.isEdit) {
      this.editBlogId = this.data.id;
      this.blogForm.value.id = this.editBlogId
      this.store.select(getBlogById(this.editBlogId)).subscribe(data => {
        this.editData = data
        this.blogForm.setValue({...this.editData})
      })

    }
  }

  closePopup() {
    this.dialogRef.close()
  }

  save() {

    if (this.blogForm.valid) {
      const blogInputs: BlogModel = {
        id: 0,
        title: this.blogForm.value.title as string,
        description: this.blogForm.value.description as string,
      }

      if (this.data.isEdit) {
        blogInputs.id = this.editBlogId;
        this.store.dispatch(updateBlog({blogInputs: blogInputs}))
      } else
        this.store.dispatch(addBlog({blogInputs: blogInputs}))
      this.closePopup()
    }
  }


}
