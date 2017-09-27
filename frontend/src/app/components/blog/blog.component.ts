import { Component, OnInit } from '@angular/core';

import { CommonService } from '../../services/common.service'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  providers: [ CommonService ]
})
export class BlogComponent implements OnInit {
  list: any = [];

  constructor(private commonService: CommonService) { }

  ngOnInit () {
    this.commonService.getUsers().subscribe((response) => {
      this.list = response;
    }, error => {
        console.log(error);
    })
  }
}
