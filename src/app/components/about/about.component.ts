import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  myName: string = "Sam";
  myAge: string = "25";
  student: boolean = true;
  courses: (string | number)[] = ["React", "Angular", "Mean", "Js", 23];
  courseList: {name: string; duration: string; credits: number} = {
    name: "React",
    duration: "3months",
    credits: 3,
  }

course2: any = {
  name: "Angular",
  duration: "4months",
  credits: 3
}
typeX: string = "password";
imgName = "introweb.png"

constructor(){
  console.log(this.myName);
  console.log(this.courseList);
}

getDate(){
  let date = new Date().toLocaleDateString;
  return date;
}

type(x: string){
  this.typeX = x;
}

img(x: string){
  this.imgName=x;
}


}
