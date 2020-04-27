import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { formatDate } from '@angular/common';
import { DataCollectionService } from 'src/app/data-collection.service';
import { IData } from 'src/app/data-collection.interface';

@Component({
  selector: 'app-world-glance',
  templateUrl: './world-glance.component.html',
  styleUrls: ['./world-glance.component.css'],
})
export class WorldGlanceComponent implements OnInit {
  constructor(private dataColelctionService: DataCollectionService) {}
  private datasets: IData;
  private totalConfirmed: Array<number> = [];
  private totalDeceased: Array<number> = [];
  private totalRecovered: Array<number> = [];
  public lineChartLabels: Label[] =[];
  public lineChartData: ChartDataSets[] =[];
  ngOnInit() {
    const today = new Date();
    this.bindData();
    this.lineChartLabels = this.getTimeline('02-01-2020', today);
    this.lineChartData = [
      { data: this.totalConfirmed, label: 'Total Confirmed' },
      { data: this.totalRecovered, label: 'Total Recovered' },
      { data: this.totalDeceased, label: 'Total Deceased' },
    ];
  }

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      borderWidth: 2,
    },
    {
      borderColor: 'green',
      borderWidth: 2,
    },
    {
      borderColor: 'red',
      borderWidth: 2,
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  private bindData() {
    this.dataColelctionService.getDataset().subscribe((data) => {
      this.datasets = data;
      this.datasets.cases_time_series.forEach((item) => {
        this.totalConfirmed.push(item.totalconfirmed);
        this.totalDeceased.push(item.totaldeceased);
        this.totalRecovered.push(item.totalrecovered);
      });
    });
  }

  private bindDataByDate(startDate: Date) {
    this.totalConfirmed = [];
    this.totalDeceased = [];
    this.totalRecovered = [];
      this.datasets.cases_time_series.forEach((item) => { 
        const formattedStartDate  = formatDate(startDate,'d LLLL', 'en-US');
        if(item.date.trim() === formatDate(startDate,'d LLLL', 'en-US')){
          this.totalConfirmed.push(item.totalconfirmed);
          this.totalDeceased.push(item.totaldeceased);
          this.totalRecovered.push(item.totalrecovered);
          startDate.setDate(startDate.getDate() + 1);
        }
      });
  }

  private getTimeline(start, end) {
    let dateArr = new Array();
    let startDate = new Date(start);
    let endDate = new Date(end);
    while (startDate <= endDate) {
      dateArr.push(formatDate(startDate,'d LLLL','en-US'));
      startDate.setDate(startDate.getDate() + 1);
    }
    return dateArr;
  }

  public lineChartChange(){
    const today = new Date();
    let startDate = new Date();
    startDate.setDate(today.getDate() -14);
    this.lineChartLabels = this.getTimeline(startDate, today);
    this.bindDataByDate(startDate);
    this.lineChartData = [
      { data: this.totalConfirmed, label: 'Total Confirmed' },
      { data: this.totalRecovered, label: 'Total Recovered' },
      { data: this.totalDeceased, label: 'Total Deceased' },
    ];
  }
}
