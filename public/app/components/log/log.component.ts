import { Component,OnInit } from '@angular/core';
import { FeathersService } from "../../services/feathers.service";
import { Log } from "../../models/log";


@Component({
  moduleId:module.id,
  selector: 'logs',
  templateUrl: 'log.component.html'
})
export class LogsComponent implements OnInit{
  logs:Array<Log> = []
  LogText:string;
  LogDev:string;
  LogDate:string;
  constructor(private _FeatherService:FeathersService) {

  }
  ngOnInit(){
    this._FeatherService.getLogs().subscribe(logs => {
      console.log(logs)
      this.logs = logs
    })
  }
  addLog(){
    let LogDate = new Date();

    let newLog = {
      developer: this.LogDev,
      text: this.LogText,
      date: LogDate
    }

    this._FeatherService.addLog(newLog).subscribe(data => {
      this.logs.push({
        _id:data._id,
        text:this.LogText,
        developer:this.LogDev,
        date: data.date
      });
      this.LogText = '';
      this.LogDev = ''
    })
  }

  deleteLog(id){
    this._FeatherService.deleteLog(id)
      .map(res => res.json())
        .subscribe(data => {
          for (let i = 0; i < this.logs.length; i++) {
            if(this.logs[i]._id == id){
              this.logs.splice(i, 1);
            };
          };
        });
  }
}
