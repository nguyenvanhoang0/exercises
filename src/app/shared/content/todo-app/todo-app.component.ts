import { Component, ElementRef, Renderer2, HostListener } from '@angular/core';

interface job{
  name : string,
  date : Date,
  ex1: number,
  ex2: string,
}

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent {
  jobs : job[] = [
    {
      name: "Complete project report",
      date: new Date(2024, 4, 10), 
      ex1: 3,
      ex2: "High pressure, need to meet the deadline" 
    },
    {
      name: "Interview candidate for software engineer position",
      date: new Date(2024, 4, 10), 
      ex1: 3,
      ex2: "High pressure, need to meet the deadline" 
    },
    {
      name: "Attend team meeting",
      date: new Date(2024, 4, 10), 
      ex1: 3,
      ex2: "High pressure, need to meet the deadline" 
    },
    
  ]

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngAfterViewInit() {
    const jobElements = this.elementRef.nativeElement.querySelectorAll('.job');
    jobElements.forEach((jobElement: HTMLElement, index: number) => {
      jobElement.draggable = true;
      jobElement.addEventListener('dragstart', (event: DragEvent) => {
        if (event.dataTransfer) {
          event.dataTransfer.setData('text/plain', 'job' + index);
        }
      });
    });
  }
  


  // Xử lý sự kiện khi thả vào mục "do_not"
  onDrop(event: DragEvent) {
    event.preventDefault();
    const targetElement = event.target as HTMLElement;
  console.log(targetElement);
  
    const jobClass = event.dataTransfer?.getData('text/plain');
    console.log(jobClass);
    console.log(1);
    
    
    if (
        targetElement.classList.contains('do_not') || 
         targetElement.classList.contains('doing') ||
         targetElement.classList.contains('did')) {
          console.log(jobClass);
          console.log(2);

      const jobElement = this.elementRef.nativeElement.querySelector('.' + jobClass);
      console.log(jobElement);
      
      if (jobElement) {
        this.renderer.appendChild(targetElement, jobElement.cloneNode(true));
        const oldParent = jobElement.parentNode;
        if (oldParent) {
          oldParent.removeChild(jobElement); // Xóa phần tử cũ
        }
      }
    }
    console.log(jobClass);
    
  }


  // Ngăn chặn mặc định hành vi khi thả
  @HostListener('document:dragover', ['$event'])
  onDragOver(event: DragEvent) {
    // console.log(2);
    
    event.preventDefault();
  }
}
