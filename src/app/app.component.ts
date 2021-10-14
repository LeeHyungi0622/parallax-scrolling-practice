import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

interface sceneInfo {
  type: string,
  heightNum: number,
  scrollHeight: number,
  objs: { container:  ElementRef}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'parallax-scrolling-practice';
  sceneInfo: sceneInfo[];
  @ViewChild('ScrollSection0') scrollSection0!: ElementRef;
  @ViewChild('ScrollSection1') scrollSection1!: ElementRef;
  @ViewChild('ScrollSection2') scrollSection2!: ElementRef;
  @ViewChild('ScrollSection3') scrollSection3!: ElementRef;

  // 화면이 resize될 때마다 setLayout() 호출
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setLayout();
  }
  constructor() {
    this.sceneInfo = [];
  }
  ngAfterViewInit(): void {
    this.sceneInfo = [
      {
        // 0
        // 브라우저 높이의 5배로 scrollHeight 세팅
        type: 'sticky',
        heightNum: 5,
        scrollHeight: 0,
        objs: {
          container: this.scrollSection0
        }
      },
      {
        // 1
        // 브라우저 높이의 5배로 scrollHeight 세팅
        type: 'sticky',
        heightNum: 5,
        scrollHeight: 0,
        objs: {
          container: this.scrollSection1
        }
      },
      {
        // 2
        // 브라우저 높이의 5배로 scrollHeight 세팅
        type: 'sticky',
        heightNum: 5,
        scrollHeight: 0,
        objs: {
          container: this.scrollSection2
        }
      },
      {
        // 3
        // 브라우저 높이의 5배로 scrollHeight 세팅
        type: 'sticky',
        heightNum: 5,
        scrollHeight: 0,
        objs: {
          container: this.scrollSection3
        }
      },
    ];

    this.setLayout();
  }
  
  setLayout() {
    for (let i=0; i<this.sceneInfo.length; i++) {
      this.sceneInfo[i].scrollHeight = this.sceneInfo[i].heightNum * window.innerHeight;
      this.sceneInfo[i].objs.container.nativeElement.style.height = `${this.sceneInfo[i].scrollHeight}px`;
    }
        console.log(this.sceneInfo);
  }

}
