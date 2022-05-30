import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  title = 'Hello, world!';

  tags: Array<any> = ['Hello'];

  constructor() { }

  ngOnInit(): void {
  }

  onAddTag(input: any) {
    input.target.placeholder='Нужно ввести тег';
    if(input.target.value.length < 1) return;
    this.tags.push(input.target.value);
    input.target.value = "";
    input.target.placeholder='';
  }

  onChange(input: any) {
  }

  onClickButton(button: any) {
    this.tags.shift();
  }
}
