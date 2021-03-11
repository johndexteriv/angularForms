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
  defaultGender = "male";
  answer = "";
  genders = ["male", "female"];
  user = {
    username: "",
    email: "",
    secretQuestion: "",
    answer: "",
    gender: "",
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = "Superuser";
    // this.signupForm.setValue({
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  // onSubmit() {
  //   console.log(this.signupForm);
  //   if (this.signupForm.controls.email.valid) {
  //     console.log("This form is valid thank you for entering a username");
  //   } else {
  //     console.log("This form is not valid please enter a valid email address");
  //   }
  // }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionsAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
