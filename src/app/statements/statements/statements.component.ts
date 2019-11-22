import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.scss']
})
export class StatementsComponent implements OnInit {
  @ViewChild('chart', { static: false }) canvas: ElementRef<HTMLCanvasElement>;
  constructor(private httpClient: HttpClient) {}
  statements$= null;



  moneyChart: Chart;
  ngAfterViewInit() {
    const ctx = this.canvas.nativeElement;


    this.moneyChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Orange', 'Orange'],
        datasets: [
          {
            label: "Hauteur d'eau",
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            data: [1,4,3,5,5.2,4,3,5]
          }
        ]
      },
/*       options: {
        scales: {
          xAxes: [
            {
              type: 'time'
            }
          ]
        }
      } */
    });

  
  }
  ngOnInit() {
    this.statements$ = this.httpClient.get<any[]>('http://localhost:3000/statements')
  }


}
