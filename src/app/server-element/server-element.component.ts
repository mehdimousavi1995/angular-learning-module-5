import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None / Native
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;


  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges fired!');
    console.log(changes);
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  constructor() {
  }

  ngOnInit() {
    console.log('ngOnInit fired!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck fired!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit fired!');
  }

  ngAfterContentChecked (): void {
    console.log('ngAfterContentChecked fired!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit fired!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked fired!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy fired!');
  }
}
