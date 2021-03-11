import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f") signupForm: NgForm;
  defaultQuestion = "pet";
  suggestUserName() {
    const suggestedName = "Superuser";
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signupForm);
    if (this.signupForm.controls.email.valid) {
      console.log("This form is valid thank you for entering a username");
    } else {
      console.log("This form is not valid please enter a valid email address");
    }
  }
}
