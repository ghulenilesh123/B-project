import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-misc-child',
  templateUrl: './misc-child.component.html',
  styleUrls: ['./misc-child.component.css']
})
export class MiscChildComponent {


  @ContentChild('contentFromParent') contentFromParentComp!: ElementRef;
// ng content
  ngAfterContentInit(){
    console.log(this.contentFromParentComp.nativeElement);
    this.contentFromParentComp.nativeElement.style.color = "red";
    this.contentFromParentComp.nativeElement.style.backgroundColor = "yellow";
    this.contentFromParentComp.nativeElement.style.border="2px solid black";
    this.contentFromParentComp.nativeElement.style.width="50%";
  }
}

