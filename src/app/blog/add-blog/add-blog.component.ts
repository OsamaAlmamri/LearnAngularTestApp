import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";
import {BlogModel, Blogs} from "../../../stores/Blog/blog.model";
import {Store} from "@ngrx/store";
import {addBlog} from "../../../stores/Blog/blog.actions";

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent {

  constructor(private dialogRef: MatDialogRef<AddBlogComponent>, private builder: FormBuilder,
              private  store:Store<{blog:Blogs}>) {
  }

  blogForm = this.builder.group({
    id: this.builder.control(0),
    title: this.builder.control('', Validators.required),
    description: this.builder.control('', Validators.required),
  });

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

      this.store.dispatch(addBlog({blogInputs:blogInputs}))
this.closePopup()
    }
  }
}
